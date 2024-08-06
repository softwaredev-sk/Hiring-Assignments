import classes from './RateChange.module.css';

// component to show rate change details of order detail overview and profit overview in overview section. Used colors based on negative or positive values.
export default function RateChange({ rate, customColor }) {
  return (
    <div
      className={`${classes.rateChange} ${
        rate >= 0 ? classes.rateIncrease : classes.rateDecrease
      }`}
      style={{ color: customColor }}
    >
      {Math.floor(Math.abs(rate))}%
    </div>
  );
}
