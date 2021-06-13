import React from "react";
import Header from "./Header";
import {AuthType, logout} from "../../redux/auth-reducer";
import {connect} from "react-redux";
import {AppStateType} from "../../redux/redux-store";

type HeaderContainerPropsType = {
    logout: () => void
} & AuthType

class HeaderContainer extends React.Component<HeaderContainerPropsType> {

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

export default connect(mapState, {logout})(HeaderContainer)