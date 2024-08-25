import React from "react";
import Profile from './components/Profile/Profile.jsx';
import user from "./components/Profile/userData.json";
import FriendList from './components/FriendList/FriendList.jsx'
import friends from "./components/FriendList/friends.json";
import TransactionHistory from "./components/TransactionHistory/TransactionHistory.jsx";
import transactions from "./components/TransactionHistory/transactions.json";

function App() {
  return (
    <div>
      <Profile
        name={user.username}
        tag={user.tag}
        location={user.location}
        image={user.avatar}
        stats={user.stats}/>
      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />
    </div>
    )
}
export default App
 