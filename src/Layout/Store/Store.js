import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./StoreSlice";

const store=configureStore({
    reducer:{
        counter:counterReducer
    }
})

export default store;