import {UserPhotoType} from "./users-reducer";
import {AppThunkType} from "./redux-store";
import {profileAPI, usersAPI} from "../api/api";

const ADD_NEW_PROFILE_POST = 'ADD-NEW-PROFILE-POST'
const SET_USER_PROFILE = 'SET_USER_PROFILE'
const SET_USER_STATUS = 'SET_USER_STATUS'

//types

type UserProfileContactsType = {
    facebook: string
    website: string
    vk: string
    twitter: string
    instagram: string
    youtube: string
    github: string
    mainLink: string
}

export type UserProfileType = {
    aboutMe: string
    contacts: UserProfileContactsType
    lookingForAJob: boolean
    lookingForAJobDescription: string
    fullName: string
    userId: number
    photos: UserPhotoType
} | null

export type PostType = {
    id: number
    message: string
    likeCounts: number
}

export type ProfilePageType = {
    posts: Array<PostType>
    userProfile: UserProfileType
    status: string
}

export type ProfileReducerACsType =
    ReturnType<typeof addNewProfilePostAC>
    | ReturnType<typeof setUserProfile>
    | ReturnType<typeof setUserStatus>

//actionCreators
export const addNewProfilePostAC = (message: string) => {
    return {
        type: ADD_NEW_PROFILE_POST,
        message
    } as const
}


export const setUserProfile = (userProfile: UserProfileType) => {
    return {
        type: SET_USER_PROFILE,
        userProfile
    } as const
}

export const setUserStatus = (status: string) => {
    return {
        type: SET_USER_STATUS,
        status
    } as const
}

//initialState
const initialState: ProfilePageType = {
    posts: [
        {
            id: 1,
            message: "Hi, my name is George and this is my first social network project",
            likeCounts: 10000
        },
        {id: 2, message: "Hi there, I learned how to push props", likeCounts: 45},
        {id: 3, message: "Hi there, I learned map", likeCounts: 666},
        {id: 4, message: "Hi there, I learned filter", likeCounts: 67}
    ],
    userProfile: null,
    status: ''
}

//reducer
export const profileReducer = (state: ProfilePageType = initialState, action: ProfileReducerACsType): ProfilePageType => {

    switch (action.type) {
        case ADD_NEW_PROFILE_POST:
            const newPost: PostType = {
                id: Math.random() * 100,
                message: action.message,
                likeCounts: 0
            }
            return {
                ...state,
                posts: [...state.posts, newPost]
            }
        case SET_USER_PROFILE:
            return {
                ...state,
                userProfile: action.userProfile
            }
        case SET_USER_STATUS:
            return {
                ...state,
                status: action.status
            }
        default:
            return state
    }
}

export const setUserProfileSuccess = (userId: string): AppThunkType => (dispatch) => {
    usersAPI.getProfile(userId)
        .then(data => {
            dispatch(setUserProfile(data))
        })
}
export const getUserStatus = (userId: string): AppThunkType => (dispatch) => {
    profileAPI.getStatus(userId)
        .then(data => {
            dispatch(setUserStatus(data))
        })
}

export const updateUserStatus = (status: string): AppThunkType => (dispatch) => {
    profileAPI.updateStatus(status)
        .then(data => {
            if (data.resultCode === 0) {
                dispatch(setUserStatus(status))
            }
        })
}