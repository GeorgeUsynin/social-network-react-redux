import React from "react";
import cls from "./Users.module.css";
import axios from "axios";
import {UsersPropsType} from "./UsersContainer";
import {v1} from 'uuid';

class Users extends React.Component<UsersPropsType> {
    // axiosInstance - сконфигурированный axios, withCredentials: true - автоматически отправляет куки в запросах
    axiosInstance = axios.create({
        baseURL: 'https://social-network.samuraijs.com/api/1.0',
        // baseURL:'https://social-network.samuraijs.com/api/2.0.1',
        withCredentials: true
    })
    componentDidMount() {


        this.axiosInstance
            .get(`/users?page=${this.props.usersPage.currentPage}&count=${this.props.usersPage.pageSize}`)
            .then(response => {
                this.props.setUsers(response.data.items)
                // this.props.setTotalUsersCount(response.data.totalCount)
            })
    }

    onPageChanged = (page: number) =>{
        this.props.changePage(page)
        this.axiosInstance
            .get(`/users?page=${page}&count=${this.props.usersPage.pageSize}`)
            .then(response => {
                this.props.setUsers(response.data.items)
            })
    }

    render() {

        let pagesCount = Math.ceil((this.props.usersPage.totalUsersAmount / this.props.usersPage.pageSize))

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
                                className={p === this.props.usersPage.currentPage ? `${cls.selectedPage} ${cls.spanPageNumber}`: cls.spanPageNumber}
                                onClick={()=>this.onPageChanged(p)}
                            >{p}</span>
                        )
                    })
                }
                {
                    this.props.usersPage.users.map(u => {
                        return (
                                <div key={u.id} className={cls.wrapper_user}>
                                    <div className={cls.avatar_button}>
                                        <div className={cls.avatar}><img
                                            src={u.photos.small !== null ? u.photos.small : 'https://cdn4.iconfinder.com/data/icons/avatars-xmas-giveaway/128/batman_hero_avatar_comics-512.png'}/>
                                        </div>
                                        <div className={cls.button_wrapper}>
                                            <button
                                                onClick={u.followed ? () => this.props.unFollowUser(u.id) : () => this.props.followUser(u.id)}>{u.followed ? 'Follow' : 'Unfollow'}</button>
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
}

export default Users