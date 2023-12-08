import React, { useState } from 'react'
import styles from "./index.module.scss"
import SkillsCard from '../../SkillsCard/SkillsCard'
import { BootstrapIcons, CssIcons, FigmaIcons, GitHubIcons, GitIcons, HtmlIcons, JSIcons, ReactIcons, SASSIcons, UzFlagIcon } from '../../../img/icons/Icons'
import "/node_modules/flag-icons/css/flag-icons.min.css";
export default function SkillsSector() {
    let [state,setState]=useState({
        skills:[
            {
                id:1,
                title:"IT",
                dropTitle:["NAME","NAME"],
                drop:[
                    [{id:1,drop:"HTML",icon:<HtmlIcons width='3rem'/>},
                    {id:1.1,drop:"JAVA CRIPT",icon:<JSIcons width='3rem'/>}],
                    [{id:2,drop:"CSS",icon:<CssIcons width='3rem'/>},
                    {id:2.1,drop:"REACT",icon:<ReactIcons width='3rem'/>}],
                    [{id:3,drop:"BOOTSTRAP",icon:<BootstrapIcons width='3rem'/>},
                    {id:3.1,drop:"GIT",icon:<GitIcons width='3rem'/>}],
                    [{id:4,drop:"SASS",icon:<SASSIcons width='3rem'/>},
                    {id:4.1,drop:"GIT HUB",icon:<GitHubIcons width='3rem'/>}],
                    [{id:5,drop:"FIGMA",icon:<FigmaIcons width='3rem'/>},{}],
                ],
                img:require("../../../img/it.jpg")
            },
            {
                id:2,
                title:"LANGUAGE",
                dropTitle:["NAME","NAME"],
                drop:[
                    [{id:1,drop:"UZBEK",icon:<span class="fi fi-uz"></span>},
                    {id:6,drop:"ENGLISH",icon:<span class="fi fi-us"></span>}],
                ],
                img:require("../../../img/language.png")
            },
            {
                id:3,
                title:"SPORTS",
                dropTitle:["NAME","PLACE"],
                drop:[
                    [{id:1,drop:"TAEKWANDO WTF",icon:<img src={require('../../../img/icons/taekwondo.png')} style={{width:"3rem",height:"3rem"}}/>},
                    {id:1.1,drop:"2 x 3 , 1, 2 "}],
                    [{id:2,drop:"WRESTLING",icon:<img src={require('../../../img/icons/wrestler (1).png')} style={{width:"3rem",height:"3rem"}}/>},
                    {id:2.1,drop:"3"}],
                    [{id:3,drop:"CHESS",icon:<img src={require('../../../img/icons/queen.png')} style={{width:"3rem",height:"3rem"}}/>},
                    {id:3.1,drop:"2"}],
                ],
                img:require("../../../img/sport.png")
            },
            {
                id:4,
                title:"OTHER",
                dropTitle:["NAME","PLACE"],
                drop:[
                    [{id:1,drop:"PAINTING"},
                    {id:1.1,drop:"2"}],
                    [{id:2,drop:"INFORMATICS"},
                    {id:2.1,drop:"1"}],
                    [{id:3,drop:"MATH"},
                    {id:3.1,drop:"4"}],
                ],
                img:require("../../../img/other.png")
            },
            {
                id:5,
                title:"STUDYING",
                dropTitle:["NAME","NUMBER","YEAR","NAME"],
                drop:[
                    [{id:1,drop:"   KINDERGARDEN"},
                    {id:1.1,drop:"232"},
                    {id:1.2,drop:"2008-2016"},
                    {id:1.3,drop:"SUN"},],
                    [{id:2,drop:"SCHOOL"},
                    {id:2.1,drop:"39"},
                    {id:2.2,drop:"2008-2016"},
                    {id:2.3,drop:"secondary education"}],
                    [{id:3,drop:"UNVERSITY"},
                    {id:3.1,drop:"-"},
                    {id:3.2,drop:"2023-"},
                    {id:3.3,drop:"RENESSANS"}]
                ],
                img:require("../../../img/studying.png")
            },
            {
                id:6,
                title:"LEARNED",
                dropTitle:["NAME","TYPE","YEAR"],
                drop:[
                    [{id:1,drop:"BARAKA USTOZ"},
                    {id:1.1,drop:"ENGLISH"},
                    {id:1.2,drop:"2008-2031"}],
                    [{id:2,drop:"BARKAMOL AVLOD"},
                    {id:2.1,drop:"INFORMATIKA"},
                    {id:2.2,drop:"2008-2030"}],
                    [{id:3,drop:"ZAKOVAT DUNYOSI"},
                    {id:3.1,drop:"ENGLISH"},
                    {id:3.1,drop:"2008-2030"}],
                    [{id:4,drop:"IBS"},
                    {id:4.1,drop:"IT"},
                    {id:4.2,drop:"2008-2016"}],
                ],
                img:require("../../../img/learned.png")
            },
            {
                id:6,
                title:"I LEARNED IT MYSELF",
                dropTitle:["NAME","TYPE"],
                drop:[
                    [{id:1,drop:"MATH"},
                    {id:1.1,drop:"ELEKTROSTATIKA-KVANT FIZIKA"}],
                    [{id:2,drop:"PHYSICS"},
                    {id:2.1,drop:"ELEKTROSTATIKA-KVANT FIZIKA"}],
                    [{id:3,drop:"IT"},
                    {id:3.1,drop:"HTML CSS JS"}],
                ],
                img:require("../../../img/brain.png")
            },
        ]
        // SHAHODATNOMA
    })
  return (
    <div className={styles.skills_bob}>
        <div className={styles.skills_section}>
            {
                state.skills?.map((item,index)=><SkillsCard key={item.id} data={item} index={index}/>)
            }
        </div>
    </div>
  )
}
