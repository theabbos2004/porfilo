import React from 'react'
import styles from "./index.module.scss"
export default function Thanks({
    error="",
    message="Thank you!",
    messageError="Something is wrong",
    describe="your form submission has been received",
    describeError="your form submission hasn't been received",
    onClick
}) {
  return (
    <div className={styles.Thanks_section}>
        <div className={styles.Thanks_box}>
            {
                error?<div style={{fontSize:"2rem",fontWeight:"bold"}}>{messageError}</div>:
                <div style={{fontSize:"1.7rem",fontWeight:"bold"}}>{message}</div>
            }
            {
                error?<div>{describeError}</div>:<div>{describe}</div>
            }
            <p style={{color:"var(--color-brand--theme-text)",cursor:"pointer"}}
            onClick={()=>onClick()}>
                {`<- Back to site`}
            </p>
        </div>
    </div>
  )
}
