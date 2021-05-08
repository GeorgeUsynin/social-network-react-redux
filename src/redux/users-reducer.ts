const FOLLOW_USER = 'FOLLOW_USER'
const UNFOLLOW_USER = 'UNFOLLOW_USER'
const SET_USERS = 'SET_USERS'
const CHANGE_PAGE = 'CHANGE_PAGE'
// const SET_TOTAL_USERS_COUNT = 'SET_TOTAL_USERS_COUNT'


//types
type UserLocationType = {
    city: string
    country: string
}

type UserPhotoType = {
    small: string
    large: string
}

export type UserType = {
    id: number
    photos: UserPhotoType
    followed: boolean
    name: string
    status: string
    location?: UserLocationType
}

export type UsersPageType = {
    users: Array<UserType>
    pageSize: number
    totalUsersAmount: number
    currentPage: number
}

export type UsersReducerACsType =
    ReturnType<typeof followAC>
    | ReturnType<typeof unFollowAC>
    | ReturnType<typeof setUsersAC>
    | ReturnType<typeof changePageAC>
    // | ReturnType<typeof setUserTotalCountAC>

//actionCreators
export const followAC = (userID: number) => {
    return {
        type: FOLLOW_USER,
        userID
    } as const
}

export const unFollowAC = (userID: number) => {
    return {
        type: UNFOLLOW_USER,
        userID
    } as const
}

export const setUsersAC = (users: Array<UserType>) => {
    return {
        type: SET_USERS,
        users
    } as const
}

export const changePageAC = (page: number) => {
    return {
        type: CHANGE_PAGE,
        page
    } as const
}

// export const setUserTotalCountAC = (totalCount: number) => {
//     return {
//         type: SET_TOTAL_USERS_COUNT,
//         totalCount
//     } as const
// }



//initialState
const initialState: UsersPageType = {
    users: [],
    pageSize: 20,
    totalUsersAmount: 67,
    currentPage: 1
}

//reducer
export const usersReducer = (state: UsersPageType = initialState, action: UsersReducerACsType): UsersPageType => {
    switch (action.type) {
        case FOLLOW_USER:
            return {...state, users: state.users.map(u => u.id === action.userID ? {...u, followed: true} : u)}
        case UNFOLLOW_USER:
            return {...state, users: state.users.map(u => u.id === action.userID ? {...u, followed: false} : u)}
        case SET_USERS:
            return {...state, users: action.users}
        case CHANGE_PAGE:
            return {...state, currentPage: action.page}
        // case SET_TOTAL_USERS_COUNT:
        //     return {...state, totalUsersAmount: action.totalCount}
        default:
            return state
    }
}

export default usersReducer;