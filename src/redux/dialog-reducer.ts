const ADD_NEW_DIALOG_MESSAGE = 'ADD-NEW-DIALOG-MESSAGE'

//types
type DialogType = {
    id: number
    name: string
    avatar: string
}

type MessageType = {
    id: number
    message: string
}

export type DialogPageType = {
    dialogs: Array<DialogType>
    messages: Array<MessageType>
}

export type DialogPageACsType =
    ReturnType<typeof addNewDialogMessageAC>

//actionCreators
export const addNewDialogMessageAC = (message: string) => {
    return {
        type: ADD_NEW_DIALOG_MESSAGE,
        message
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
}

//reducer
export const dialogsReducer = (state: DialogPageType = initialState, action: DialogPageACsType): DialogPageType => {
    switch (action.type) {
        case ADD_NEW_DIALOG_MESSAGE:
            const newMessage: MessageType = {
                id: Math.random() * 100,
                message: action.message
            }
            return {
                ...state,
                messages: [...state.messages, newMessage],
            }
        default:
            return state
    }
}