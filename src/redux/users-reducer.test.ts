import usersReducer, {followAC, setUsersAC, unFollowAC, UsersPageType, UserType} from "./users-reducer";

let initialState: UsersPageType

beforeEach(()=>{
    initialState = {
        users: [
            {
                id: 1,
                avatar: 'https://cdn4.iconfinder.com/data/icons/avatars-xmas-giveaway/128/batman_hero_avatar_comics-512.png',
                followed: false,
                fullName: "George",
                status: "I'm a boss",
                location: {
                    city: 'Minsk',
                    country: 'Belarus'
                }
            },
            {
                id: 2,
                avatar: 'https://cdn4.iconfinder.com/data/icons/avatars-xmas-giveaway/128/batman_hero_avatar_comics-512.png',
                followed: true,
                fullName: "Alexander",
                status: "I'm happy",
                location: {
                    city: 'Paris',
                    country: 'France'
                }
            },
            {
                id: 3,
                avatar: 'https://cdn4.iconfinder.com/data/icons/avatars-xmas-giveaway/128/batman_hero_avatar_comics-512.png',
                followed: false,
                fullName: "Natasha",
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
                avatar: 'https://cdn4.iconfinder.com/data/icons/avatars-xmas-giveaway/128/batman_hero_avatar_comics-512.png',
                followed: false,
                fullName: "Alex",
                status: "I'm a boss",
                location: {
                    city: 'Minsk',
                    country: 'Belarus'
                }
            },
            {
                id: 5,
                avatar: 'https://cdn4.iconfinder.com/data/icons/avatars-xmas-giveaway/128/batman_hero_avatar_comics-512.png',
                followed: false,
                fullName: "Bob",
                status: "I'm happy",
                location: {
                    city: 'Paris',
                    country: 'France'
                }
            }
        ]

    const newState: UsersPageType = usersReducer(initialState, setUsersAC(newUsers))

    expect(newState.users[3].fullName).toBe('Alex')
    expect(newState.users[4].fullName).toBe('Bob')
    expect(newState.users.length).toBe(5)
    expect(newState.users[0].id).toBe(1)

})
