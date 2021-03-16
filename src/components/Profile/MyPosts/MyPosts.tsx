import React from 'react';
import classes from "./MyPosts.module.css";
import Post from "./Post/Post";
import {PostType} from "../../../redux/state";

type MyPostsPropsType = {
    posts: Array<PostType>
}

const MyPosts: React.FC<MyPostsPropsType> = (props) => {

    const mappedPosts = props.posts.map(p=> <Post key={p.id} id={p.id} message={p.message} likeCounts={p.likeCounts}/>)

    return (
        <div className={classes.post_wrapper}>
            <div>
                My posts
            </div>
            <div>
                <div>
                    <textarea></textarea>
                </div>
                <div>
                    <button>Add</button>
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