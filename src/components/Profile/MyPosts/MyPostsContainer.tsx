import React from 'react';
import {addNewProfilePostAC, changeNewTextProfilePostAC} from "../../../redux/profile-reducer";
import MyPosts from "./MyPosts";
import {RootStoreType} from "../../../redux/redux-store";

type MyPostsContainerPropsType = {
    store: RootStoreType
}

const MyPostsContainer: React.FC<MyPostsContainerPropsType> = (props) => {

    const state = props.store.getState()

    const addPost = () => {
        props.store.dispatch(addNewProfilePostAC(state.profilePage.newPostMessage))
    }

    const postMessageChange = (message: string) => {
        props.store.dispatch(changeNewTextProfilePostAC(message))
    }

    return (
        <MyPosts posts={state.profilePage.posts}
                 newPostMessage={state.profilePage.newPostMessage}
                 addPost={addPost}
                 onChangePostMessage={postMessageChange}/>
    );
}
export default MyPostsContainer;