export const FeedbackOptions = ({ names, onClickFeedback }) => {
  return (
    <div>
      {names.map(name => (
        <button
          className="button"
          key={name}
          onClick={() => onClickFeedback(name)}
        >
          {name}
        </button>
      ))}
    </div>
  );
};
