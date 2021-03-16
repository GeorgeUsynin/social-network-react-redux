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

            <NavLink to={"/dialogs/" + props.id} className={classes.name}>
                <img src={props.avatar} alt="#"/>
                {props.name}
            </NavLink>
        </div>
    )
}

export default DialogItem;