import React from "react";
import Profile from "./Profile";
import {connect} from "react-redux";
import {AppStateType} from "../../redux/redux-store";
import {setUserProfileSuccess, UserProfileType} from "../../redux/profile-reducer";
import {Redirect, RouteComponentProps, withRouter} from "react-router-dom";

type ParamsPropsType = {
    userId: string
}

type MapStateType = {
    userProfile: UserProfileType
    isAuth: boolean
}

type MapDispatchType = {
    setUserProfileSuccess: (id: string) => void
}
export type ProfileContainerPropsType = MapStateType & MapDispatchType & RouteComponentProps<ParamsPropsType>

class ProfileContainer extends React.Component<ProfileContainerPropsType> {

    componentDidMount() {
        let userId = this.props.match.params.userId
        if (!userId) userId = '2'
        //our thunk
        this.props.setUserProfileSuccess(userId)
    }

    render() {

        if (!this.props.isAuth) return <Redirect to={'/login'}/>

        return (
            <div>
                <Profile userProfile={this.props.userProfile}/>
            </div>
        )
    }
}

const mapState = (state: AppStateType): MapStateType => {
    return {
        userProfile: state.profilePage.userProfile,
        isAuth: state.auth.isAuth
    }
}

//let WitUrlDataContainerComponent = withRouter(ProfileContainer) - здесь мы создали отдельную перменную-ссылку и прокинули её в connect
//export default connect(mapState, {setUserProfile})(WitUrlDataContainerComponent)


export default connect(mapState, {setUserProfileSuccess})(withRouter(ProfileContainer))
