import { createSlice } from '@reduxjs/toolkit';
let initialState ={
    contactActive:false,
    menu:[
        {id:1,title:"HOME",pathName:"/",active:true},
        {id:2,title:"ABOUT",pathName:"/about",active:false},
        {id:3,title:"SKILLS",pathName:"/skills",active:false},
        {id:4,title:"PORTFILO",pathName:"/portfilo",active:false},
      ]
}
let counterSlice=createSlice({
    name:"counter",
    initialState ,  
    reducers:{
        contactActive:(state,action)=>{
            state.contactActive=action.payload
        },
        menuChange:(state,action)=>{
            let menu=state.menu.map(item=>item.id==action.payload?{...item,active:true}:{...item,active:false})
            state.menu=menu
        }
    }
})
export const {contactActive,menuChange}=counterSlice.actions
export default counterSlice.reducer