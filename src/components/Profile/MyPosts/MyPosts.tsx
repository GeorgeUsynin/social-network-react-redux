import React, {ChangeEvent} from 'react';
import classes from "./MyPosts.module.css";
import Post from "./Post/Post";
import {PostType} from "../../../redux/state";

type MyPostsPropsType = {
    posts: Array<PostType>
    addNewProfilePost: (message: string) => void
    changeNewTextProfilePost: (message: string) => void
    newPostMessage: string
}

const MyPosts: React.FC<MyPostsPropsType> = (props) => {

    const mappedPosts = props.posts.map(p => <Post key={p.id} id={p.id} message={p.message} likeCounts={p.likeCounts}/>)

    const addPost = () => {

        props.addNewProfilePost(props.newPostMessage)
    }

    const postMessageChangeHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
        props.changeNewTextProfilePost(e.currentTarget.value)
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