import React, {ComponentType} from "react";
import Profile from "./Profile";
import {connect} from "react-redux";
import {AppStateType} from "../../redux/redux-store";
import {getUserStatus, setUserProfileSuccess, updateUserStatus, UserProfileType} from "../../redux/profile-reducer";
import {RouteComponentProps, withRouter} from "react-router-dom";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";

type ParamsPropsType = {
    userId: string
}

type MapStateType = {
    userProfile: UserProfileType
    status: string
    authorizedUserId: number | null
    isAuth: boolean
}

type MapDispatchType = {
    setUserProfileSuccess: (id: string) => void
    getUserStatus: (id: string) => void
    updateUserStatus: (status: string) => void
}
export type ProfileContainerPropsType = MapStateType & MapDispatchType & RouteComponentProps<ParamsPropsType>

class ProfileContainer extends React.Component<ProfileContainerPropsType> {

    componentDidMount() {
        let userId = this.props.match.params.userId
        if (!userId) {
            this.props.authorizedUserId
                ?
                userId = this.props.authorizedUserId.toString()
                :
                this.props.history.push('/login')
        }
        //our thunk
        this.props.setUserProfileSuccess(userId)
        this.props.getUserStatus(userId)
    }

    render() {
        return (
            <div>
                <Profile userProfile={this.props.userProfile} status={this.props.status}
                         updateUserStatus={this.props.updateUserStatus}/>
            </div>
        )
    }
}

const mapState = (state: AppStateType): MapStateType => {
    return {
        userProfile: state.profilePage.userProfile,
        status: state.profilePage.status,
        authorizedUserId: state.auth.userId,
        isAuth: state.auth.isAuth
    }
}


// let AuthRedirectComponent = withAuthRedirect(ProfileContainer)
// let WitUrlDataContainerComponent = withRouter(AuthRedirectComponent) //- здесь мы создали отдельную перменную-ссылку и прокинули её в connect
// export default connect(mapState, {setUserProfileSuccess})(WitUrlDataContainerComponent)

//export default connect(mapState, {setUserProfileSuccess})(withRouter(withAuthRedirect(ProfileContainer)))


//use compose
export default compose<ComponentType>(
    withRouter,
    connect(mapState, {setUserProfileSuccess, getUserStatus, updateUserStatus})
)(ProfileContainer)