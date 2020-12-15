import React from 'react';
import Statistic from './StyledComponents';
import PropTypes from 'prop-types';



const Statistics = ({ title, stats }) => {
  return (
    <Statistic className="statistics">
      {title && (<h2 className="title">{title}</h2>)}

      <ul className="stat-list">
        {stats.map((stat) => (
          <li className="item" key={stat.id}>
            <span className="label">{stat.label}</span>
            <span className="percentage">{stat.percentage}</span>
          </li>
        ))}
      </ul>
    </Statistic>
  );
}

Statistics.defaultProps = {
  title: "",
};

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.array.isRequired,
};

export default Statistics;