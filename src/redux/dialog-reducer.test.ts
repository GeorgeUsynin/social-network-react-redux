import {dialogsReducer, addNewDialogMessageAC, changeNewTextDialogMessageAC, DialogPageType} from "./dialog-reducer";

test('new dialog message should be added', () => {
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
        newDialogMessage: "hello-hello"
    }

    const newState = dialogsReducer(initialState, addNewDialogMessageAC())

    expect(newState.messages.length).toBe(4)
    expect(newState.messages[3].message).toBe('hello-hello')
    expect(newState.dialogs).toBe(initialState.dialogs)
    expect(newState.messages[3].id).toBeDefined()
    expect(newState.newDialogMessage).toBe('')
})

test('text of new dialog message should changed', ()=> {

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

    const newState = dialogsReducer(initialState, changeNewTextDialogMessageAC('new text'))

    expect(newState.newDialogMessage).toBe('new text')
    expect(initialState.dialogs).toBe(newState.dialogs)
    expect(initialState.messages).toBe(newState.messages)

})