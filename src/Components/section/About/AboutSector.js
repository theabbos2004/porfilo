import React, { useEffect, useRef, useState } from 'react'
import styles from "./index.module.scss"
import Title from '../../Title/Title'
import ProfilePhoto from '../../ProfilePhoto/ProfilePhoto'
import ProfileImage from '../../../img/arif-riyanto-vJP-wZ6hGBg-unsplash.jpg'
import { NextIcon } from '../../../img/icons/Icons'
import { Link, useNavigate } from 'react-router-dom'
import { NextPage } from '../../../Hooks/NextPage'
import { PreviousPage } from '../../../Hooks/PreviousPage'
import { contactActive, setResumeLanguage } from "../../../Layout/Store/StoreSlice";
import Button from '../../Button/Button'
import { useDispatch } from 'react-redux'
export default function AboutSector() {
  let [state,setState]=useState({
    info:[
      {id:1,title:"Name",drop:"Abbos"},
      {id:2,title:"Age",drop:"19"},
      {id:3,title:"City",drop:"Angren, Tashkent region"},
      {id:4,title:"Information",drop:"Renessans ta'lim university (extramural study)"},
    ]
  })
  let [resume,setResume]=useState({})
  let dispatch = useDispatch();
  let pathName=useNavigate()  
  let scroolRef=useRef()
  useEffect(()=>{
    scroolRef.current.scrollTop=1
  },[])
  NextPage(scroolRef,pathName)
  PreviousPage(scroolRef,pathName)
  return (
    <div className={styles.about_bob} ref={scroolRef}>
      <div className={styles.intro}>
        <div className={styles.image_section}>
            <ProfilePhoto src={ProfileImage} sx={{transform:"translate(-2rem,-2rem)"}}/>
        </div>
        <div className={styles.who_section}>
            <div style={{display:"flex",flexDirection:"column",gap:"3rem",fontSize:"1.8rem"}}>
              <div style={{display:"flex",fontWeight:"600",fontSize:"3rem",color:"var(--color-brand--theme-text)"}}>
                <p style={{color:"var(--color-brand--3)"}}>Front-end Developer</p>
              </div>
              <div>
                {
                  state?.info.map((item,index)=><div key={index} style={{display:"flex",fontWeight:"500",margin:"0.5rem 0"}}>
                  <div style={{width:"30%",display:"flex",alignItems:"center",gap:"0.6rem"}}>
                    <NextIcon width='17' height='17' color='var(--color-brand--theme-text)'/>
                    <p style={{fontWeight:"600"}}>{item.title}</p>
                  </div>
                  <p>{item.drop}</p>
                </div>)
                }
              </div>
              <div className={styles.desc}>
                  I <p>studied</p> in this field for <p>4</p> months at the IBS training center and did an <p>internship</p> at Next Tech for <p>2</p> months.
              </div>

              <div className={styles.desc}>
                  My <p>code</p> is <p>clear</p> and <p>understandable</p>. Sometimes, when I create <p>complex interfaces</p>, their external appearance is very <p>user-friendly</p>. I strive to <p>minimize</p> code repetition. I take into <p>consideration</p> the <p>requirements</p> and <p>suggestions</p> of the client.
              </div>
              <div>
                <div style={{display:"flex",justifyContent:"flex-end"}}>
                  <Button
                        onMouseEnter={() => setResume({active:true})}
                      >
                        Resume
                        {
                          resume.active?
                          <div style={{position:"relative"}} onMouseLeave={()=>setResume({active:false})}>
                            <Link to="/resume">
                              <Button
                                sx={{background:"var(--color-brand--6)",border:"none",fontSize:"1rem",position:"absolute",transform:"translate(1rem,2rem)"}}
                                onClick={()=>{dispatch(setResumeLanguage({id:2}))}}
                              >ENG</Button>
                            </Link>
                            <Link to="/resume">
                              <Button 
                                sx={{background:"var(--color-brand--6)",border:"none",fontSize:"1rem",position:"absolute",transform:"translate(-5rem,2rem)"}}
                                onClick={()=>{dispatch(setResumeLanguage({id:1}))}}
                              >UZ</Button>
                            </Link>
                            <Link to="/resume">
                              <Button 
                                sx={{background:"var(--color-brand--6)",border:"none",fontSize:"1rem",position:"absolute",transform:"translate(-9rem,-2.5rem)"}}
                                onClick={()=>{dispatch(setResumeLanguage({id:3}))}}
                                >RU</Button>
                            </Link>
                          </div>:""
                        }
                  </Button>
                </div>
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
