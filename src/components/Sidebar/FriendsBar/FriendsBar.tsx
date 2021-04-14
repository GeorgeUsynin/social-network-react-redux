import React from "react";
import cls from "./FriendsBar.module.css"
import FriendInfo from "./FriendInfo/FriendInfo";
import {FriendType} from "../../../redux/store";

type FriendsBarType = {
    friends: Array<FriendType>
}


const FriendsBar: React.FC<FriendsBarType> = (props) => {
    const mappedFriends = props.friends.map(fr => <FriendInfo key={fr.id} name={fr.name} avatar={fr.avatar}/>)

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