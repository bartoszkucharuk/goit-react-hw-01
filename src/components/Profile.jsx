import styles from "./Profile.module.css";

import userData from "./userData.json";

function Profile() {
    return (
        <div className={styles.profile}>
            <div className={styles.contents}>
                <img className={styles.avatar}
                    src={"https://cdn-icons-png.flaticon.com/512/2922/2922506.png"} alt="User avatar"
                />
                <p className={styles.username}>{userData.username}</p>
                <p className={styles.tag}>@{userData.tag}</p>
                <p className={styles.localization}>{userData.location}</p>
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