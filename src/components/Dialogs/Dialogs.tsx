import React from "react";
import classes from "./Dialogs.module.css"
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {DialogPageType} from "../../redux/state";
import {Route} from "react-router-dom";

type DialogsPropsType = {
    dialogsPageState: DialogPageType
}

const Dialogs: React.FC<DialogsPropsType> = (props) => {

    const mappedDialogs = props.dialogsPageState.dialogs.map(d=>{
        return(
            <DialogItem key={d.id} id={d.id} name={d.name} avatar={d.avatar}/>
        )
    })

    const mappedMessages = props.dialogsPageState.messages.map(m=>{
        return(
            <Route path={"/dialogs/" + m.id} render={()=> <Message key={m.id} id={m.id} message={m.message}/>} />
        )
    })

    return (
        <div className={classes.dialogs}>
            <div className={classes.dialog_items}>
                {mappedDialogs}
            </div>
            <div className={classes.messages}>
                {mappedMessages}
            </div>
        </div>
    )
}

export default Dialogs;