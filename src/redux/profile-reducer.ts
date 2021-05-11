import {UserPhotoType} from "./users-reducer";

const ADD_NEW_PROFILE_POST = 'ADD-NEW-PROFILE-POST'
const CHANGE_NEW_TEXT_PROFILE_POST = 'CHANGE-NEW-TEXT-PROFILE-POST'
const SET_USER_PROFILE = 'SET_USER_PROFILE'

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
    newPostMessage: string
    posts: Array<PostType>
    userProfile: UserProfileType

}

export type ProfileReducerACsType =
    ReturnType<typeof addNewProfilePostAC>
    | ReturnType<typeof changeNewTextProfilePostAC>
    | ReturnType<typeof setUserProfile>

//actionCreators
export const addNewProfilePostAC = () => {
    return {
        type: ADD_NEW_PROFILE_POST
    } as const
}
export const changeNewTextProfilePostAC = (newText: string) => {
    return {
        type: CHANGE_NEW_TEXT_PROFILE_POST,
        newText
    } as const
}

export const setUserProfile = (userProfile: UserProfileType) => {
    return {
        type: SET_USER_PROFILE,
        userProfile
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
    newPostMessage: "",
    userProfile: null
}

//reducer
export const profileReducer = (state: ProfilePageType = initialState, action: ProfileReducerACsType): ProfilePageType => {

    switch (action.type) {
        case ADD_NEW_PROFILE_POST:
            const newPost: PostType = {
                id: Math.random() * 100,
                message: state.newPostMessage,
                likeCounts: 0
            }
            return {
                ...state,
                posts: [...state.posts, newPost],
                newPostMessage: ''
            }
        case CHANGE_NEW_TEXT_PROFILE_POST:
            state.newPostMessage = action.newText
            return {...state}
        case SET_USER_PROFILE:
            return {
                ...state,
                userProfile: action.userProfile
            }
        default:
            return state
    }
}

export default profileReducer;