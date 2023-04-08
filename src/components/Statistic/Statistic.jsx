import PropTypes from 'prop-types';
import css from './Statistic.module.css';

export const Statistic = ({ good, neutral, bad, total, percent }) => {
  return (
    <ul className={css.list}>
      <li className={css.good}>Good: {good}</li>
      <li className={css.neutral}>Neutral: {neutral}</li>
      <li className={css.bad}>Bad: {bad}</li>
      <li className={css.total}>Total: {total}</li>
      <li className={css.feedback}>Positive feedback: {percent}</li>
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
