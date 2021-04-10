import {ActionsTypes, PostType, ProfilePageType} from "./state";

const ADD_NEW_PROFILE_POST = 'ADD-NEW-PROFILE-POST'
const CHANGE_NEW_TEXT_PROFILE_POST = 'CHANGE-NEW-TEXT-PROFILE-POST'

//actionCreators
export const addNewProfilePostAC = (newPostMessage: string) => {
    return {
        type: ADD_NEW_PROFILE_POST,
        message: newPostMessage
    } as const
}
export const changeNewTextProfilePostAC = (newText: string) => {
    return {
        type: CHANGE_NEW_TEXT_PROFILE_POST,
        newText: newText
    } as const
}

//reducer
const profileReducer = (state: ProfilePageType, action: ActionsTypes): ProfilePageType => {

    switch (action.type) {
        case ADD_NEW_PROFILE_POST:
            const newPost: PostType = {
                id: Math.random() * 100,
                message: action.message,
                likeCounts: 0
            }
            state.posts.push(newPost)
            return state
        case CHANGE_NEW_TEXT_PROFILE_POST:
            state.newPostMessage = action.newText
            return state
        default:
            return state
    }
}

export default profileReducer;