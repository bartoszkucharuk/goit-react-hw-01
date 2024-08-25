import React from "react";
import FriendListItem from "./FriendListItem.jsx"
// import styles from "./FriendList.module.css";

function FriendList({ friends }) {
    return (
        <ul>
            {friends.map((friend) => (
                <FriendListItem
                    key={friend.id}
                    name={friend.name}
                    avatar={friend.avatar}
                    isOnline={friend.isOnline}
                />
            ))}
        </ul>
    );
};

export default FriendList;