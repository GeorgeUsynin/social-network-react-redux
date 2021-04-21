import {addNewProfilePostAC, changeNewTextProfilePostAC, ProfilePageType} from "../../../redux/profile-reducer";
import MyPosts from "./MyPosts";
import {connect} from "react-redux";
import {AppStateType} from "../../../redux/redux-store";
import {Dispatch} from "redux";

//types
type MapStatePropsType = {
    profilePageState: ProfilePageType
}

type MapDispatchPropsType = {
    addPost: () => void
    onChangePostMessage: (message: string) => void
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
        addPost: () => {
            dispatch(addNewProfilePostAC())
        },
        onChangePostMessage: (message: string) => {
            dispatch(changeNewTextProfilePostAC(message))
        }
    }
}

//container component
const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts)

export default MyPostsContainer