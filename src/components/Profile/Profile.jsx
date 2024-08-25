import React from "react";
import styles from "./Profile.module.css";


function Profile ({ name, tag, location, image, stats }) {
    return (
        <div className={styles.profile}>
            <div className={styles.contents}>
                <img className={styles.avatar} src={image} alt="User avatar"
                />
                <p className={styles.username}>{name}</p>
                <p className={styles.tag}>@{tag}</p>
                <p className={styles.localization}>{location}</p>
            </div>

            <ul className={styles.list}>
                <li className={styles.li}>
                    <span>Followers</span>
                    <span className={styles.stats}>{stats.followers}</span>
                </li>
                <li className={styles.li}>
                    <span>Views</span>
                    <span className={styles.stats}>{stats.views}</span>
                </li>
                <li className={styles.li}>
                    <span>Likes</span>
                    <span className={styles.stats}>{stats.likes}</span>
                </li>
            </ul>
        </div>
    );
}
 export default Profile