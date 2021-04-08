import React, {ChangeEvent} from "react";
import classes from "./Dialogs.module.css"
import {DialogItem} from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {ActionsTypes, DialogPageType} from "../../redux/state";

type DialogsPropsType = {
    dialogsPageState: DialogPageType
    dispatch: (action: ActionsTypes) => void
}

const Dialogs: React.FC<DialogsPropsType> = (props) => {

    const mappedDialogs = props.dialogsPageState.dialogs.map(d => {
        return (
            <DialogItem key={d.id} id={d.id} name={d.name} avatar={d.avatar}/>
        )
    })

    const mappedMessages = props.dialogsPageState.messages.map(m => {
        return (
            <Message key={m.id} id={m.id} message={m.message}/>
        )
    })

    const addNewDialogMessage = () => {
        props.dispatch({type: "ADD-NEW-DIALOG-MESSAGE", message: props.dialogsPageState.newDialogMessage})
    }

    const dialogMessageChangeHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
        props.dispatch({type: "CHANGE-NEW-TEXT-DIALOG-MESSAGE", newText: e.currentTarget.value})
    }

    return (
        <div className={classes.dialogs}>
            <div className={classes.dialog_items}>
                {mappedDialogs}
            </div>
            <div className={classes.messages}>
                {mappedMessages}
                <textarea value={props.dialogsPageState.newDialogMessage}
                          onChange={dialogMessageChangeHandler}></textarea>
                <div>
                    <button onClick={addNewDialogMessage}>Send</button>
                </div>
            </div>

        </div>
    )
}

export default Dialogs;