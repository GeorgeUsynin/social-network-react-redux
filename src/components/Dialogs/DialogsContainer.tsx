import React from "react";
import {addNewDialogMessageAC, changeNewTextDialogMessageAC} from "../../redux/dialog-reducer";
import Dialogs from "./Dialogs";
import StoreContext from "../../StoreContext";

type DialogsPropsType = {}

const DialogsContainer: React.FC<DialogsPropsType> = (props) => {

    return (
        <StoreContext.Consumer>
            {
                (store) => {
                    const dialogPageState = store.getState().dialogPage

                    const addNewDialogMessage = () => {
                        store.dispatch(addNewDialogMessageAC(dialogPageState.newDialogMessage))
                    }

                    const dialogMessageChange = (message: string) => {
                        store.dispatch(changeNewTextDialogMessageAC(message))
                    }
                    return <Dialogs addNewDialogMessage={addNewDialogMessage}
                                    dialogMessageChange={dialogMessageChange}
                                    dialogPage={dialogPageState}/>
                }
            }
        </StoreContext.Consumer>
    )
}

export default DialogsContainer
