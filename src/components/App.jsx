import { Profile } from "./Profile/Profile";

import user from '../../src/user.json';
import data from '../../src/data.json';
import { Statistics } from "./Statistics/Statistics";

export const App = () => {
  console.log(user);
  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101'
      }}
    >
     {/* <Profile
      username={user.username}
      tag={user.tag}
      location={user.location}
      avatar={user.avatar}
      stats={user.stats}
    /> */}
    <Statistics title={"UPLOAD STATS"} stats={data}/>

    </div>
  );
};
