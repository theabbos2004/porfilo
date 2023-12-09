import React, { useState } from 'react'
import styles from "./index.module.scss"
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { menuChange } from '../../Store/StoreSlice'
export default function Navbor() {
  let storeMenu =useSelector(state=>state.counter.menu)
  let dispatch =useDispatch()
  let isActive=(id)=>dispatch(menuChange(id))
  return (
    <div className={styles.navbor}>
      <div className={styles.list}>
        {
          storeMenu?.map(item=>
            <Link 
              key={item.id} 
              to={item.pathName}
              className={`${item.active?styles.active:""}`}
              style={{opacity:item.active?1:0.65}}  
              onClick={()=>isActive(item.id)}
              >
              {item.title}
              <div className={`${item.active?styles.menu_line:""}`}></div>
            </Link>)
        }
      </div>
    </div>
  )
}
