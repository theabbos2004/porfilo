import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, EffectCoverflow } from "swiper/modules";

import styles from "./index.module.scss"
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "./style.css"

export default function Slider({ 
  data = [],
  width="100%",
  height="90%"
}) {  
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
        data.map((item)=><SwiperSlide>
          <a href={item?.link} target="-blank">
            <img src={item.imgUrl} style={{width:"100%",height:"100%",objectFit:"cover"}}/>
          </a>
        </SwiperSlide>)
      }
      </Swiper>
    </div>
  );
}
