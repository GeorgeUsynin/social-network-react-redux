import usersReducer, {followAC, setUsersAC, unFollowAC, UsersPageType} from "./users-reducer";

let initialState: UsersPageType

beforeEach(()=>{
    initialState = {
        users: [
            {
                id: 1,
                photos: {
                    small: 'https://cdn4.iconfinder.com/data/icons/avatars-xmas-giveaway/128/batman_hero_avatar_comics-512.png',
                    large: ''
                },
                followed: false,
                name: "George",
                status: "I'm a boss",
                location: {
                    city: 'Minsk',
                    country: 'Belarus'
                }
            },
            {
                id: 2,
                photos: {
                    small: 'https://cdn4.iconfinder.com/data/icons/avatars-xmas-giveaway/128/batman_hero_avatar_comics-512.png',
                    large: ''
                },
                followed: true,
                name: "Alexander",
                status: "I'm happy",
                location: {
                    city: 'Paris',
                    country: 'France'
                }
            },
            {
                id: 3,
                photos: {
                    small: 'https://cdn4.iconfinder.com/data/icons/avatars-xmas-giveaway/128/batman_hero_avatar_comics-512.png',
                    large: ''
                },
                followed: false,
                name: "Natasha",
                status: "I'm a boss too",
                location: {
                    city: 'Berlin',
                    country: 'Germany'
                }
            }
        ]
    }
})

test('followed status should changed', ()=>{

    const newStateFollow: UsersPageType = usersReducer(initialState, followAC(1))
    const newStateUnfollow: UsersPageType = usersReducer(initialState, unFollowAC(2))

    expect(newStateFollow.users[0].followed).toBeTruthy()
    expect(newStateUnfollow.users[1].followed).toBeFalsy()

})

test('users should be set', ()=>{

    const newUsers =  [
            {
                id: 4,
                photos: {
                    small: 'https://cdn4.iconfinder.com/data/icons/avatars-xmas-giveaway/128/batman_hero_avatar_comics-512.png',
                    large: ''
                },
                followed: false,
                name: "Alex",
                status: "I'm a boss",
                location: {
                    city: 'Minsk',
                    country: 'Belarus'
                }
            },
            {
                id: 5,
                photos: {
                    small: 'https://cdn4.iconfinder.com/data/icons/avatars-xmas-giveaway/128/batman_hero_avatar_comics-512.png',
                    large: ''
                },
                followed: false,
                name: "Bob",
                status: "I'm happy",
                location: {
                    city: 'Paris',
                    country: 'France'
                }
            }
        ]

    const newState: UsersPageType = usersReducer(initialState, setUsersAC(newUsers))

    expect(newState.users[3].name).toBe('Alex')
    expect(newState.users[4].name).toBe('Bob')
    expect(newState.users.length).toBe(5)
    expect(newState.users[0].id).toBe(1)

})
