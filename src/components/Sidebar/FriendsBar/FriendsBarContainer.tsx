import FriendsBar from "./FriendsBar";
import {connect} from "react-redux";
import {SidebarType} from "../../../redux/sidebar-reducer";
import {AppStateType} from "../../../redux/redux-store";
import {Dispatch} from "redux";

//types
type MapStatePropsType = {
    sidebar: SidebarType
}
type MapDispatchPropsType = {

}

export type FriendsBarType = MapStatePropsType & MapDispatchPropsType

const mapStateToProps = (state: AppStateType): MapStatePropsType => {
    return {
        sidebar: state.sidebar
    }
}

const mapDispatchToProps = (dispatch: Dispatch): MapDispatchPropsType => {
    return {}
}

const FriendsBarContainer = connect(mapStateToProps, mapDispatchToProps)(FriendsBar)

export default FriendsBarContainer;