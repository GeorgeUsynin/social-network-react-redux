import {addNewDialogMessageAC, changeNewTextDialogMessageAC, DialogPageType} from "../../redux/dialog-reducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";
import {AppStateType} from "../../redux/redux-store";
import {Dispatch} from "redux";

//types
type MapStatePropsType = {
    dialogPage: DialogPageType
}

type MapDispatchPropsType = {
    addNewDialogMessage: () => void
    dialogMessageChange: (message: string) => void
}

export type DialogsPropsType = MapStatePropsType & MapDispatchPropsType

//functions for 'connect'
const mapStateToProps = (state: AppStateType): MapStatePropsType => {
    return {
        dialogPage: state.dialogPage
    }
}

const mapDispatchToProps = (dispatch: Dispatch): MapDispatchPropsType => {
    return {
        addNewDialogMessage: () => {
            dispatch(addNewDialogMessageAC())
        },
        dialogMessageChange: (message: string) => {
            dispatch(changeNewTextDialogMessageAC(message))
        }
    }
}

//container component
const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs)

export default DialogsContainer
