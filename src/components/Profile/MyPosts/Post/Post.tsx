import React from 'react';
import classes from "./Post.module.css";

type PostPropsType = {
    message: string
    likeCounts: number
}

const Post: React.FC<PostPropsType> = (props) => {
    debugger
    if (props.likeCounts === 1) {
        return (
            <div className={classes.post}>
                <div className={`${classes.item} ${classes.active}`}>
                    {props.message}
                </div>
                <img
                    src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
                    alt="woman"/>
                <div>
                    <span>
                        {props.likeCounts} like
                    </span>
                </div>
            </div>
        )
    } else {
        return (
            <div className={classes.post}>
                <div className={`${classes.item} ${classes.active}`}>
                    {props.message}
                </div>
                <img
                    src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
                    alt="woman"/>
                <div>
                    <span>
                        {props.likeCounts} likes
                    </span>
                </div>
            </div>

        );

    }

}

export default Post;