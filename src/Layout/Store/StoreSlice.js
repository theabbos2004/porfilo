import { createSlice } from '@reduxjs/toolkit';
let initialState ={
    contactActive:false,
    resumes:[
        {id:1,img:require("../../img/Uz CV Resume_page-0001 (1).jpg"),pdf:require("../../Pdf/Uz CV Resume.pdf"),change:false},
        {id:2,img:require("../../img/Eng CV Resume_page-0001.jpg"),pdf:require("../../Pdf/Eng CV Resume.pdf"),change:false},
        {id:3,img:require("../../img/ru CV Resume_page-0001.jpg"),pdf:require("../../Pdf/Uz CV Resume.pdf"),change:false},
    ],
    menu:[
        {id:1,title:"HOME",pathName:"/",active:true},
        {id:2,title:"ABOUT",pathName:"/about",active:false},
        {id:3,title:"SKILLS",pathName:"/skills",active:false},
        {id:4,title:"PORTFILO",pathName:"/portfilo",active:false},
      ]
}
let storeSlice=createSlice({
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
        nextPage:(state,action)=>{
            let menu=[...state.menu]
            let newMenu=[]
            for (let i = 0; i < menu.length; i++) {
                if(menu[i].active && i==menu.length-1){
                    newMenu.push({...menu[i],active:false})
                    newMenu[0]={...menu[0],active:true}
                    action.payload.pathName(menu[0].pathName)
                }
                else if(menu[i-1] && menu[i-1].active){
                    newMenu.push({...menu[i],active:true})
                    action.payload.pathName(menu[i].pathName)
                }
                else{
                    newMenu.push({...menu[i],active:false})
                }
            }
            state.menu=newMenu
        },
        prevPage:(state,action)=>{
            let {menu}=state
            let firstActive=false
            for (let i = 0; i < menu.length; i++) {
                if(state.menu[i].active && i==0 || i==menu.length-1 && firstActive){
                    firstActive=true
                    menu[0]={...menu[0],active:false}
                    menu[menu.length-1]={...menu[menu.length-1],active:true}
                    action?.payload.pathName(menu[menu.length-1].pathName)
                } 
                else if(state.menu[i].active){
                    menu[i-1]={...menu[i-1],active:true}
                    menu[i]={...menu[i],active:false}
                    action?.payload.pathName(menu[i-1].pathName)
                }
                else{
                    menu[i]={...menu[i],active:false}
                }
            }
            state.menu=menu
        },
        setResumeLanguage:(store,action)=>{
            let resumes=store.resumes.map(item=>item.id==action.payload.id?{...item,change:true}:{...item,change:false})
            store.resumes=resumes
        }
    }
})
export const {contactActive,menuChange,nextPage,prevPage,setResumeLanguage}=storeSlice.actions
export default storeSlice.reducer