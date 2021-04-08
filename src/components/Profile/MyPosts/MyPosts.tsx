import React, {ChangeEvent} from 'react';
import classes from "./MyPosts.module.css";
import Post from "./Post/Post";
import {ActionsTypes, PostType} from "../../../redux/state";

type MyPostsPropsType = {
    posts: Array<PostType>
    newPostMessage: string
    dispatch: (action: ActionsTypes) => void
}

const MyPosts: React.FC<MyPostsPropsType> = (props) => {

    const mappedPosts = props.posts.map(p => <Post key={p.id} id={p.id} message={p.message} likeCounts={p.likeCounts}/>)

    const addPost = () => {

        props.dispatch({type: "ADD-NEW-PROFILE-POST", message: props.newPostMessage})
    }

    const postMessageChangeHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
        props.dispatch({type: "CHANGE-NEW-TEXT-PROFILE-POST", newText: e.currentTarget.value})
    }

    return (
        <div className={classes.post_wrapper}>
            <div>
                My posts
            </div>
            <div>
                <div>
                    <textarea value={props.newPostMessage} onChange={postMessageChangeHandler}></textarea>
                </div>
                <div>
                    <button onClick={addPost}>Add</button>
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