import React from "react";
import classes from "./Message.module.css";


type MessagePropsType = {
    id: number
    message: string
}

const Message: React.FC<MessagePropsType> = (props) => {

    return (
        <div>
            <div className={classes.message}>{props.message}</div>
        </div>
    )
}

export default Message;