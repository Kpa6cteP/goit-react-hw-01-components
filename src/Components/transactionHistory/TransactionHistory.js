import React from 'react';
import styled from 'styled-components';

const Transaction = styled.table`
  padding: 20px 0;
  width: 100%;
  max-width: 500px;
  margin: 0 auto;
  text-align: center;
  box-shadow: 0 0 5px rgba(0,0,0, .1);

thead {
  background: #00BCD5;
  color: #fff;
  text-transform: uppercase;
}

thead th {
  padding: 15px;
}

tbody {
  background: #fff;
}

tbody tr:nth-child(even) {
  background: #ECF1F4;
}

tbody td {
  padding: 10px;
}
`;

const TransactionHistory = ({ items }) => {
  return (
    <Transaction>
      <thead>
        <tr>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </thead>
      <tbody>
        {items.map(({ id, type, amount, currency }) => {
          return (
            <tr key={id}>
              <td>{type}</td>
              <td>{amount}</td>
              <td>{currency}</td>
            </tr>
          );
        })}
      </tbody>
    </Transaction>
  );
}

export default TransactionHistory;