import React from "react";
import classes from "./Dialogs.module.css"
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";


const Dialogs = (props: any) => {
    return (
        <div className={classes.dialogs}>
            <div className={classes.dialog_items}>
                <DialogItem name="George" id="1"/>
                <DialogItem name="Paul" id="2"/>
                <DialogItem name="Natasha" id="3"/>
                <DialogItem name="Alexander" id="4"/>
                <DialogItem name="Vladislav" id="5"/>
                <DialogItem name="Valera" id="6"/>
            </div>
            <div className={classes.messages}>
                <Message message="Hi"/>
                <Message message="How is your wellness?"/>
                <Message message="Where do you go?"/>
            </div>
        </div>
    )
}

export default Dialogs;