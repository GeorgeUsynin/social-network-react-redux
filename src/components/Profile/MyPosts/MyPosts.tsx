import React from 'react';
import classes from "./MyPosts.module.css";
import Post from "./Post/Post";
import {addNewProfilePost, PostType} from "../../../redux/state";

type MyPostsPropsType = {
    posts: Array<PostType>
    addNewProfilePost: (message: string) => void
}

const MyPosts: React.FC<MyPostsPropsType> = (props) => {

    const mappedPosts = props.posts.map(p => <Post key={p.id} id={p.id} message={p.message} likeCounts={p.likeCounts}/>)

    const newPostMessageRef = React.createRef<HTMLTextAreaElement>()

    const addPost = () => {
        if (newPostMessageRef.current) {
            props.addNewProfilePost(newPostMessageRef.current.value)
            newPostMessageRef.current.value = ''
        }

    }

        return (
            <div className={classes.post_wrapper}>
                <div>
                    My posts
                </div>
                <div>
                    <div>
                        <textarea ref={newPostMessageRef}></textarea>
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