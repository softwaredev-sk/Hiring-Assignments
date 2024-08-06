import Rating from '../Rating/Rating';
import classes from './CustomersFeedback.module.css';

// component to display customer feedback section
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
              <img
                src={data.profilePhotoUrl}
                alt={`Profile photo of ${data.customer}`}
              />
              <span>{data.customer}</span>
            </div>
            <span className={classes.rating}>
              <Rating rating={data.stars} />
            </span>
            <div
              className={classes.review}
              dangerouslySetInnerHTML={{ __html: data.review }} //used dangerouslySetInnerHTML as one of the comments has anchor tag in its content and it is expected to render as a link in webpage, without compromising on security
            ></div>
          </div>
        ))}
      </div>
    </aside>
  );
}
