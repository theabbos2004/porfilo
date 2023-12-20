import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./StoreSlice";

const store=configureStore({
    reducer:{
        counter:counterReducer
    }
})

// const CONTACT_ACTIVE="CONTACT_ACTIVE"

// let action=({initialState,action})=>{
//     switch (action.type) {
//         case CONTACT_ACTIVE:

//         default:
//             return initialState
//     }
// }

export default store;