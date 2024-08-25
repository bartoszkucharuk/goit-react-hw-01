import React from "react";
import Profile from './components/Profile/Profile.jsx';
import user from "./components/Profile/userData.json";
import FriendList from './components/FriendList/FriendList.jsx'
import friends from "./components/FriendList/friends.json";

function App() {
  return (
    <div>
      <Profile
        name={user.username}
        tag={user.tag}
        location={user.location}
        image={user.avatar}
        stats={user.stats}
      />

      <FriendList friends={friends} />

    </div>
    )
}
export default App
 