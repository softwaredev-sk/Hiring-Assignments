import classes from './OrderStatus.module.css';

// component to display order status, for delivered, cancelled or pending.
export default function OrderStatus({ status }) {
  return (
    <span className={`${classes.status} ${classes[status]}`}>{status}</span>
  );
}
