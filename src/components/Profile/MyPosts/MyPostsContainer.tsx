import React from 'react';
import {addNewProfilePostAC, changeNewTextProfilePostAC} from "../../../redux/profile-reducer";
import MyPosts from "./MyPosts";
import StoreContext from '../../../StoreContext';

type MyPostsContainerPropsType = {}

const MyPostsContainer: React.FC<MyPostsContainerPropsType> = (props) => {

    return (
        <StoreContext.Consumer>
            {
                (store) => {
                    const profilePageState = store.getState().profilePage

                    const addPost = () => {
                        store.dispatch(addNewProfilePostAC(profilePageState.newPostMessage))
                    }

                    const postMessageChange = (message: string) => {
                        store.dispatch(changeNewTextProfilePostAC(message))
                    }

                    return <MyPosts posts={profilePageState.posts}
                                    newPostMessage={profilePageState.newPostMessage}
                                    addPost={addPost}
                                    onChangePostMessage={postMessageChange}/>

                }
            }
        </StoreContext.Consumer>
    );
}
export default MyPostsContainer;