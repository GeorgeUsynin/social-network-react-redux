import {AppStateType} from "./redux-store";

export const getUsers = (state: AppStateType) => {
    return state.usersPage.users
}

export const getPageSize = (state: AppStateType) => {
    return state.usersPage.pageSize
}

export const getTotalUsersAmount = (state: AppStateType) => {
    return state.usersPage.totalUsersAmount
}

export const getIsFetching = (state: AppStateType) => {
    return state.usersPage.isFetching
}

export const getCurrentPage = (state: AppStateType) => {
    return state.usersPage.currentPage
}

export const getFollowingInProgress = (state: AppStateType) => {
    return state.usersPage.followingInProgress
}



