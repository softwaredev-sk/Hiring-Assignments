import { useLoaderData } from 'react-router-dom';
import classes from './HomePage.module.css';
import Overview from '../Components/Overview/Overview';
import Activity from '../Components/Activity/Activity';
import QuickLinks from '../Components/QuickLinks/QuickLinks';
import RecentOrders from '../Components/RecentOrders/RecentOrders';
import CustomersFeedback from '../Components/CustomersFeedback/CustomersFeedback';

// page component to display home page
export default function HomePage() {
  const {
    fakeOrders,
    fakePreviousOrders,
    recentOrders,
    customersFeedback,
    fakeActivityData,
  } = useLoaderData();
  return (
    <main className={classes.homepage}>
      <h2>Dashboard</h2>
      <div className={classes.flexGrid}>
        <Overview orders={fakeOrders} prevOrders={fakePreviousOrders} />
        <section className={classes.flexbox}>
          <Activity activityData={fakeActivityData} />
          <QuickLinks />
        </section>
        <section className={classes.flexbox}>
          <RecentOrders recentOrders={recentOrders} />
          <CustomersFeedback feedback={customersFeedback} />
        </section>
      </div>
    </main>
  );
}
