import React from 'react';
import classes from "./MyPosts.module.css";
import Post from "./Post/Post";


const MyPosts = () => {
    return (
        <div>
            <div>
                My posts
            </div>
            <div>
                New posts
            </div>
            <div className={classes.posts}>
                <Post/>
                <Post/>
            </div>
        </div>
    );
}

export default MyPosts;