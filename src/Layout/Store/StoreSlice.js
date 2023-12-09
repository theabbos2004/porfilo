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
        },
        activeMenu:(state,action)=>{
            let menu=[...state.menu]
            let newMenu=[]
            for (let i = 0; i < menu.length; i++) {
                if(menu[i].active && i==menu.length-1){
                    newMenu.push({...menu[i],active:false})
                    newMenu[0]={...menu[0],active:true}
                    action.payload(menu[0].pathName)
                }
                else if(menu[i-1] && menu[i-1].active){
                    newMenu.push({...menu[i],active:true})
                    action.payload(menu[i].pathName)
                }
                else{
                    newMenu.push({...menu[i],active:false})
                }
            }
            state.menu=newMenu
        }
    }
})
export const {contactActive,menuChange,activeMenu}=counterSlice.actions
export default counterSlice.reducer