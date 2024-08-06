import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import RootLayout from './Components/RootLayout/RootLayout';
import HomePage from './pages/HomePage';

// loader function to fetch and send data to useLoaderData() hook
async function loadFakeOrderData() {
  const response = await fetch('/data.json');
  const responseData = await response.json();
  // return responseData;
  const recentOrders = responseData.FAKE_ORDERS.filter(
    (order) => order.orderDate !== undefined
  );
  return {
    fakeOrders: responseData.FAKE_ORDERS,
    fakePreviousOrders: responseData.FAKE_LAST_ORDERS_RECORD,
    customersFeedback: responseData.FEEDBACK,
    recentOrders,
    fakeActivityData: responseData.FAKE_ACTIVITY_DATA,
  };
}

// registering routes
const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    children: [
      { index: true, loader: loadFakeOrderData, element: <HomePage /> },
    ],
  },
]);

// app component with router provider
function App() {
  return <RouterProvider router={router} />;
}

export default App;
