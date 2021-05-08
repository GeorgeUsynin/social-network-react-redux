import React from "react";
import {connect} from "react-redux";
import {AppStateType} from "../../redux/redux-store";
import {followAC, setCurrentPageAC, setUsersAC, unFollowAC, UsersPageType, UserType} from "../../redux/users-reducer";
import {Dispatch} from "redux";
import axios from "axios";
import {Users} from "./Users";

export type UsersPropsType = MapStateType & MapDispatchType

type MapStateType = {
    usersPage: UsersPageType
}

type MapDispatchType = {
    followUser: (userID: number) => void
    unFollowUser: (userID: number) => void
    setUsers: (users: Array<UserType>) => void
    setCurrentPage: (page: number) => void
    // setTotalUsersCount: (totalCount: number) => void
}

//UsersContainer получает props чререз connect, отправляет запросы на сервер, отрисовывает
//презентационную (тупую) компоненту Users
class UsersContainer extends React.Component<UsersPropsType> {
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
        this.props.setCurrentPage(page)
        this.axiosInstance
            .get(`/users?page=${page}&count=${this.props.usersPage.pageSize}`)
            .then(response => {
                this.props.setUsers(response.data.items)
            })
    }

    render() {
        return (
            <Users
                users={this.props.usersPage.users}
                currentPage={this.props.usersPage.currentPage}
                pageSize={this.props.usersPage.pageSize}
                totalUsersAmount={this.props.usersPage.totalUsersAmount}
                followUser={this.props.followUser}
                unFollowUser={this.props.unFollowUser}
                onPageChanged={this.onPageChanged}
            />
        )
    }
}

const mapState = (state: AppStateType): MapStateType =>  {
    return {
        usersPage: state.usersPage
    }
}

const mapDispatch = (dispatch: Dispatch) : MapDispatchType =>  {
    return {
        followUser: (userID: number) => {
            dispatch(followAC(userID))
        },
        unFollowUser: (userID: number) => {
            dispatch(unFollowAC(userID))
        },
        setUsers: (users: Array<UserType>) => {
            dispatch(setUsersAC(users))
        },
        setCurrentPage: (page : number) => {
            dispatch(setCurrentPageAC(page))
        }
        // setTotalUsersCount: (totalCount: number) => {
        //     dispatch(setUserTotalCountAC(totalCount))
        // }
    }
}

export default connect(mapState, mapDispatch)(UsersContainer)

