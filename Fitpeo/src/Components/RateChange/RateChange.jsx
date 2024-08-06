import classes from './RateChange.module.css';

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
