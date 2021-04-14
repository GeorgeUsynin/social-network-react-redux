import React from "react";
import {addNewDialogMessageAC, changeNewTextDialogMessageAC} from "../../redux/dialog-reducer";
import Dialogs from "./Dialogs";
import {RootStoreType} from "../../redux/redux-store";

type DialogsPropsType = {
    store: RootStoreType
}

const DialogsContainer: React.FC<DialogsPropsType> = (props) => {

    const state = props.store.getState()

    const addNewDialogMessage = () => {
        props.store.dispatch(addNewDialogMessageAC(state.dialogPage.newDialogMessage))
    }

    const dialogMessageChange = (message: string) => {
        props.store.dispatch(changeNewTextDialogMessageAC(message))
    }

    return (
        <Dialogs addNewDialogMessage={addNewDialogMessage}
                 dialogMessageChange={dialogMessageChange}
                 messages={state.dialogPage.messages}
                 dialogs={state.dialogPage.dialogs}
                 newDialogMessage={state.dialogPage.newDialogMessage}
        />
    )
}

export default DialogsContainer;