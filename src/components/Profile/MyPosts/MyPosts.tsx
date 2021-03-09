import React from 'react';
import classes from "./MyPosts.module.css";
import Post from "./Post/Post";


const MyPosts = () => {
    return (
        <div className={classes.post_wrapper}>
            <div>
                My posts
            </div>
            <div>
                New posts
            </div>
            <div className={classes.posts}>
                <Post message="Hi, my name is George and this is my first social network project" likeCounts={44}/>
                <Post message="Hi there, I learned how to push props" likeCounts={1}/>
            </div>
        </div>
    );
}

export default MyPosts;