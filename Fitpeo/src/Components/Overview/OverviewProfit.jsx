import classes from './Overview.module.css';
import RateChange from '../RateChange/RateChange';
import ProgressDonut from './ProgressDonut';

// component to render profit overview and displaying the progress donut chart
export default function OverviewProfit({ totals }) {
  return (
    <div className={classes.overviewProfit}>
      <div className={classes.overviewProfitFlexbox}>
        <h3 className="strongColor">Net Profit</h3>
        <div className={`.strongerColor ${classes.profitInfo}`}>
          <span className="dollar">$</span>
          {totals.netProfit}
        </div>
        <RateChange rate={3} customColor="var(--netProfitIncreaseColor)" />
      </div>
      <div className={classes.overviewProfitChart}>
        <div className={classes.progressChartBg}>
          <ProgressDonut />
          <div className={classes.progressChartInnerBg}></div>
          <div className={classes.centerText}>
            <span>70%</span> <span>Goal</span> <span>Completed</span>
          </div>
        </div>
        <span className={classes.note}>
          The values here has been rounded off.
        </span>
      </div>
    </div>
  );
}
