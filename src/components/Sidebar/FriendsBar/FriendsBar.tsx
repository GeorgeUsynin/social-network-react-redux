import React from "react";
import cls from "./FriendsBar.module.css"
import FriendInfo from "./FriendInfo/FriendInfo";
import {FriendsBarType} from "./FriendsBarContainer";


const FriendsBar: React.FC<FriendsBarType> = (props) => {
    const mappedFriends = props.sidebar.friends.map(fr => <FriendInfo key={fr.id} name={fr.name} avatar={fr.avatar}/>)

    return (
        <div className={cls.friends_bar}>
            <h2>FRIENDS</h2>
            <div className={cls.friends_info_wrapper}>
                {
                    mappedFriends
                }
            </div>

        </div>
    )
}

export default FriendsBar;