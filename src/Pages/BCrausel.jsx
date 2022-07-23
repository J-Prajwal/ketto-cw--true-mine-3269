// import React from 'react'


import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./bcrausel.css";

// import required modules
import { Pagination, Navigation } from "swiper";

const BCrausel = () => {
  return (
          
    <div style={{marginTop: "3rem"}}>
   
    <Swiper
      slidesPerView={3}
      spaceBetween={30}
      slidesPerGroup={3}
      loop={true}
      loopFillGroupWithBlank={true}
      pagination={{
        clickable: true,
      }}
      navigation={true}
      modules={[Pagination, Navigation]}
      className="mySwiper"
    >
      <SwiperSlide><img src="https://i.postimg.cc/hGGM4MV7/1.png"/></SwiperSlide>
      <SwiperSlide><img src="https://i.postimg.cc/85pGz2tm/2.png"/></SwiperSlide>
      <SwiperSlide><img src="https://i.postimg.cc/3rbh3bp2/3.png"/></SwiperSlide>
      <SwiperSlide><img src="https://i.postimg.cc/wj8SvKBR/4.png"/></SwiperSlide>
      <SwiperSlide><img src="https://i.postimg.cc/tJGMgWqQ/5.png"/></SwiperSlide>
      <SwiperSlide><img src="https://i.postimg.cc/hGGM4MV7/1.png"/></SwiperSlide>
      <SwiperSlide><img src="https://i.postimg.cc/85pGz2tm/2.png"/></SwiperSlide>
      <SwiperSlide><img src="https://i.postimg.cc/3rbh3bp2/3.png"/></SwiperSlide>
      <SwiperSlide><img src="https://i.postimg.cc/wj8SvKBR/4.png"/></SwiperSlide>
     
    </Swiper>
  </div>
 
  )
}

export default BCrausel
