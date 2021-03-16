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
    posts: Array<PostType>
}

export type DialogPageType = {
    dialogs: Array<DialogType>
    messages: Array<MessageType>
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
            {id: 2, message: "Hi there, I learned map", likeCounts: 666},
            {id: 2, message: "Hi there, I learned filter", likeCounts: 67}
        ]
    },
    dialogPage: {
        dialogs: [
            {id: 1, name: "George", avatar: "https://www.flaticon.com/svg/vstatic/svg/924/924874.svg?token=exp=1615904286~hmac=52f815f6fe3c6bf5a19ac10aa4c238de"},
            {id: 2, name: "Paul", avatar: "https://www.flaticon.com/svg/vstatic/svg/3048/3048116.svg?token=exp=1615907064~hmac=6ec93f4be25544272082851b36c07a3b"},
            {id: 3, name: "Natasha", avatar: "https://www.flaticon.com/svg/vstatic/svg/3667/3667325.svg?token=exp=1615904286~hmac=08c705730519ebaf49514240765d5926"}
        ],
        messages: [
            {id: 1, message: "Hi"},
            {id: 2, message: "How is your wellness?"},
            {id: 3, message: "Where do you go?"},
        ]
    },
    sidebar: {
        friends: [
            {id: 1, name: "Elena", avatar: "https://www.flaticon.com/svg/vstatic/svg/3667/3667325.svg?token=exp=1615904286~hmac=08c705730519ebaf49514240765d5926"},
            {id: 2, name: "Dima", avatar: "https://www.flaticon.com/svg/vstatic/svg/924/924874.svg?token=exp=1615904286~hmac=52f815f6fe3c6bf5a19ac10aa4c238de"},
            {id: 3, name: "Olga", avatar: "https://www.flaticon.com/svg/vstatic/svg/2922/2922566.svg?token=exp=1615904286~hmac=cd18dc46ae83112ad686725255a47671"},
        ]
    }
}

export default state;