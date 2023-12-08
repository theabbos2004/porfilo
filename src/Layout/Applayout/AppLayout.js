import React, { useState } from 'react'

import RoutConfig from '../../Pages/RoutConfig'
import Navbor from '../Components/Navbor/Navbor'
import Contact from '../Components/Contact/Contact'
import BackText from '../../Components/BackText/BackText'
import styles from "./index.module.scss"
import { useLocation } from 'react-router-dom'
import { useEffect } from 'react'
export default function AppLayout() {
  let [state,setState]=useState()
  let location=useLocation()
  useEffect(()=>{
    setTimeout(()=>{
      console.log("salom");
    },30)
    
  },[])

  useEffect(()=>{
    let pathname=location.pathname.split("/")[1].toUpperCase()
    setState({...state,pathname})
  },[useLocation().pathname.split("/")[1].toUpperCase()])
  return (
    <div className={styles.app_layout}>
        <BackText word={state?.pathname=="" ? "HOME":state?.pathname}/>
        <Contact/>
        <div style={{padding:"2.5rem",paddingLeft:"7rem",width:"100%",height:"100%",position:"absolute"}}>
          <Navbor/>
          <RoutConfig/>
        </div>
    </div>
  )
}
