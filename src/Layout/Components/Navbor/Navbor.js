import React, { useState } from 'react'
import styles from "./index.module.scss"
import { Link } from 'react-router-dom'
export default function Navbor() {
  let [state,setState]=useState({
    menu:[
      {id:1,title:"HOME",pathName:"/",active:true},
      {id:2,title:"ABOUT",pathName:"/about",active:false},
      {id:3,title:"SKILLS",pathName:"/skills",active:false},
      {id:4,title:"PORTFILO",pathName:"/portfilo",active:false},
    ]
  })
  let isActive=(id)=>{
    let {menu}=state
    menu=menu.map(item=>item.id==id?{...item,active:true}:{...item,active:false})
    setState({...state,menu})
  }
  return (
    <div className={styles.navbor}>
      <div className={styles.list}>
        {
          state.menu?.map(item=>
            <Link 
              key={item.id} 
              to={item.pathName}
              className={`${item.active?styles.active:""}`}
              style={{opacity:item.active?1:0.65}}  
              onClick={()=>isActive(item.id)}>
              {item.title}
              <div className={`${item.active?styles.menu_line:""}`}></div>
            </Link>)
        }
      </div>
    </div>
  )
}
