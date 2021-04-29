import React from 'react';
import './App.css';
import Header from "./components/Header/Header";
import Profile from "./components/Profile/Profile";
import {Redirect, Route} from "react-router-dom"
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import Sidebar from "./components/Sidebar/Sidebar";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import Users from "./components/Users/Users";
import UsersContainer from "./components/Users/UsersContainer";


type AppPropsType = {}

const App: React.FC<AppPropsType> = (props) => {

    //const state = props.store.getState()

    return (

        <div className="app-wrapper">
            <Header/>
            <Sidebar/>
            <div className="app-wrapper-content">
                <Route path={'/'} exact render={() => <Redirect to={'/profile'}/>}/>
                <Route path="/profile" render={() => <Profile/>}/>
                <Route path="/dialogs" render={() => <DialogsContainer/>}/>
                <Route path="/users" render={() => <UsersContainer/>}/>
                <Route path="/news" render={() => <News/>}/>
                <Route path="/music" component={Music}/>
                <Route path="/settings" component={Settings}/>
            </div>
        </div>

    );
}

export default App;

