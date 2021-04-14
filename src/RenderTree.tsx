import ReactDOM from "react-dom";
import {BrowserRouter} from "react-router-dom";
import App from "./App";

import React from "react";
import store from "./redux/redux-store";

export const renderTree = () => {
    ReactDOM.render(<BrowserRouter>
            <App store={store}/>
        </BrowserRouter>,
        document.getElementById('root'));
}