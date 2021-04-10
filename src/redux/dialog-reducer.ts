import {ActionsTypes, DialogPageType, MessageType, PostType} from "./state";

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

//reducer
const dialogsReducer = (state: DialogPageType, action: ActionsTypes): DialogPageType => {

    switch (action.type) {
        case ADD_NEW_DIALOG_MESSAGE:
            const newMessage: MessageType = {
                id: Math.random() * 100,
                message: action.message
            }
            state.messages.push(newMessage)
            return state
        case CHANGE_NEW_TEXT_DIALOG_MESSAGE:
            state.newDialogMessage = action.newText
            return state
        default:
            return state
    }
}

export default dialogsReducer;