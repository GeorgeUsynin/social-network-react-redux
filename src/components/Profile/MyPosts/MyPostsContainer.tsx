import {addNewProfilePostAC, ProfilePageType} from "../../../redux/profile-reducer";
import MyPosts from "./MyPosts";
import {connect} from "react-redux";
import {AppStateType} from "../../../redux/redux-store";
import {Dispatch} from "redux";

//types
type MapStatePropsType = {
    profilePageState: ProfilePageType
}

type MapDispatchPropsType = {
    addPost: (message: string) => void
}

export type MyPostsPropsType = MapStatePropsType & MapDispatchPropsType

//functions for 'connect'
const mapStateToProps = (state: AppStateType): MapStatePropsType => {
    return {
        profilePageState: state.profilePage
    }
}

const mapDispatchToProps = (dispatch: Dispatch): MapDispatchPropsType => {
    return {
        addPost: (message: string) => {
            dispatch(addNewProfilePostAC(message))
        }
    }
}

//container component
const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts)

export default MyPostsContainer