import userData from "./userData.json"

function Profile() {
    return (
        <div>
            <div>
                <img
                src="<https://cdn-icons-png.flaticon.com/512/1077/1077012.png>"
                alt="User avatar"
                />
                <p>{userData.username}</p>
                <p>@{userData.tag}</p>
                <p>{userData.location}</p>
            </div>

            <ul>
                <li>
                    <span>Followers</span>
                    <span>{userData.stats.followers}</span>
                </li>
                <li>
                    <span>Views</span>
                    <span>{userData.stats.views}</span>
                </li>
                <li>
                    <span>Likes</span>
                    <span>{userData.stats.likes}</span>
                </li>
            </ul>
        </div>
    );
}
 export default Profile