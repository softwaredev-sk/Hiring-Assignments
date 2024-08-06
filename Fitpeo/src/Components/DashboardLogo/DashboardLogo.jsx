import classes from './DashboardLogo.module.css';

// custom logo for dashboard navbar. achieved only usin css.
export default function DashboardLogo() {
  return (
    <div className={classes.container}>
      <div className={classes.leaves}>
        <div className={classes.leafOne}></div>
        <div className={classes.leafTwo}></div>
        <div className={classes.leafThree}></div>
        <div className={classes.leafFour}></div>
      </div>
    </div>
  );
}
