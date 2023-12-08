import React from 'react'
import styles from "./index.module.scss"
export default function Button({
  onClick=()=>{}
}) {
  return (
    <button className={styles.button} onClick={()=>onClick()}>contact me</button>
  )
}
