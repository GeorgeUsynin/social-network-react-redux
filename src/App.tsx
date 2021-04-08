import React from 'react';
import './App.css';
import Header from "./components/Header/Header";
import Profile from "./components/Profile/Profile";
import Dialogs from "./components/Dialogs/Dialogs";
import {Route} from "react-router-dom"
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import {StoreType} from "./redux/state";
import Sidebar from "./components/Sidebar/Sidebar";


type AppPropsType = {
    store: StoreType
}

const App: React.FC<AppPropsType> = (props) => {

    const state = props.store.getState()

    return (

        <div className="app-wrapper">
            <Header/>
            <Sidebar sideBarState={state.sidebar}/>
            <div className="app-wrapper-content">
                <Route path="/profile" render={() => <Profile profilePageState={state.profilePage}
                                                              dispatch={props.store.dispatch.bind(props.store)}/>}/>
                <Route path="/dialogs" render={() => <Dialogs dialogsPageState={state.dialogPage}
                                                              dispatch={props.store.dispatch.bind(props.store)}/>}/>
                <Route path="/news" render={() => <News/>}/>
                <Route path="/music" component={Music}/>
                <Route path="/settings" component={Settings}/>
            </div>
        </div>

    );
}

export default App;

