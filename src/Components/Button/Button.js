import React from 'react'
import styles from "./index.module.scss"
export default function Button({
  onClick=()=>{},
  onMouseEnter=()=>{},
  children,
  sx,
  type
}) {
  return (
    <button className={styles.button} style={{...sx}} type={type} onClick={(e)=>onClick(e)} onMouseEnter={()=>onMouseEnter()}>{children}</button>
  )
}
