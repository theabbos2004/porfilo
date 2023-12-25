import React, { useEffect, useRef, useState } from "react";
import styles from "./index.module.scss";
import Title from "../../Title/Title";
import Button from "../../Button/Button";
import { TypeAnimation } from "react-type-animation";
import { useDispatch } from "react-redux";
import { nextPage, prevPage } from "../../../Layout/Store/StoreSlice";
import { contactActive, setResumeLanguage } from "../../../Layout/Store/StoreSlice";
import {Link, useNavigate,} from "react-router-dom";

const ExampleComponent = () => {
  return (
    <TypeAnimation
      sequence={["IDES", 3000, "BUSINESS", 3000]}
      wrapper="span"
      speed={5}
      style={{
        fontSize: "3rem",
        display: "inline-block",
        color: "var(--color-brand--theme-text)",
      }}
      repeat={Infinity}
    />
  );
};

export default function MainSector() {
  let [resume,setResume]=useState({})

  let dispatch = useDispatch();
  let pathName = useNavigate();
  let scrollRef = useRef();

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
    <div className={styles.main_bob} ref={scrollRef}>
        <div className={styles.intro}>
            <div>
                <div className={styles.who_cover}>
                  <Title children="Hi I'm" />
                  <Title children="Abbos S.A" />
                </div>
                <div className={styles.offer}>
                    contact me to develop your<p></p> <ExampleComponent/> further
                </div>
                <div className={styles.button_sector}>
                  <Button
                    onClick={() => dispatch(contactActive({ payload: true }))}
                  >
                    Contact me
                  </Button>
                  <Button
                    onMouseEnter={() => setResume({active:true})}
                  >
                    Resume
                    {
                      resume.active?
                      <div style={{position:"relative"}} onMouseLeave={()=>setResume({active:false})}>
                        <Link to="/resume">
                          <Button
                            sx={{background:"var(--color-brand--6)",border:"none",fontSize:"1rem",position:"absolute",transform:"translate(-5rem,2rem)"}}
                            onClick={()=>{dispatch(setResumeLanguage({id:2}))}}
                          >ENG</Button>
                        </Link>
                        <Link to="/resume">
                          <Button 
                            sx={{background:"var(--color-brand--6)",border:"none",fontSize:"1rem",position:"absolute",transform:"translate(1.5rem,2rem)"}}
                            onClick={()=>{dispatch(setResumeLanguage({id:1}))}}
                          >UZ</Button>
                        </Link>
                        <Link to="/resume">
                          <Button 
                            sx={{background:"var(--color-brand--6)",border:"none",fontSize:"1rem",position:"absolute",transform:"translate(6rem,-2.5rem)"}}
                            onClick={()=>{dispatch(setResumeLanguage({id:3}))}}
                            >RU</Button>
                        </Link>
                      </div>:""
                    }
                  </Button>
                </div>
            </div>
        </div>
      <div className={styles.page_number}>
        <Title
          children="01"
          sx={{
            transform: "translateY(-6rem)",
            fontFamily: "Allerta Stencil",
            fontWeight: "200",
            color: "var(--color-brand--8)",
          }}
        />
      </div>
    </div>
  );
}
