import React, { useEffect, useRef, useState } from 'react'
import styles from "./index.module.scss"
import "./index.css"
export default function Slider({
    showNumb=5,
    startShow=1
}) {
    let [state,setState]=useState({
        data:[
            {
                id:1,
                imgUrl:require("../../img/digitalAgensyPortfilo.png"),
                color:"red",
                className:`slider_item_1`
            },
            {
                id:2,
                imgUrl:require("../../img/foodShoopPortfio.png"),
                color:"green",
                className:`slider_item_2`
            },
            {
                id:3,
                imgUrl:require("../../img/digitalAgensyPortfilo.png"),
                color:"blue",
                className:`slider_item_3`
            },
            {
                id:4,
                imgUrl:require("../../img/foodShoopPortfio.png"),
                color:"yellow",
                className:`slider_item_4`
            },
            {
                id:5,
                imgUrl:require("../../img/digitalAgensyPortfilo.png"),
                color:"pink",
                className:`slider_item_5`
            }
        ],
        istrue:false,
        selectItem:0,
    })

    const itemsRef=useRef()
    function setItemSlider(index){
        const children = state?.data
        let secondArry=[]
        let zero=2
        for(let i=1;i<=Math.floor(Number(children.length)/2);i++){
            if(!children[index+i+1]){
                console.log(zero);
                secondArry.push({...children[zero],className:`slider_item_${zero+1}`})
                zero++
            }
            else{
                secondArry.push({...children[index+i],className:`slider_item_${zero}`})
                zero++
                if(!children[index+i+1]){
                    zero=0
                }
            }
        }
        console.log(secondArry);
    }
    console.log(state?.data);
  return (
    <div className={styles.slider_container}>
        <ul className={styles.slider_items}>
            {
                state?.data?.map((item,index)=>
                <li 
                className={item?.className}
                key={index}
                style={{backgroundColor:item?.color}}
                onClick={()=>setItemSlider(index)}>
                    {/* <img src={item.imgUrl}/> */}
                </li>)
            }
        </ul>
        <div className={styles.slider_navigetion}>
            <button className={styles.slider_nav+" "+styles.prev}></button>
            <button 
                className={styles.slider_nav+" "+styles.next}
                onClick={()=>{
                    // let {selectItem}=state
                    // setState({...state,selectItem:selectItem + 1})
                    // setItemSlider(state.selectItem + 1)
                }}
            ></button>
        </div>
        {/* <input type='radio' name="slider" id="s1" checked/>
        <input type='radio' name="slider" id="s2"/>
        <input type='radio' name="slider" id="s3"/>
        <input type='radio' name="slider" id="s4"/>
        <input type='radio' name="slider" id="s5"/>
        <input type='radio' name="slider" id="s6"/> */}
    </div>
  )
}
