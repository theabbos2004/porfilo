import React from "react";
import ReactDOM  from "react-dom/client";
import App from "./App";
import './Styles/index.scss'
import { Provider } from "react-redux";
import store from "./Layout/Store/Store";
let root=ReactDOM.createRoot(document.getElementById("root"))

root.render(
    <Provider store={store}>
        <App/>
    </Provider>
)