import ReactIcons from '../ReactIcons.jsx/ReactIcons';
import classes from './Rating.module.css';

export default function Rating({ rating }) {
  return (
    <div className={classes.ratingContainer}>
      {[1, 2, 3, 4, 5].map((item, ind) => (
        <span
          key={item + ind}
          className={rating > ind ? classes.yellow : classes.white}
        >
          <ReactIcons icon="star" />
        </span>
      ))}
    </div>
  );
}
