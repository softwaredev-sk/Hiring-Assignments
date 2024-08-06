import classes from './OrderStatus.module.css';

export default function OrderStatus({ status }) {
  return (
    <span className={`${classes.status} ${classes[status]}`}>{status}</span>
  );
}
