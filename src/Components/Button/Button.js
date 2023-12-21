import React from 'react'
import styles from "./index.module.scss"
export default function Button({
  onClick=()=>{},
  children,
  sx,
  type
}) {
  return (
    <button className={styles.button} style={{...sx}} type={type} onClick={(e)=>onClick(e)}>{children}</button>
  )
}
