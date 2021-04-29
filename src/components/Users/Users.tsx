import React from "react";
import {UsersPropsType} from "./UsersContainer";
import cls from './Users.module.css'

const UsersMemo: React.FC<UsersPropsType> = (props) => {

    if (props.usersPage.users.length === 0){
        props.setUsers([
            {
                id: 1,
                avatar: 'https://cdn4.iconfinder.com/data/icons/avatars-xmas-giveaway/128/batman_hero_avatar_comics-512.png',
                followed: false,
                fullName: "George",
                status: "I'm a boss",
                location: {
                    city: 'Minsk',
                    country: 'Belarus'
                }
            },
            {
                id: 2,
                avatar: 'https://cdn4.iconfinder.com/data/icons/avatars-xmas-giveaway/128/batman_hero_avatar_comics-512.png',
                followed: true,
                fullName: "Alexander",
                status: "I'm happy",
                location: {
                    city: 'Paris',
                    country: 'France'
                }
            },
            {
                id: 3,
                avatar: 'https://cdn4.iconfinder.com/data/icons/avatars-xmas-giveaway/128/batman_hero_avatar_comics-512.png',
                followed: false,
                fullName: "Natasha",
                status: "I'm a boss too",
                location: {
                    city: 'Berlin',
                    country: 'Germany'
                }
            }
        ])
    }

    const mappedUsers = props.usersPage.users.map(u => {
        return (
            <div key={u.id} className={cls.wrapper_user}>
                <div className={cls.avatar_button}>
                    <div className={cls.avatar}><img src={u.avatar}/></div>
                    <div className={cls.button_wrapper}>
                        <button
                            onClick={u.followed ? () => props.unFollowUser(u.id) : () => props.followUser(u.id)}>{u.followed ? 'Follow' : 'Unfollow'}</button>
                    </div>
                </div>
                <div className={cls.description}>
                    <div>{u.fullName}</div>
                    <div>{u.location.city}, {u.location.country}</div>
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