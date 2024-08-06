import RateChange from '../RateChange/RateChange';
import ReactIcons from '../ReactIcons.jsx/ReactIcons';
import classes from './Overview.module.css';

// list data to be rendered for overview order records
const ORDERS = [
  {
    name: 'totalOrders',
    iconStylingName: 'totalOrdersIcon',
    icon: 'total-orders',
    label: 'Total Orders',
    insightStylingName: 'totalOrdersInsight',
    datafieldName: 'totalOrders',
    rateChange: 3,
  },
  {
    name: 'totalDelivered',
    iconStylingName: 'totalDeliveredIcon',
    icon: 'total-delivered',
    label: 'Total Delivered',
    insightStylingName: 'totalDeliveredInsight',
    datafieldName: 'totalDelivery',
    rateChange: -3,
  },
  {
    name: 'totalCancelled',
    iconStylingName: 'totalCancelledIcon',
    icon: 'total-delivered',
    label: 'Total Cancelled',
    insightStylingName: 'totalCancelledInsight',
    datafieldName: 'totalCancelled',
    rateChange: 3,
  },
  {
    name: 'revenue',
    iconStylingName: 'revenueIcon',
    icon: 'total-revenue',
    label: 'Total Revenue',
    insightStylingName: 'revenueInsight',
    datafieldName: 'totalRevenue',
    rateChange: -3,
  },
];

//displaying dashboard for order related data, while assigning classnames dynamically to the elements
export default function OverviewOrder({ totals }) {
  return (
    <div className={classes.overviewOrders}>
      {ORDERS.map((order) => (
        <div className={classes[order.name]} key={order.name}>
          <div className={classes[order.iconStylingName]}>
            <ReactIcons icon={order.icon} />
          </div>
          <p>{order.label}</p>
          <div className={classes[order.insightStylingName]}>
            <p>
              {order.name === 'revenue' && <span className="dollar">$</span>}
              {totals[order.datafieldName]}
            </p>
            <RateChange rate={order.rateChange} />
          </div>
        </div>
      ))}
    </div>
  );
}
