import React from "react";
import Profile from './components/Profile.jsx';
import user from "./components/userData.json";

function App() {
  return (
    <>
      <Profile
        name={user.username}
        tag={user.tag}
        location={user.location}
        image={user.avatar}
        stats={user.stats}
      />

    </>
    )
}
export default App
 