import React, {ComponentType} from "react";
import Profile from "./Profile";
import {connect} from "react-redux";
import {AppStateType} from "../../redux/redux-store";
import {setUserProfileSuccess, UserProfileType} from "../../redux/profile-reducer";
import {RouteComponentProps, withRouter} from "react-router-dom";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";

type ParamsPropsType = {
    userId: string
}

type MapStateType = {
    userProfile: UserProfileType
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
    }
}


// let AuthRedirectComponent = withAuthRedirect(ProfileContainer)
// let WitUrlDataContainerComponent = withRouter(AuthRedirectComponent) //- здесь мы создали отдельную перменную-ссылку и прокинули её в connect
// export default connect(mapState, {setUserProfileSuccess})(WitUrlDataContainerComponent)

//export default connect(mapState, {setUserProfileSuccess})(withRouter(withAuthRedirect(ProfileContainer)))


//use compose
export default compose<ComponentType>(
    connect(mapState, {setUserProfileSuccess}),
    withRouter,
    withAuthRedirect
)(ProfileContainer)