import PropTypes from 'prop-types';

export const Statistic = ({ good, neutral, bad, total, percent }) => {
  return (
    <ul>
      <li className="good">Good: {good}</li>
      <li className="neutral">Neutral: {neutral}</li>
      <li className="bad">Bad: {bad}</li>
      <li className="total">Total: {total}</li>
      <li className="feedback">Positive feedback: {percent}</li>
    </ul>
  );
};

Statistic.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  percent: PropTypes.number.isRequired,
};
