import React, {ComponentType} from 'react';
import './App.css';
import {Redirect, Route, withRouter} from "react-router-dom"
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import Sidebar from "./components/Sidebar/Sidebar";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import Login from "./components/Login/Login";
import {connect} from "react-redux";
import {compose} from "redux";
import {initializeApp} from "./redux/app-reducer";
import {AppStateType} from "./redux/redux-store";
import {Preloader} from "./components/common/Preloader";
import UsersContainer from "./components/Users/UsersContainer";


type AppPropsType = {} & mapDispatchToPropsType & mapStateToProps


type mapStateToProps = {
    initialize: boolean
}

type mapDispatchToPropsType = {
    initializeApp: () => void
}

class App extends React.Component<AppPropsType> {

    componentDidMount() {
        //our thunk
        this.props.initializeApp()
    }

    render() {
        if (!this.props.initialize) {
            return <Preloader/>
        }
        return (
            <div className="app-wrapper">
                <HeaderContainer/>
                <Sidebar/>
                <div className="app-wrapper-content">
                    <Route path={'/'} exact render={() => <Redirect to={'/profile'}/>}/>
                    <Route path="/dialogs" render={() => <DialogsContainer/>}/>
                    <Route path="/profile/:userId?" render={() => <ProfileContainer/>}/>
                    <Route path="/users" render={() => <UsersContainer/>}/>
                    <Route path="/login" render={() => <Login/>}/>
                    <Route path="/news" render={() => <News/>}/>
                    <Route path="/music" component={Music}/>
                    <Route path="/settings" component={Settings}/>
                </div>
            </div>

        );
    }
}

const mapStateToProps = (state: AppStateType) => {
    return {
        initialize: state.app.initialized
    }
}

export default compose<ComponentType>(
    withRouter,
    connect(mapStateToProps, {initializeApp}))
(App)


