import React, {ChangeEvent} from "react";
import classes from "./Dialogs.module.css"
import {DialogItem} from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {DialogsPropsType} from "./DialogsContainer";
import {Redirect} from "react-router-dom";

const Dialogs: React.FC<DialogsPropsType> = (props) => {

    const mappedDialogs = props.dialogPage.dialogs.map(d => {
        return (
            <DialogItem key={d.id} id={d.id} name={d.name} avatar={d.avatar}/>
        )
    })

    const mappedMessages = props.dialogPage.messages.map(m => {
        return (
            <Message key={m.id} id={m.id} message={m.message}/>
        )
    })

    const addNewDialogMessageHandler = () => {
        props.addNewDialogMessage()
    }

    const dialogMessageChangeHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
        props.dialogMessageChange(e.currentTarget.value)
    }

    //if we are not authorized => redirect to loginPage
    if (!props.isAuth) return <Redirect to={'/login'}/>

    return (
        <div className={classes.dialogs}>
            <div className={classes.dialog_items}>
                {mappedDialogs}
            </div>
            <div className={classes.messages}>
                {mappedMessages}
                <textarea value={props.dialogPage.newDialogMessage}
                          onChange={dialogMessageChangeHandler}>Hello</textarea>
                <div>
                    <button onClick={addNewDialogMessageHandler}>Send</button>
                </div>
            </div>

        </div>
    )
}

export default Dialogs;