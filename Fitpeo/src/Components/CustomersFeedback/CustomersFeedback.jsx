import Rating from '../Rating/Rating';
import classes from './CustomersFeedback.module.css';

export default function CustomersFeedback({ feedback }) {
  return (
    <aside className={classes.feedbackSection}>
      <h3>{"Customer's Feedback"}</h3>
      <div className={classes.feedbackContainer}>
        {[...feedback, ...feedback, ...feedback].map((data, ind) => (
          <div
            key={data.customer + data.feedbackId + ind}
            className={classes.feedback}
          >
            <div className={classes.user}>
              <img src={data.profilePhotoUrl} />
              <span>{data.customer}</span>
            </div>
            <span className={classes.rating}>
              <Rating rating={data.stars} />
            </span>
            <div
              className={classes.review}
              dangerouslySetInnerHTML={{ __html: data.review }}
            ></div>
          </div>
        ))}
      </div>
    </aside>
  );
}
