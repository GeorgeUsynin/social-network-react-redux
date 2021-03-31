let onChange = () => {
    console.log('hello')
}

export const subscribe = (observer: () => void) => {
    onChange = observer
}


type MessageType = {
    id: number
    message: string
}

type DialogType = {
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

let state: RootStateType = {
    profilePage: {
        posts: [
            {id: 1, message: "Hi, my name is George and this is my first social network project", likeCounts: 10000},
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
        newDialogMessage: "sss"
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
}

export const addNewProfilePost = (message: string) => {
    const newPost: PostType = {
        id: Math.random() * 100,
        message,
        likeCounts: 0
    }
    state.profilePage.posts.push(newPost)
    onChange()
}

export const changeNewTextProfilePost = (newText: string) => {
    state.profilePage.newPostMessage = newText
    onChange()
}

export const addNewDialogMessage = (message: string) => {
    const newMessage: MessageType = {
        id: Math.random() * 100,
        message
    }
    state.dialogPage.messages.push(newMessage)
    onChange()
}

export const changeNewTextDialogMessage = (newText: string) => {
    state.dialogPage.newDialogMessage = newText
    onChange()
}

export default state;