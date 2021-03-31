import React from 'react';
import './App.css';
import Header from "./components/Header/Header";
import Profile from "./components/Profile/Profile";
import Dialogs from "./components/Dialogs/Dialogs";
import {Route} from "react-router-dom"
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import {RootStateType} from "./redux/state";
import Sidebar from "./components/Sidebar/Sidebar";


type AppPropsType = {
    state: RootStateType
    addNewProfilePost: (message: string) => void
    addNewDialogMessage: (message: string) => void
    changeNewTextProfilePost: (message: string) => void
    changeNewTextDialogMessage: (message: string) => void
}

const App: React.FC<AppPropsType> = (props) => {


    return (

        <div className="app-wrapper">
            <Header/>
            <Sidebar sideBarState={props.state.sidebar}/>
            <div className="app-wrapper-content">
                <Route path="/profile" render={() => <Profile profilePageState={props.state.profilePage}
                                                              addNewProfilePost={props.addNewProfilePost}
                                                              changeNewTextProfilePost={props.changeNewTextProfilePost}/>}/>
                <Route path="/dialogs" render={() => <Dialogs dialogsPageState={props.state.dialogPage}
                                                              addNewDialogMessage={props.addNewDialogMessage}
                                                              changeNewTextDialogMessage={props.changeNewTextDialogMessage}/>}/>
                <Route path="/news" render={() => <News/>}/>
                <Route path="/music" component={Music}/>
                <Route path="/settings" component={Settings}/>
            </div>
        </div>

    );
}

export default App;

