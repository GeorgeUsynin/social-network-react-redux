import React from 'react';
import './App.css';
import Header from "./components/Header/Header";
import Profile from "./components/Profile/Profile";
import Dialogs from "./components/Dialogs/Dialogs";
import {Redirect, Route} from "react-router-dom"
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import Sidebar from "./components/Sidebar/Sidebar";
import {RootStoreType} from "./redux/redux-store";
import DialogsContainer from "./components/Dialogs/DialogsContainer";


type AppPropsType = {
    store: RootStoreType
}

const App: React.FC<AppPropsType> = (props) => {

    const state = props.store.getState()

    return (

        <div className="app-wrapper">
            <Header/>
            <Sidebar sideBarState={state.sidebar}/>
            <div className="app-wrapper-content">
                <Route path={'/'} exact render={() => <Redirect to={'/profile'}/>}/>
                <Route path="/profile" render={() => <Profile store={props.store}/>}/>
                <Route path="/dialogs" render={() => <DialogsContainer store={props.store}/>}/>
                <Route path="/news" render={() => <News/>}/>
                <Route path="/music" component={Music}/>
                <Route path="/settings" component={Settings}/>
            </div>
        </div>

    );
}

export default App;

