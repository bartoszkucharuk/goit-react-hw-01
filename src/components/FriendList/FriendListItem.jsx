import React from "react";
import styles from "./FriendListItem.module.css";

function FriendListItem({ avatar, name, isOnline }) {

    return (
        <li className={styles.item}>
            <img className={styles.avatar} src={avatar} alt={`${name}'s avatar`} width="48" />
            <p className={styles.name}>{name}</p>
            <p className={styles.status} style={{color: isOnline ? "green" : "red" }}>
                {isOnline ? "Online" : "Offline"}</p>
        </li>
    );

};
export default FriendListItem;