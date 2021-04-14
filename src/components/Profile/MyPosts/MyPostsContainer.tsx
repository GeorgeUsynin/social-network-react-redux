import React from 'react';
import {addNewProfilePostAC, changeNewTextProfilePostAC} from "../../../redux/profile-reducer";
import MyPosts from "./MyPosts";
import {RootStoreType} from "../../../redux/redux-store";

type MyPostsContainerPropsType = {
    store: RootStoreType
}

const MyPostsContainer: React.FC<MyPostsContainerPropsType> = (props) => {

    const profilePageState = props.store.getState().profilePage

    const addPost = () => {
        props.store.dispatch(addNewProfilePostAC(profilePageState.newPostMessage))
    }

    const postMessageChange = (message: string) => {
        props.store.dispatch(changeNewTextProfilePostAC(message))
    }

    return (
        <MyPosts posts={profilePageState.posts}
                 newPostMessage={profilePageState.newPostMessage}
                 addPost={addPost}
                 onChangePostMessage={postMessageChange}/>
    );
}
export default MyPostsContainer;