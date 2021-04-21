import React, {ChangeEvent} from 'react';
import classes from "./MyPosts.module.css";
import Post from "./Post/Post";
import {MyPostsPropsType} from "./MyPostsContainer";

const MyPosts: React.FC<MyPostsPropsType> = (props) => {


    const mappedPosts = props.profilePageState.posts.map(p => <Post key={p.id} id={p.id} message={p.message} likeCounts={p.likeCounts}/>)

    const addPostHandler = () => {
        props.addPost()
    }

    const postMessageChangeHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
        props.onChangePostMessage(e.currentTarget.value)
    }

    return (
        <div className={classes.post_wrapper}>
            <div>
                My posts
            </div>
            <div>
                <div>
                    <textarea value={props.profilePageState.newPostMessage} onChange={postMessageChangeHandler}></textarea>
                </div>
                <div>
                    <button onClick={addPostHandler}>Add</button>
                </div>
            </div>
            <div className={classes.posts}>
                {
                    mappedPosts
                }
            </div>
        </div>
    );
}
export default MyPosts;