import {profileReducer,addNewProfilePostAC, changeNewTextProfilePostAC, ProfilePageType} from "./profile-reducer";

test('new post should be added', () => {
    const initialState: ProfilePageType = {
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
        newPostMessage: "hello",
        userProfile: null,
        status: ''
    }

    const newState = profileReducer(initialState, addNewProfilePostAC())

    expect(newState.posts.length).toBe(5)
    expect(newState.posts[4].message).toBe('hello')
    expect(newState.posts[4].likeCounts).toBe(0)
    expect(newState.newPostMessage).toBe('')
})

test('text in profile post should changed', () => {

    const initialState: ProfilePageType = {
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
        newPostMessage: "",
        userProfile: null,
        status:''
    }

    const newState = profileReducer(initialState, changeNewTextProfilePostAC('kiskis'))

    expect(newState.newPostMessage).toBe('kiskis')
    expect(newState.posts).toBe(initialState.posts)

})