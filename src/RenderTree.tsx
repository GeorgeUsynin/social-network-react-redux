import ReactDOM from "react-dom";
import {BrowserRouter} from "react-router-dom";
import App from "./App";
import {addNewDialogMessage, addNewProfilePost, RootStateType} from "./redux/state";
import React from "react";

export const renderTree = (state: RootStateType) => {
    ReactDOM.render(<BrowserRouter>
            <App state={state}
                 addNewProfilePost={addNewProfilePost}
                 addNewDialogMessage={addNewDialogMessage}/>
        </BrowserRouter>,
        document.getElementById('root'));
}