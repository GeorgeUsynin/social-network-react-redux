import React from "react";
import {addNewDialogMessageAC, changeNewTextDialogMessageAC} from "../../redux/dialog-reducer";
import Dialogs from "./Dialogs";
import {RootStoreType} from "../../redux/redux-store";

type DialogsPropsType = {
    store: RootStoreType
}

const DialogsContainer: React.FC<DialogsPropsType> = (props) => {

    const dialogPageState = props.store.getState().dialogPage

    const addNewDialogMessage = () => {
        props.store.dispatch(addNewDialogMessageAC(dialogPageState.newDialogMessage))
    }

    const dialogMessageChange = (message: string) => {
        props.store.dispatch(changeNewTextDialogMessageAC(message))
    }

    return (
        <Dialogs addNewDialogMessage={addNewDialogMessage}
                 dialogMessageChange={dialogMessageChange}
                 dialogPage={dialogPageState}


        />
    )
}

export default DialogsContainer;