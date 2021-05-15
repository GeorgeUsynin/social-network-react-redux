import React from "react";
import Profile from "./Profile";
import {connect} from "react-redux";
import {AppStateType} from "../../redux/redux-store";
import {setUserProfile, UserProfileType} from "../../redux/profile-reducer";
import {RouteComponentProps, withRouter} from "react-router-dom";
import {usersAPI} from "../../api/api";

type ParamsPropsType = {
    userId: string
}

type MapStateType = {
    userProfile: UserProfileType
}

type MapDispatchType = {
    setUserProfile: (userProfile: UserProfileType) => void
}
export type ProfileContainerPropsType = MapStateType & MapDispatchType & RouteComponentProps<ParamsPropsType>

class ProfileContainer extends React.Component<ProfileContainerPropsType> {

    componentDidMount() {
        let userId = this.props.match.params.userId
        if (!userId) userId = '2'
       usersAPI.setUserProfile(userId)
            .then(data => {
                this.props.setUserProfile(data)
            })
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
        userProfile: state.profilePage.userProfile
    }
}

//let WitUrlDataContainerComponent = withRouter(ProfileContainer) - здесь мы создали отдельную перменную-ссылку и прокинули её в connect
//export default connect(mapState, {setUserProfile})(WitUrlDataContainerComponent)


export default connect(mapState, {setUserProfile})(withRouter(ProfileContainer))
