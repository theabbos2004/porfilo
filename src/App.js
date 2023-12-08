import React from "react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import AppLayout from "./Layout/Applayout/AppLayout";
const App=()=>{
    return(
        <BrowserRouter store={{id:"ads"}}>
            <AppLayout/>
        </BrowserRouter>
    )
}

export default App