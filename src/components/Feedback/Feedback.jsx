import css from './Feedback.module.css';
const Feedback = ({ feedback, total, positivePercentage }) => (
  <div className={css.feedbackList}>
    <h2>Feedback Statistics</h2>
    <p className={css.feedbackListItemGood}>Good: {feedback.good}</p>
    <p className={css.feedbackListItemNeutral}>Neutral: {feedback.neutral}</p>
    <p className={css.feedbackListItemBad}>Bad: {feedback.bad}</p>
    <p className={css.feedbackListItemTotal}>Total: {total}</p>
    <p className={css.feedbackListItemPositive}>Positive Feedback: {positivePercentage}%</p>
  </div>
);

export default Feedback;