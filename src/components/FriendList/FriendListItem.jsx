import React from "react";
// import styles from "./FriendListItem.module.css";

function FriendListItem({ avatar, name, isOnline }) {

    return (
        <li>
            <img src={avatar} alt={`${name}'s avatar`} width="48" />
            <p>{name}</p>
            <p>{isOnline ? "Online" : "Offline"}</p>
        </li>
    );

};
export default FriendListItem;