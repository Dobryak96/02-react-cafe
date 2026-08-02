import css from './Options.module.css';
const Options = ({ updateFeedback, resetFeedback, totalFeedback }) => (
  <div className={css.optionButton} >
    <button onClick={() => updateFeedback('good')}>Good</button>
    <button onClick={() => updateFeedback('neutral')}>Neutral</button>
    <button onClick={() => updateFeedback('bad')}>Bad</button>
    {totalFeedback > 0 && <button className={css.optionButton} onClick={resetFeedback}>Reset</button>}
  </div>
);

export default Options;