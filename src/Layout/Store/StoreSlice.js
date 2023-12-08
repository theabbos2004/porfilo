import { createSlice } from '@reduxjs/toolkit';
let initialState ={
    contactActive:false
}
let counterSlice=createSlice({
    name:"counter",
    initialState ,  
    reducers:{
        contactActive:(state,action)=>{
            state.contactActive=action.payload
        }
    }
})
export const {contactActive}=counterSlice.actions
export default counterSlice.reducer