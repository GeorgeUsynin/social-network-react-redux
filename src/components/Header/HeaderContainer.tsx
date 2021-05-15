import React from "react";
import Header from "./Header";
import {AuthType, setAuthUserData} from "../../redux/auth-reducer";
import {connect} from "react-redux";
import {AppStateType} from "../../redux/redux-store";
import {authAPI} from "../../api/api";

type HeaderContainerPropsType = {
    setAuthUserData: (data: AuthType) => void
} & AuthType

class HeaderContainer extends React.Component<HeaderContainerPropsType> {

    componentDidMount() {
        authAPI.authMe()
            .then(data => {
                if (data.resultCode === 0){
                    this.props.setAuthUserData(data.data)
                }
            })
    }

    render() {
        return (
            <Header {...this.props}/>
        );
    }
}

const mapState = (state: AppStateType): AuthType => {
    return {
        isAuth: state.auth.isAuth,
        login: state.auth.login,
        email: state.auth.email,
        userId: state.auth.userId
    }
}

export default connect(mapState, {setAuthUserData})(HeaderContainer)