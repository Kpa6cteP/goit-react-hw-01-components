import React from 'react';

import user from '../data/user.json';
import Profile from './profile/Profile';

import statisticalData from '../data/statistical-data';
import Statistics from './statistics/Statistics';

import friends from "../data/friends"
import FriendList from './friendList/FriendList';

import transactions from '../data/transactions.json';
import TransactionHistory from './transactionHistory/TransactionHistory';


const App = () => {
  return (
    <div>
      <Profile {...user} />
      <Statistics title="Upload stats" stats={statisticalData} />;
      <Statistics stats={statisticalData} />;
      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />
    </div>
  )
}

export default App;
