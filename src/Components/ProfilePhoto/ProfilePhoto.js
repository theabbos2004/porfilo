import React from 'react'
import styles from "./index.module.scss"
export default function ProfilePhoto({
    children="",
    src="",
    sxd={width:"30rem",height:"35rem",border:"0.5rem solid var(--color-brand--theme-text)",borderRadius:"0.5rem",
    borderRadius:"1rem",position: "relative"},
    sx={}
}) {
  return (
    <div style={{...sxd}}>
        <img src={src} 
          className={styles.image}
         style={{borderRadius:sxd.borderRadius,...sx}}/>
    </div>
  )
}
