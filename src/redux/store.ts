import profileReducer, {addNewProfilePostAC, changeNewTextProfilePostAC} from "./profile-reducer";
import dialogsReducer, {addNewDialogMessageAC, changeNewTextDialogMessageAC} from "./dialog-reducer";
import sidebarReducer from "./sidebar-reducer";


export type MessageType = {
    id: number
    message: string
}

export type DialogType = {
    id: number
    name: string
    avatar: string
}

export type FriendType = {
    id: number
    name: string
    avatar: string
}

export type PostType = {
    id: number
    message: string
    likeCounts: number
}

export type ProfilePageType = {
    newPostMessage: string
    posts: Array<PostType>
}

export type DialogPageType = {
    dialogs: Array<DialogType>
    messages: Array<MessageType>
    newDialogMessage: string
}

export type SidebarType = {
    friends: Array<FriendType>
}

export type RootStateType = {
    profilePage: ProfilePageType
    dialogPage: DialogPageType
    sidebar: SidebarType
}

export type StoreType = {
    _state: RootStateType
    _onChange: () => void
    getState: () => RootStateType
    subscribe: (callback: () => void) => void
    dispatch: (action: ActionsTypes) => void
}

export type ActionsTypes =
    ReturnType<typeof addNewProfilePostAC>
    | ReturnType<typeof changeNewTextProfilePostAC>
    | ReturnType<typeof addNewDialogMessageAC>
    | ReturnType<typeof changeNewTextDialogMessageAC>




export const store: StoreType = {
    _state: {
        profilePage: {
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
        },
        dialogPage: {
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
        },
        sidebar: {
            friends: [
                {
                    id: 1,
                    name: "Elena",
                    avatar: "https://cdn4.iconfinder.com/data/icons/avatars-xmas-giveaway/128/batman_hero_avatar_comics-512.png"
                },
                {
                    id: 2,
                    name: "Dima",
                    avatar: "https://cdn4.iconfinder.com/data/icons/avatars-xmas-giveaway/128/batman_hero_avatar_comics-512.png"
                },
                {
                    id: 3,
                    name: "Olga",
                    avatar: "https://cdn4.iconfinder.com/data/icons/avatars-xmas-giveaway/128/batman_hero_avatar_comics-512.png"
                },
            ]
        }
    },
    _onChange() {
        console.log('hello')
    },
    getState() {
        return this._state
    },
    subscribe(callback) {
        this._onChange = callback
    },
    dispatch(action) {
        this._state.profilePage = profileReducer(this._state.profilePage, action)
        this._state.dialogPage = dialogsReducer(this._state.dialogPage, action)
        this._state.sidebar = sidebarReducer(this._state.sidebar, action)
        this._onChange()
    }
}

