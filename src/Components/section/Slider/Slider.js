import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, EffectCoverflow } from "swiper/modules";

import styles from "./index.module.scss"
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "./style.css"
import * as icon from "../../../img/icons/Icons"

export default function Slider({ 
  data = [],
  width="100%",
  height="90%"
}) {  
  const getIcon = ({
    params = "",
    width = 20,
    height = 20,
    color = "var(--color-brand--1)",
    opacity = 1,
  }) => {
    let Icon = icon[params.title];
    return <Icon key={params?.key} width={width - 2} height={height - 2} color={color} opacity={opacity}/>;
  };
  return (
    <div className={`container ${styles.swiper}`} style={{width,height,display:'flex',alignItems:"center",justifyContent:'center'}}>
      <Swiper
        modules={[Navigation, Pagination, EffectCoverflow]}
        effect={"coverflow"}
        grabCursor={true}
        direction={window.innerWidth < 576 ? "vertical" : "horizontal"}
        spaceBetween={20}
        centeredSlides={true}
        loop={true}
        slidesPerView={"auto"}
        coverflowEffect={{
          rotate:0,
          stretch:0,
          depth:100,
          modifier:2.5
        }}
        navigation
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
      >
      {
        data.map((item,index)=><SwiperSlide key={index}>
          <a href={item?.link} target="-blank">
            <img src={item?.imgUrl} style={{width:"100%",height:"100%",objectFit:"cover"}}/>
          </a>
          <div className={styles.portfilo_footer}>
            <a href={item?.gitHubLink} className={styles.portfilo_code}>
              <div>Click to view the code</div>
              <icon.GitHubIcons width={window.innerWidth>576?"20":"10"} opacity="1" color="var(--color-brand--1)"/>
            </a>
            <div className={styles.portfilo_use}>
              <div>Build with</div>
              <div className={styles.icons}>
                {
                  item?.use?.map((icon,iconIndex)=>getIcon({params:{title:icon,key:iconIndex},width:window.innerWidth>576?"20":"10"}))
                }
              </div>
            </div>
          </div>
        </SwiperSlide>)
      }
      </Swiper>
    </div>
  );
}
