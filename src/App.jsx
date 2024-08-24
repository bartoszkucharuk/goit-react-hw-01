
import Profile from './components/Profile.jsx';
import userData from "./components/userData.json";

function App() {
  return (
    <>
      
      <Profile
        name={userData.username}
        tag={userData.tag}
        location={userData.location}
        image={userData.avatar}
        stats={userData.stats}
      />

    </>
    )
}
export default App
 