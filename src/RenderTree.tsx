import ReactDOM from "react-dom";
import {BrowserRouter} from "react-router-dom";
import App from "./App";
import state, {
    addNewDialogMessage,
    addNewProfilePost,
    changeNewTextDialogMessage,
    changeNewTextProfilePost
} from "./redux/state";
import React from "react";

export const renderTree = () => {
    ReactDOM.render(<BrowserRouter>
            <App state={state}
                 addNewProfilePost={addNewProfilePost}
                 addNewDialogMessage={addNewDialogMessage}
                 changeNewTextProfilePost={changeNewTextProfilePost}
                 changeNewTextDialogMessage={changeNewTextDialogMessage}/>
        </BrowserRouter>,
        document.getElementById('root'));
}