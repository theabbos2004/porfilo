import React, { useState } from 'react'
import styles from "./index.module.scss"
import Title from '../../Title/Title'
import ProfilePhoto from '../../ProfilePhoto/ProfilePhoto'
import ProfileImage from '../../../img/Profile.png'
import { NextIcon } from '../../../img/icons/Icons'
export default function AboutSector() {
  let [state,setState]=useState({
    info:[
      {id:1,title:"Name",drop:"Abbos"},
      {id:2,title:"Age",drop:"19"},
      {id:3,title:"City",drop:"Angren, Tashkent region"},
      {id:4,title:"Information",drop:"Renessans ta'lim university (extramural study)"},
    ]
  })
  return (
    <div className={styles.about_bob}>
      <div className={styles.intro}>
        <div className={styles.image_section}>
            <ProfilePhoto src={ProfileImage} sx={{transform:"translate(-2rem,-2rem)"}}/>
        </div>
        <div className={styles.who_section}>
            <div style={{display:"flex",flexDirection:"column",gap:"1rem",fontSize:"1.8rem"}}>
              <div style={{display:"flex",fontWeight:"600",fontSize:"3rem",color:"var(--color-brand--theme-text)"}}>
                <p style={{color:"var(--color-brand--3)"}}>Front-end Coder</p>
              </div>
              {
                state?.info.map((item,index)=><div key={index} style={{display:"flex",fontWeight:"500"}}>
                <div style={{width:"30%",display:"flex",alignItems:"center",gap:"0.6rem"}}>
                  <NextIcon width='17' height='17' color='var(--color-brand--theme-text)'/>
                  <p style={{fontWeight:"600"}}>{item.title}</p>
                </div>
                <p>{item.drop}</p>
              </div>)
              }
              
              <div className={styles.desc} style={{marginTop:"3rem"}}>
                  I <p>studied</p> in this field for <p>4</p> months at the IBS training center and did an <p>internship</p> at Next Tech for <p>2</p> months.
              </div>

              <div className={styles.desc} style={{marginTop:"3rem"}}>
                  My <p>code</p> is <p>clear</p> and <p>understandable</p>. Sometimes, when I create <p>complex interfaces</p>, their external appearance is very <p>user-friendly</p>. I strive to <p>minimize</p> code repetition. I take into <p>consideration</p> the <p>requirements</p> and <p>suggestions</p> of the client.
              </div>
            </div>
        </div>
      </div>
      <div className={styles.page_number}>
        <Title children="02" sx={{transform:'translateY(-6rem)',fontFamily:"Allerta Stencil",fontWeight:"200",color:"var(--color-brand--8)"}}/>
      </div>
    </div>
  )
}
