import React from "react";
import cls from "./Users.module.css";
import {v1} from "uuid";
import {UserType} from "../../redux/users-reducer";
import {User} from "./User";

type UsersPropsType = {
    users: Array<UserType>
    pageSize: number
    totalUsersAmount: number
    currentPage: number
    followUser: (userID: number) => void
    unFollowUser: (userID: number) => void
    onPageChanged: (page: number) => void
    followingInProgress: Array<number>
    toggleFollowingProgress: (isFetching: boolean, UserId: number) => void
}


export const Users: React.FC<UsersPropsType> = (props) => {

    let pagesCount = Math.ceil((props.totalUsersAmount / props.pageSize))

    let pages = []

    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }

    return (
        <div>
            <span className={cls.spanPagesName}>Pages: </span>
            {
                pages.map(p => {
                    return (
                        <span
                            key={v1()}
                            className={p === props.currentPage ? `${cls.selectedPage} ${cls.spanPageNumber}` : cls.spanPageNumber}
                            onClick={() => props.onPageChanged(p)}
                        >{p}</span>
                    )
                })
            }
            {
                props.users.map(u => {
                    return (
                        <User
                            key={u.id}
                            id={u.id}
                            photos={u.photos}
                            name={u.name}
                            status={u.status}
                            followed={u.followed}
                            followUser={props.followUser}
                            unFollowUser={props.unFollowUser}
                            followingInProgress={props.followingInProgress}
                            toggleFollowingProgress={props.toggleFollowingProgress}
                        />
                    );
                })
            }
        </div>
    )
}