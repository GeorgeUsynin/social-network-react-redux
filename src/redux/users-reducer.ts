const FOLLOW_USER = 'FOLLOW_USER'
const UNFOLLOW_USER = 'UNFOLLOW_USER'
const SET_USERS = 'SET_USERS'


//types
type UserLocationType = {
    city: string
    country: string
}

export type UserType = {
    id: number
    avatar: string
    followed: boolean
    fullName: string
    status: string
    location: UserLocationType
}

export type UsersPageType = {
    users: Array<UserType>
}

export type UsersReducerACsType =
    ReturnType<typeof followAC>
    | ReturnType<typeof unFollowAC>
    | ReturnType<typeof setUsersAC>

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

//initialState
const initialState: UsersPageType = {
    users: []
}

//reducer
export const usersReducer = (state: UsersPageType = initialState, action: UsersReducerACsType): UsersPageType => {
    switch (action.type) {
        case FOLLOW_USER:
            return {...state, users: state.users.map(u => u.id === action.userID ? {...u, followed: true} : u)}
        case UNFOLLOW_USER:
            return {...state, users: state.users.map(u => u.id === action.userID ? {...u, followed: false} : u)}
        case SET_USERS:
            return {...state, users: [...state.users, ...action.users]}
        default:
            return state
    }
}

export default usersReducer;