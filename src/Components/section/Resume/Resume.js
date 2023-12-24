import React, { useEffect, useRef, useState } from "react";
import styles from "./index.module.scss"
import {
  TransformWrapper,
  TransformComponent,
} from "react-zoom-pan-pinch";
import { useSelector } from "react-redux";

const Controls = ({ zoomIn, zoomOut, resetTransform }) => (
  <div className={styles.zoom_controle}>
    <button onClick={() => zoomIn()}>+</button>
    <button onClick={() => zoomOut()}>-</button>
    <button onClick={() => resetTransform()}>x</button>
  </div>
);

export default function Resume(){
  const resumeList=useSelector(store=>store.store.resumes)
  let [resume,setResume]=useState()
  useEffect(()=>{
    getResume()
  },[])

  let getResume=()=>{
    resumeList.filter(el=>el.change?setResume(el):'')
  }
  const transformComponentRef = useRef(null);
  return (
      <TransformWrapper
        ref={transformComponentRef}
        initialScale={0.45}
      >
        {(utils) => (
          <React.Fragment>
            <Controls {...utils} />
            <TransformComponent
              contentClass={styles.content}
              >
              <img src={resume?.img} alt="test" id="imgExample" />
            </TransformComponent>
          </React.Fragment>
        )}
      </TransformWrapper>
  );
};
