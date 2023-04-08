import css from './FeedbackOptions.module.css';

export const FeedbackOptions = ({ names, onClickFeedback }) => {
  return (
    <div className={css.container}>
      {names.map(name => (
        <button
          className={css.button}
          key={name}
          onClick={() => onClickFeedback(name)}
        >
          {name}
        </button>
      ))}
    </div>
  );
};
