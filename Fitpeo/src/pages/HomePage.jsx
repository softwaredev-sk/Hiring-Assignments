import { useLoaderData } from 'react-router-dom';
import classes from './HomePage.module.css';
import Overview from '../Components/Overview/Overview';
import Activity from '../Components/Activity/Activity';
import QuickLinks from '../Components/QuickLinks/QuickLinks';
import RecentOrders from '../Components/RecentOrders/RecentOrders';
import CustomersFeedback from '../Components/CustomersFeedback/CustomersFeedback';

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
      <div
        className={classes.grid}
        style={{ display: 'flex', flexDirection: 'column', gap: 30 }}
      >
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
