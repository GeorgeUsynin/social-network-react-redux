
type FriendType = {
    id: number
    name: string
    avatar: string
}

export type SidebarType = {
    friends: Array<FriendType>
}


const initialState: SidebarType = {
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

export const sidebarReducer = (state: SidebarType = initialState, action: any): SidebarType => {
    return state
}