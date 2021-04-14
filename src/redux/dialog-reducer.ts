import {ActionsTypes, DialogPageType, MessageType} from "./store";

const ADD_NEW_DIALOG_MESSAGE = 'ADD-NEW-DIALOG-MESSAGE'
const CHANGE_NEW_TEXT_DIALOG_MESSAGE = 'CHANGE-NEW-TEXT-DIALOG-MESSAGE'

//actionCreators
export const addNewDialogMessageAC = (newDialogMessage: string) => {
    return {
        type: ADD_NEW_DIALOG_MESSAGE,
        message: newDialogMessage
    } as const
}
export const changeNewTextDialogMessageAC = (newText: string) => {
    return {
        type: CHANGE_NEW_TEXT_DIALOG_MESSAGE,
        newText: newText
    } as const
}

const initialState: DialogPageType = {
    dialogs: [
        {
            id: 1,
            name: "George",
            avatar: "https://cdn4.iconfinder.com/data/icons/avatars-xmas-giveaway/128/batman_hero_avatar_comics-512.png"
        },
        {
            id: 2,
            name: "Paul",
            avatar: "https://cdn4.iconfinder.com/data/icons/avatars-xmas-giveaway/128/batman_hero_avatar_comics-512.png"
        },
        {
            id: 3,
            name: "Natasha",
            avatar: "https://cdn4.iconfinder.com/data/icons/avatars-xmas-giveaway/128/batman_hero_avatar_comics-512.png"
        }
    ],
    messages: [
        {id: 1, message: "Hi"},
        {id: 2, message: "How is your wellness?"},
        {id: 3, message: "Where do you go?"},
    ],
    newDialogMessage: ""
}

//reducer
const dialogsReducer = (state = initialState, action: ActionsTypes): DialogPageType => {

    switch (action.type) {
        case ADD_NEW_DIALOG_MESSAGE:
            const newMessage: MessageType = {
                id: Math.random() * 100,
                message: action.message
            }
            state.messages.push(newMessage)
            state.newDialogMessage = ''
            return state
        case CHANGE_NEW_TEXT_DIALOG_MESSAGE:
            state.newDialogMessage = action.newText
            return state
        default:
            return state
    }
}

export default dialogsReducer;