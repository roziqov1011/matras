import React, { useRef, useState } from "react";
import './Slider__category.scss'
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/scrollbar";


import { Scrollbar } from "swiper";

export default function Slider__category() {
  return (
    <>
      <Swiper
        slidesPerView={3}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        scrollbar={{
          hide: true,
        }}
        modules={[Scrollbar]}
        className="mySwiper ct__sliders"
      >
        <SwiperSlide>Barchasi</SwiperSlide>
        <SwiperSlide>Model A+</SwiperSlide>
        <SwiperSlide>Model B+</SwiperSlide>
        <SwiperSlide>Model C</SwiperSlide>
        <SwiperSlide>Model C+</SwiperSlide>
        <SwiperSlide>Model D</SwiperSlide>
        <SwiperSlide>Model Yevro</SwiperSlide>
        <SwiperSlide>Yangi tovarlar</SwiperSlide>
        <SwiperSlide>Model A</SwiperSlide>
      </Swiper>
    </>
  );
}
