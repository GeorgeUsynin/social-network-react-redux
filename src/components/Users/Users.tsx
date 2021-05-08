import React from "react";
import cls from "./Users.module.css";
import {v1} from "uuid";
import {UserType} from "../../redux/users-reducer";

type UsersPropsType = {
    users: Array<UserType>
    pageSize: number
    totalUsersAmount: number
    currentPage: number
    followUser: (userID: number) => void
    unFollowUser: (userID: number) => void
    onPageChanged: (page: number) => void
}


export const Users: React.FC<UsersPropsType> = (props) => {

    let pagesCount = Math.ceil((props.totalUsersAmount / props.pageSize))

    let pages = []

    for(let i=1; i<=pagesCount; i++){
        pages.push(i)
    }

    return (
        <div>
            <span className={cls.spanPagesName}>Pages: </span>
            {
                pages.map(p=>{
                    return (
                        <span
                            key={v1()}
                            className={p === props.currentPage ? `${cls.selectedPage} ${cls.spanPageNumber}`: cls.spanPageNumber}
                            onClick={()=>props.onPageChanged(p)}
                        >{p}</span>
                    )
                })
            }
            {
                props.users.map(u => {
                    return (
                        <div key={u.id} className={cls.wrapper_user}>
                            <div className={cls.avatar_button}>
                                <div className={cls.avatar}><img
                                    src={u.photos.small !== null ? u.photos.small : 'https://cdn4.iconfinder.com/data/icons/avatars-xmas-giveaway/128/batman_hero_avatar_comics-512.png'}/>
                                </div>
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
                    );
                })
            }
        </div>
    )
}