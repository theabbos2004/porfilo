import { configureStore } from "@reduxjs/toolkit";
import storeReducer from "./StoreSlice";

const store=configureStore({
    reducer:{
        store:storeReducer
    }
})

export default store;