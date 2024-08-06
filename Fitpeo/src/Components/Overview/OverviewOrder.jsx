import RateChange from '../RateChange/RateChange';
import ReactIcons from '../ReactIcons.jsx/ReactIcons';
import classes from './Overview.module.css';

export default function OverviewOrder({ totals }) {
  return (
    <div className={classes.overviewOrders}>
      <div className={classes.totalOrders}>
        <div className={classes.totalOrdersIcon}>
          <ReactIcons icon="total-orders" />
        </div>
        <p>Total Orders</p>
        <div className={classes.totalOrdersInsight}>
          <p>{totals.totalOrders}</p>
          <RateChange rate={3} />
        </div>
      </div>
      <div className={classes.totalDelivered}>
        <div className={classes.totalDeliveredIcon}>
          <ReactIcons icon="total-delivered" />
        </div>
        <p>Total Delivered</p>
        <div className={classes.totalDeliveredInsight}>
          <p>{totals.totalDelivery}</p>
          <RateChange rate={-3} />
        </div>
      </div>
      <div className={classes.totalCancelled}>
        <div className={classes.totalCancelledIcon}>
          <ReactIcons icon="total-delivered" />
        </div>
        <p>Total Cancelled</p>
        <div className={classes.totalCancelledInsight}>
          <p>{totals.totalCancelled}</p>
          <RateChange rate={3} />
        </div>
      </div>
      <div className={classes.revenue}>
        <div className={classes.revenueIcon}>
          <ReactIcons icon="total-revenue" />
        </div>
        <p>Total Revenue</p>
        <div className={classes.revenueInsight}>
          <p>
            <span className="dollar">$</span>
            {totals.totalRevenue}
          </p>
          <RateChange rate={-3} />
        </div>
      </div>
    </div>
  );
}
