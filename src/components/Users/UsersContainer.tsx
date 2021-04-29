import React from "react";
import {connect} from "react-redux";
import Users from "./Users";
import {AppStateType} from "../../redux/redux-store";
import {followAC, setUsersAC, unFollowAC, UsersPageType, UserType} from "../../redux/users-reducer";
import {Dispatch} from "redux";

export type UsersPropsType = MapStateType & MapDispatchType

type MapStateType = {
    usersPage: UsersPageType
}

type MapDispatchType = {
    followUser: (userID: number) => void
    unFollowUser: (userID: number) => void
    setUsers: (users: Array<UserType>) => void
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
        }
    }
}

const UsersContainer = connect(mapState, mapDispatch)(Users)

export default UsersContainer