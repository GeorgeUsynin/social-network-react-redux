import React from 'react';
import './App.css';
import Header from "./components/Header/Header";
import Navbar from "./components/Sidebar/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import Dialogs from "./components/Dialogs/Dialogs";
import {BrowserRouter, Route} from "react-router-dom"
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import {RootStateType} from "./redux/state";
import Sidebar from "./components/Sidebar/Sidebar";

type AppPropsType = {
    state: RootStateType
}

const App: React.FC<AppPropsType> = (props) => {
    return (
        <BrowserRouter>
            <div className="app-wrapper">
                <Header/>
                <Sidebar sideBarState={props.state.sidebar}/>
                <div className="app-wrapper-content">
                    <Route path="/profile" render={() => <Profile profilePageState={props.state.profilePage}/>}/>
                    <Route path="/dialogs" render={() => <Dialogs dialogsPageState={props.state.dialogPage}/>}/>
                    <Route path="/news" render={() => <News/>}/>
                    <Route path="/music" component={Music}/>
                    <Route path="/settings" component={Settings}/>
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;

