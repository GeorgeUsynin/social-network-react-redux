
import {NavLink} from "react-router-dom";
import React from "react";
import classes from "./DialogItem.module.css"


type DialogItemPropsType = {
    id: number
    name: string
    avatar: string
}

const DialogItem: React.FC<DialogItemPropsType> = (props) => {
    return (
        <div className={classes.dialog}>
            <img src={props.avatar} alt="#"/>
            <NavLink to={"/dialogs/" + props.id} className={classes.name}>{props.name}</NavLink>
        </div>
    )
}

export default DialogItem;