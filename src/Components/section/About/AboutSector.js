import React from 'react'
import styles from "./index.module.scss"
import Title from '../../Title/Title'
import ProfilePhoto from '../../ProfilePhoto/ProfilePhoto'
import ProfileImage from '../../../img/Profile.png'
export default function AboutSector() {
  return (
    <div className={styles.about_bob}>
      <div className={styles.intro}>
        <div className={styles.image_section}>
            <ProfilePhoto src={ProfileImage} sx={{transform:"translate(-2rem,-2rem)"}}/>
        </div>
        <div className={styles.who_section}>
            <div style={{display:"flex",flexDirection:"column",gap:"1rem"}}>
              <div style={{display:"flex",fontWeight:"600"}}>
                <p style={{width:"30%"}}>My name is</p>
                <p >Abbos</p>
              </div>
              <div style={{display:"flex",fontWeight:"600"}}>
                <p style={{width:"30%"}}>I’m a</p>
                <p style={{color:"var(--color-brand--3)"}}>Front-end Coder</p>
              </div>
              <div className={styles.desc} style={{marginTop:"4rem"}}>
                  I <p>studied</p> in this field for <p>4</p> months at the IBS training center and did an <p>internship</p> at Next Tech for <p>2</p> months.My <p>code</p> is <p>clear</p> and <p>understandable</p>. Sometimes, when I create <p>complex interfaces</p>, their external appearance is very <p>user-friendly</p>. I strive to <p>minimize</p> code repetition. I take into <p>consideration</p> the <p>requirements</p> and <p>suggestions</p> of the client.
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
