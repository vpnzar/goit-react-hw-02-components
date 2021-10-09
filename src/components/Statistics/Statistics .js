import React from 'react';
import s from './Statistics.module.css';
import PropTypes from 'prop-types';

const Statistics = ({ good, neutral, bad, total, positivePercentage }) => (
  <div className="stats">
    <ul className={s.statsList}>
      <li>
        <b>Good: </b>
        <span>{good}</span>
      </li>
      <li>
        <b>Neutral: </b>
        <span>{neutral}</span>
      </li>
      <li>
        <b>Bad: </b>
        <span>{bad}</span>
      </li>
      <li>
        <b>Total: </b>
        <span>{total}</span>
      </li>
      <li>
        <b>Positive feedback: </b>
        <span>{positivePercentage}%</span>
      </li>
    </ul>
  </div>
);

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};

export default Statistics;
