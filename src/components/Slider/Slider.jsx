import React from "react";
import './slideer.css'

import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCreative } from "swiper";

import matras from '../../img/img__home/matras.png'

function Slider() {
  return (
    <div className="Sliderr">
      <Swiper
        grabCursor={true}
        effect={"creative"}
        creativeEffect={{
          prev: {
            shadow: true,
            translate: ["-20%", 0, -1],
          },
          next: {
            translate: ["100%", 0, 0],
          },
        }}
        modules={[EffectCreative]}
        className="mySwiper3"
      >
        <SwiperSlide className="swiper-slide0"><img className="img" src={matras} alt="" /></SwiperSlide>
        <SwiperSlide className="swiper-slide0"><img className="img" src={matras} alt="" /></SwiperSlide>
        <SwiperSlide className="swiper-slide0"><img className="img" src={matras} alt="" /></SwiperSlide>
        <SwiperSlide className="swiper-slide0"><img className="img" src={matras} alt="" /></SwiperSlide>
        <SwiperSlide className="swiper-slide0"><img className="img" src={matras} alt="" /></SwiperSlide>
        <SwiperSlide className="swiper-slide0"><img className="img" src={matras} alt="" /></SwiperSlide>
        <SwiperSlide className="swiper-slide0"><img className="img" src={matras} alt="" /></SwiperSlide>
        <SwiperSlide className="swiper-slide0"><img className="img" src={matras} alt="" /></SwiperSlide>
        <SwiperSlide className="swiper-slide0"><img className="img" src={matras} alt="" /></SwiperSlide>
      </Swiper>
    </div>
  )
}

export default Slider