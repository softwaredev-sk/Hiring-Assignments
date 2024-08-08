import { useState } from 'react';
import classes from './Activity.module.css';
import BarChart from './BarChart';

//activity component to show activity bar chart
export default function Activity({ activityData }) {
  const [activityDataState, setActivityDataState] = useState(
    activityData.weeklyModified
  );

  return (
    <article className={classes.activity}>
      <header className={classes.header}>
        <h3>Activity</h3>
        <div className={classes.duration}>
          <label htmlFor="duration">
            <select
              id="duration"
              name="duration"
              aria-labelledby="duration"
              defaultValue="weeklyModified"
              onChange={(e) =>
                setActivityDataState(activityData[e.target.value])
              }
            >
              <option value="daily" name="daily">
                Daily
              </option>
              <option value="weeklyModified" name="weekly">
                Weekly
              </option>
              <option value="weeklyOriginal" name="weekly original">
                Weekly 2
              </option>
              <option value="monthly" name="monthly">
                Monthly
              </option>
            </select>
          </label>
        </div>
      </header>
      <div className={classes.activityChart}>
        <BarChart activityData={activityDataState} />
        {!activityDataState.consistent && (
          // hacky way to achieve the design as per the image as the data provided in design file is not mathematically correct for given data vs x-axis labelling. Used to show manual x-axis label for weekly records, which is shown in design file, whereas daily and monthly shows x-axis label as they are.
          <div className={classes.hackOverlay}>
            <div className={classes.hackLayer}>
              {[5, 9, 11, 13, 15, 17, 19, 21, 23, 25, 27].map((val) => (
                <div key={val}>{val}</div>
              ))}
            </div>
          </div>
        )}
      </div>
    </article>
  );
}
