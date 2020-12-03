import Profile from './profile/Profile';
import user from '../data/user.json';

import Statistics from './statistics/Statistics';
import statisticalData from '../data/statistical-data.json';

import FriendList from './friendList/FriendList';
import friends from '../data/friends.json';

import TransactionHistory from './transactionHistory/TransactionHistory';
import transactions from '../data/transactions.json';


function App() {
  return (
    <>
      <Profile user={user} />
      <Statistics title="Upload stats" stats={statisticalData} />
      <Statistics stats={statisticalData} />
      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />
    </>
  );
}

export default App;
