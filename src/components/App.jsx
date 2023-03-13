import { Profile } from "./Profile/Profile";
import { Statistics } from "./Statistics/Statistics";
import { FriendList } from "./FriendList/FriendList";
import { TransactionHistory } from "./TransactionHistory/TransactionHistory";
import user from '../../src/user.json';
import data from '../../src/data.json';
import friends from '../../src/friends.json'
import transactions from '../../src/transactions.json'

export const App = () => {

  return (
    <div
      style={{
        height: '100vh',
        display: 'block',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101'
      }}
    >
     <Profile
      username={user.username}
      tag={user.tag}
      location={user.location}
      avatar={user.avatar}
      stats={user.stats}
    />
    <Statistics title={"UPLOAD STATS"} stats={data}/>
    <FriendList friendlist={friends}/>
    <TransactionHistory history={transactions}/>
    </div>
  );
};
