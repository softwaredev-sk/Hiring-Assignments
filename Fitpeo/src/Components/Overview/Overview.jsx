import { useEffect, useState } from 'react';
import classes from './Overview.module.css';
import OverviewOrder from './OverviewOrder.jsx';
import OverviewProfit from './OverviewProfit.jsx';

export default function Overview({ orders }) {
  const [totals, setTotals] = useState({
    totalOrders: 0,
    totalDelivery: 0,
    totalCancelled: 0,
    totalRevenue: '0',
    netProfit: 0,
  });

  useEffect(() => {
    function formatAmount(amt) {
      if (!amt) return 0;
      if (typeof amt !== 'number') {
        return;
      }
      if (amt >= 1000000000) {
        return (amt / 1000000000).toFixed(0) + 'T';
      } else if (amt >= 1000000) {
        return (amt / 1000000).toFixed(0) + 'M';
      } else if (amt >= 1000) {
        return (amt / 1000).toFixed(0) + 'k';
      }
      return amt;
    }
    const totalOrders = orders
      .filter((order) => order.orderStatus !== 'pending')
      .length.toString()
      .padStart(2, 0);
    const totalDelivery = orders
      .filter((order) => order.orderStatus === 'delivered')
      .length.toString()
      .padStart(2, 0);
    const totalCancelled = orders
      .filter((order) => order.orderStatus === 'cancelled')
      .length.toString()
      .padStart(2, 0);
    let totalRevenue = orders
      .filter((order) => order.orderStatus !== 'cancelled')
      .reduce((total, order) => order.orderValue + total, 0);

    const costPrice = orders
      .filter((order) => order.orderStatus !== 'cancelled')
      .reduce((total, order) => total + order.costPrice, 0);
    const netProfit = totalRevenue - costPrice;

    totalRevenue = formatAmount(totalRevenue);

    setTotals((prevState) => ({
      ...prevState,
      totalOrders,
      totalDelivery,
      totalCancelled,
      totalRevenue,
      netProfit,
    }));
  }, [orders]);

  return (
    <section className={classes.overview}>
      <OverviewOrder totals={totals} />
      <OverviewProfit totals={totals} />
    </section>
  );
}
