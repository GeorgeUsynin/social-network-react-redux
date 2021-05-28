import {addNewDialogMessageAC, changeNewTextDialogMessageAC, DialogPageType} from "../../redux/dialog-reducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";
import {AppStateType} from "../../redux/redux-store";
import {compose, Dispatch} from "redux";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {ComponentType} from "react";

//types
type MapStatePropsType = {
    dialogPage: DialogPageType
    isAuth: boolean
}

type MapDispatchPropsType = {
    addNewDialogMessage: () => void
    dialogMessageChange: (message: string) => void
}

export type DialogsPropsType = MapStatePropsType & MapDispatchPropsType

//functions for 'connect'
const mapStateToProps = (state: AppStateType): MapStatePropsType => {
    return {
        dialogPage: state.dialogPage,
        isAuth: state.auth.isAuth
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
// export default connect(mapStateToProps, mapDispatchToProps)(withAuthRedirect(Dialogs))

//use compose
export default compose<ComponentType>(
    connect(mapStateToProps, mapDispatchToProps),
    withAuthRedirect
)(Dialogs)
