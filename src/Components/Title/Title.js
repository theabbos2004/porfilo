import React from 'react'
import styles from "./index.module.scss"
export default function Title({
    children="",
    sx={}
}) {
  return (
      <div style={{...sx}} className={styles.title}>
          {children}
    </div>
  )
}
