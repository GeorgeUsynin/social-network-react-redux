import React from "react";
import {UserPhotoType} from "../../redux/users-reducer";
import cls from "./Users.module.css";
import {NavLink} from "react-router-dom";
import {usersAPI} from "../../api/api";

export type UserPropsType = {
    id: number
    photos: UserPhotoType
    name: string
    status: string
    followed: boolean
    followingInProgress: Array<number>
    followSuccess: (userid: number) => void
    unFollowSuccess: (userid: number) => void
}

export const User: React.FC<UserPropsType> = React.memo((props) => {

    console.log('User')

    const {
        id,
        photos,
        name,
        status,
        followed,
        followingInProgress,
        followSuccess,
        unFollowSuccess
    } = props

    return (
        <div className={cls.wrapper_user}>
            <div className={cls.avatar_button}>
                <div className={cls.avatar}>
                    <NavLink to={'/profile/' + id}>
                        <img
                            src={photos.small !== null ? photos.small : 'https://cdn4.iconfinder.com/data/icons/avatars-xmas-giveaway/128/batman_hero_avatar_comics-512.png'}
                        />
                    </NavLink>
                </div>
                <div className={cls.button_wrapper}>
                    {
                        followed
                            ?
                            <button disabled={followingInProgress.some(uId => uId === id)} onClick={() => {
                                //our thunk
                                unFollowSuccess(id)
                            }}> Unfollow </button>
                            :
                            <button disabled={followingInProgress.some(uId => uId === id)} onClick={() => {
                                //our thunk
                                followSuccess(id)
                            }}> Follow </button>
                    }
                    {/*<button*/}
                    {/*    onClick={followed ? () => unFollowUser(id) : () => followUser(id)}>{followed ? 'Unfollow' : 'Follow'}</button>*/}
                </div>
            </div>
            <div className={cls.description}>
                <div>{name}</div>
                {/*<div>{u.location.city}, {u.location.country}</div>*/}
                <div>{!status ? 'Status not fined' : status}</div>
            </div>
        </div>
    )
})