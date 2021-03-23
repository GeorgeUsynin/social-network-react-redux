import React from "react";
import classes from "./Dialogs.module.css"
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {DialogPageType} from "../../redux/state";

type DialogsPropsType = {
    dialogsPageState: DialogPageType
    addNewDialogMessage: (message: string) => void
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

    const newDialogMessageRef = React.createRef<HTMLTextAreaElement>()

    const addNewDialogMessage = () => {
        if (newDialogMessageRef.current){
            props.addNewDialogMessage(newDialogMessageRef.current.value)
            newDialogMessageRef.current.value = ''
        }
    }

    return (
        <div className={classes.dialogs}>
            <div className={classes.dialog_items}>
                {mappedDialogs}
            </div>
            <div className={classes.messages}>
                {mappedMessages}
                <textarea ref={newDialogMessageRef}></textarea>
                <div>
                    <button onClick={addNewDialogMessage}>Send</button>
                </div>
            </div>

        </div>
    )
}

export default Dialogs;