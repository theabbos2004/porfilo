import React, { useEffect, useState } from 'react'
import styles from "./index.module.scss"
export default function BackText({word}) {
  let[state,setState]=useState({arr:[]})
  useEffect(()=>{
    const arr=[]
    for(let i=0;i<=15;i++){
      i%4==0?arr.push("  ",word):arr.push(word)
      setState({...state,arr})
    }
  },[word])
  return (
    <div className={styles.sector}>
      {
        state?.arr?.map((item,index)=><div key={index} className={styles.word} style={{animation:"animation 1s"}}>{item}</div>)
      }
    </div>
  )
}
