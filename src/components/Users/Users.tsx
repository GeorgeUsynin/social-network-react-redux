import React from "react";
import {UsersPropsType} from "./UsersContainer";
import cls from './Users.module.css'
import axios from 'axios'

const UsersMemo: React.FC<UsersPropsType> = (props) => {

    if (props.usersPage.users.length === 0){

        axios.get('https://social-network.samuraijs.com/api/1.0/users').then(response =>{
            props.setUsers(response.data.items)
        })
    }

    const mappedUsers = props.usersPage.users.map(u => {
        return (
            <div key={u.id} className={cls.wrapper_user}>
                <div className={cls.avatar_button}>
                    <div className={cls.avatar}><img src={u.photos.small !== null ? u.photos.small : 'https://cdn4.iconfinder.com/data/icons/avatars-xmas-giveaway/128/batman_hero_avatar_comics-512.png'}/></div>
                    <div className={cls.button_wrapper}>
                        <button
                            onClick={u.followed ? () => props.unFollowUser(u.id) : () => props.followUser(u.id)}>{u.followed ? 'Follow' : 'Unfollow'}</button>
                    </div>
                </div>
                <div className={cls.description}>
                    <div>{u.name}</div>
                    {/*<div>{u.location.city}, {u.location.country}</div>*/}
                    <div>{u.status}</div>
                </div>
            </div>
        )
    })

    return (
        <div>
            {mappedUsers}
        </div>
    )
}

const Users = React.memo(UsersMemo)

export default Users