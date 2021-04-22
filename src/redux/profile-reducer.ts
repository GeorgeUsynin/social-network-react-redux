const ADD_NEW_PROFILE_POST = 'ADD-NEW-PROFILE-POST'
const CHANGE_NEW_TEXT_PROFILE_POST = 'CHANGE-NEW-TEXT-PROFILE-POST'


//types
type PostType = {
    id: number
    message: string
    likeCounts: number
}

export type ProfilePageType = {
    newPostMessage: string
    posts: Array<PostType>
}

export type ProfileReducerACsType = ReturnType<typeof addNewProfilePostAC> | ReturnType<typeof changeNewTextProfilePostAC>

//actionCreators
export const addNewProfilePostAC = () => {
    return {
        type: ADD_NEW_PROFILE_POST
    } as const
}
export const changeNewTextProfilePostAC = (newText: string) => {
    return {
        type: CHANGE_NEW_TEXT_PROFILE_POST,
        newText: newText
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
    newPostMessage: ""
}

//reducer
const profileReducer = (state: ProfilePageType = initialState, action: ProfileReducerACsType): ProfilePageType => {

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
        default:
            return state
    }
}

export default profileReducer;