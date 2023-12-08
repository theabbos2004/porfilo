import React, { useEffect, useState } from 'react'
import styles from "./index.module.scss"
import { NextIcon } from '../../img/icons/Icons'
export default function Carusel({
    data=[],
    width="100%",
    height="40rem",
    disx={width:"80%",height:"100%",position:"absolute",borderRadius:"10px"},
    isx={},
    showNumb=5,
}) {
    let [state,setState]=useState({
        startShow:8,
        startItemPosition:50
    })
    useEffect(()=>{
        showFunc()
    },[state?.startShow])

    const showFunc =()=>{
        let firstData=[],
            secondData=[],
            secondData1=[],
            secondData2=[],
            zero=0,
            secondzero=0
        for(let i=1;i<=(showNumb-1)/2;i++){
            if(data[state?.startShow-i-1]){
                firstData.unshift(data[state?.startShow-i-1])
            }
            else{
                console.log();
                firstData.unshift(data[data.length-1-zero])
                zero++
            }
        }
        for(let i=0;i<(showNumb+1)/2;i++){
            if(data[state?.startShow-1+i]){
                secondData1.push({...data[state?.startShow-1+i]})
            }
            else{
                secondData2.push(data[secondzero])
                secondzero++
            }
        }
        secondData.push(...secondData1,...secondData2)
        let newdata=firstData.concat(secondData)
        setState({...state,data:newdata})
    }
    console.log(state.data);
  return (
    <div className={styles.carusel} style={{width:width,height:height,display:"flex"}}>
        <div className={styles.move_btn}
         style={{left:"10%",transform:"rotate(180deg)"}}
         onClick={()=>{
            state.startShow==8?setState({...state,startShow:1}):setState({...state,startShow:state.startShow+1})
            }}>
            <btn className={styles.btn_box}>
                <NextIcon width='15' height='15' color='var(--color-brand--3)'/>
            </btn>
        </div>
        {
            state?.data?.map((item,index)=><div 
            key={index} 
            className={`${styles.carusel_box}`}
            style={{...disx,...isx,
                top: "50%",
                background:item.imgUrl1,
                // backgroundImage:`url(${item.imgUrl})`,
                // backgroundPosition:"center",
                // backgroundSize:"cover",
                
                filter:Math.floor(showNumb/2)-3>=index?"brightness(70%)":
                Math.floor(showNumb/2)-2==index?"brightness(80%)":
                Math.floor(showNumb/2)-1==index?"brightness(90%)":
                Math.floor(showNumb/2)==index?"brightness(100%)":
                Math.floor(showNumb/2)+1==index?"brightness(90%)":
                Math.floor(showNumb/2)+2==index?"brightness(80%)":
                Math.floor(showNumb/2)+3<=index?"brightness(70%)":"",
            
                zIndex:Math.floor(showNumb/2)-3>=index?"0":
                Math.floor(showNumb/2)-2==index?"1":
                Math.floor(showNumb/2)-1==index?"2":
                Math.floor(showNumb/2)==index?"3":
                Math.floor(showNumb/2)+1==index?"2":
                Math.floor(showNumb/2)+2==index?"1":
                Math.floor(showNumb/2)+3<=index?"0":"",
                
                transform:Math.floor(showNumb/2)-3>=index?"translate(0%,-50%)":
                Math.floor(showNumb/2)-2==index?`translate(-${state.startItemPosition/10}%,-50%)`:
                Math.floor(showNumb/2)-1==index?`translate(-${state.startItemPosition/2.5}%,-50%)`:
                Math.floor(showNumb/2)==index?`translate(-50%,-50%)`:
                Math.floor(showNumb/2)+1==index?`translate(${state.startItemPosition/2.5}%,-50%)`:
                Math.floor(showNumb/2)+2==index?`translate(${state.startItemPosition/10}%,-50%)`:
                Math.floor(showNumb/2)+3<=index?"translate(0%,-50%)":"",

                left:Math.floor(showNumb/2)-3>=index?"0%":
                Math.floor(showNumb/2)-2==index?"5%":
                Math.floor(showNumb/2)-1==index?"20%":
                Math.floor(showNumb/2)==index?"50%":"",

                right:Math.floor(showNumb/2)+3<=index?"0%":
                Math.floor(showNumb/2)+2==index?"5%":
                Math.floor(showNumb/2)+1==index?"20%":"",

                height:Math.floor(showNumb/2)-3>=index?"70%":
                Math.floor(showNumb/2)-2==index?"80%":
                Math.floor(showNumb/2)-1==index?"90%":
                Math.floor(showNumb/2)==index?"100%":
                Math.floor(showNumb/2)+1==index?"90%":
                Math.floor(showNumb/2)+2==index?"80%":
                Math.floor(showNumb/2)+3<=index?"70%":"",

                transition:"all 1s ease",
                animation:"",
            }}
            >
            </div>)
        }
            <div className={styles.move_btn} 
            onClick={()=>{
                state.startShow==1?setState({...state,startShow:8}):setState({...state,startShow:state.startShow-1})
                }}>
                <btn className={styles.btn_box}>
                    <NextIcon width='15' height='15' color='var(--color-brand--3)'/> 
                </btn>
            </div>
    </div>
  )
}
