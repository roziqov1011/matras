import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";

export default function Category_slid() {
  return (
    <>
      <Swiper
        slidesPerView={4}
        spaceBetween={30}
        centeredSlides={true}
      
        modules={[Pagination]}
        className="SWIPPER"
      >
        <SwiperSlide className="swiper-slide1" style={{color: "#01384D"}}><li className="link">Barchasi</li></SwiperSlide>
        <SwiperSlide className="swiper-slide1" style={{color: "#01384D", opacity: '0.6'}}><li className="link">Model A+</li></SwiperSlide>
        <SwiperSlide className="swiper-slide1" style={{color: "#01384D", opacity: '0.6'}}><li className="link">Model B+</li></SwiperSlide>
        <SwiperSlide className="swiper-slide1" style={{color: "#01384D", opacity: '0.6'}}><li className="link">Model C+</li></SwiperSlide>
        <SwiperSlide className="swiper-slide1" style={{color: "#01384D", opacity: '0.6'}}><li className="link">Model D</li></SwiperSlide>
        <SwiperSlide className="swiper-slide1" style={{color: "#01384D", opacity: '0.6'}}><li className="link">Model Yevro</li></SwiperSlide>
        <SwiperSlide className="swiper-slide1" style={{color: "#01384D", opacity: '0.6'}}><li className="link">Yangi tovarlar</li></SwiperSlide>
        <SwiperSlide className="swiper-slide1" style={{color: "#01384D", opacity: '0.6'}}><li className="link">Model A</li></SwiperSlide>
      </Swiper>
    </>
  );
}
