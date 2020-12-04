import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';


const Statistic = styled.section`
  border: 1 px solid #fff;
  max-width: 400px;
  margin: 0 auto;
  background: #000000;

.title {
  color: #fff;
  text-transform: uppercase;
  font-size: 18px;
  text-align: center;
  padding: 25px 0;
}

.stat-list {
  display: flex;
  justify-content: space-between;
}

.item {
  border: 1px solid #fff;
  list-style-type: none;
  padding: 15px;
  color: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
}

.statistics .label {
  color: #fff;
}

.percentage {
  font-size: 18px;
}

`;

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