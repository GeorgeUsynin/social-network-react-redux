import React from "react";
import cls from "./FriendInfo.module.css"

type FriendInfoType = {
    name: string
    avatar: string
}

const FriendInfo: React.FC<FriendInfoType> = (props) => {

    return (
        <div className={cls.friend_info}>
            <div>
                <div className={cls.friends_avatar}>
                    <img src={props.avatar} alt="#"/>
                </div>
                <div>{props.name}</div>
            </div>
        </div>
    )
}

export default FriendInfo;