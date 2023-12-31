import React, { useEffect, useRef, useState } from 'react'
import styles from "./index.module.scss"
import SkillsCard from '../../SkillsCard/SkillsCard'
import { BootstrapIcons, CssIcons, FigmaIcons, GitIcons, HtmlIcons, JSIcons, MaterialUiIcon, ReactIcons, ReduxIcon, RouterIcon, SASSIcons, VSCodeIcon } from '../../../img/icons/Icons'
import { ReactComponent  as PostmanIcon } from "../../../img/icons/postman.svg"
import "/node_modules/flag-icons/css/flag-icons.min.css";
import { useNavigate } from 'react-router-dom';
import { nextPage, prevPage } from '../../../Layout/Store/StoreSlice'
import { useDispatch } from 'react-redux'
export default function SkillsSector() {
    let [state,setState]=useState({
        skills:[
            {
                id:1,
                title:"TECHNICAL SKILLS",
                drop:[
                    [{id:1,drop:"HTML",icon:<HtmlIcons width='2.5rem'/>},
                    {id:1.1,drop:"JAVA SCRIPT",icon:<JSIcons width='2.5rem'/>}],
                    [{id:2,drop:"CSS",icon:<CssIcons width='2.5rem'/>},
                    {id:2.1,drop:"REACT",icon:<ReactIcons width='2.5rem'/>}]
                ],
                img:require("../../../img/it.jpg")
            },
            {
                id:2,
                title:"OTHER SKILLS",
                drop:[
                    [{id:1,drop:"SASS",icon:<SASSIcons width='2.5rem'/>},
                    {id:1.1,drop:"ROUTER",icon:<RouterIcon width='2.5rem'/>}],
                    [{id:2,drop:"BOOTSTRAP",icon:<BootstrapIcons width='2.5rem'/>},
                    {id:2.1,drop:"REDUX",icon:<ReduxIcon width='2.5rem'/>}],
                    [{id:3,drop:"MATERIAL UI",icon:<MaterialUiIcon width='2.5rem'/>},{}]
                ],
                img:require("../../../img/brain.png")
            },
            {
                id:3,
                title:"TOOLS",
                drop:[
                    [{id:1,drop:"VS CODE",icon:<VSCodeIcon width='2.5rem'/>},
                    {id:1.1,drop:"GIT",icon:<GitIcons width='2.5rem'/>}],
                    [{id:2,drop:"GIT HUB",icon:<SASSIcons width='2.5rem'/>},
                    {id:2.1,drop:"POSTMAN",icon:<PostmanIcon width='2.5rem' height="2.5rem"/>}],
                    [{id:3,drop:"FIGMA",icon:<FigmaIcons width='2.5rem'/>},{}],
                ],
                img:require("../../../img/—Pngtree—gradient isometric laptop mockup vector_5361953.png")
            }
        ]
    })
    let pathName=useNavigate()
    let scrollRef=useRef()
    let dispatch=useDispatch()
    useEffect(()=>{
        scrollRef.current.scrollTop=4
      },[])
    
      useEffect(() => {
        const handleScroll = () => {
          let {scrollHeight,scrollTop,clientHeight}=scrollRef?.current
          if((scrollHeight-clientHeight)==scrollTop){
            dispatch(nextPage({pathName}))
          }
          if(scrollTop==0){
            dispatch(prevPage({pathName}))
          }
        };
    
        scrollRef?.current?.addEventListener('scroll', handleScroll);
    
        return () => {
          scrollRef?.current?.removeEventListener('scroll', handleScroll);
        };
      }, [scrollRef?.current?.scrollTop]);
  return (
    <div className={styles.skills_bob}>
        <div className={styles.skills_section} ref={scrollRef}>
            {
                state.skills?.map((item,index)=><SkillsCard key={index} data={item} index={index}/>)
            }
        </div>
    </div>
  )
}
