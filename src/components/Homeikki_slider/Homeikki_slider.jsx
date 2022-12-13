import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import './Homeikki_slider.scss'

import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";


import { FreeMode, Pagination } from "swiper";

export default function Homeikki_slider() {
  return (
    <>
      <Swiper
        slidesPerView={3}
        spaceBetween={30}
        
        freeMode={true}
        pagination={{
          clickable: true,
        }}
        modules={[FreeMode, Pagination]}
        className="mySwiper" id="bir"
      >
        <SwiperSlide className="SwiperSlide" >
          <div className="drop">
            <h3>memoform</h3>
            <img src="https://www.imgacademy.com/sites/default/files/legacyhotel.jpg" alt="" />
            <p>Lectus pellentesque senectus elit donec massa ipsum ultricies dui. Bibendum et enim fringilla tincidunt ligula non, condimentum nunc.
            Lectus pellentesque senectus elit donec massa ipsum ultricies dui. Bibendum et enim fringilla tincidunt ligula non, condimentum nunc.
            </p>
            
          </div>
        </SwiperSlide>
        <SwiperSlide className="SwiperSlide" >
          <div className="drop">
            <h3>memoform</h3>
            <img src="https://www.imgacademy.com/sites/default/files/legacyhotel.jpg" alt="" />
            <p>Lectus pellentesque senectus elit donec massa ipsum ultricies dui. Bibendum et enim fringilla tincidunt ligula non, condimentum nunc.</p>
          </div>
        </SwiperSlide>
        <SwiperSlide className="SwiperSlide" >
          <div className="drop">
            <h3>memoform</h3>
            <img src="https://www.imgacademy.com/sites/default/files/legacyhotel.jpg" alt="" />
            <p>Lectus pellentesque senectus elit donec massa ipsum ultricies dui. Bibendum et enim fringilla tincidunt ligula non, condimentum nunc.</p>
          </div>
        </SwiperSlide>
        <SwiperSlide className="SwiperSlide" >
          <div className="drop">
            <h3>memoform</h3>
            <img src="https://www.imgacademy.com/sites/default/files/legacyhotel.jpg" alt="" />
            <p>Lectus pellentesque senectus elit donec massa ipsum ultricies dui. Bibendum et enim fringilla tincidunt ligula non, condimentum nunc.</p>
          </div>
        </SwiperSlide>
        <SwiperSlide className="SwiperSlide" >
          <div className="drop">
            <h3>memoform</h3>
            <img src="https://www.imgacademy.com/sites/default/files/legacyhotel.jpg" alt="" />
            <p>Lectus pellentesque senectus elit donec massa ipsum ultricies dui. Bibendum et enim fringilla tincidunt ligula non, condimentum nunc.</p>
          </div>
        </SwiperSlide>
        <SwiperSlide className="SwiperSlide" >
          <div className="drop">
            <h3>memoform</h3>
            <img src="https://www.imgacademy.com/sites/default/files/legacyhotel.jpg" alt="" />
            <p>Lectus pellentesque senectus elit donec massa ipsum ultricies dui. Bibendum et enim fringilla tincidunt ligula non, condimentum nunc.</p>
          </div>
        </SwiperSlide>
        
        
      </Swiper>

      <Swiper
        slidesPerView={2}
        spaceBetween={30}
        
        freeMode={true}
        pagination={{
          clickable: true,
        }}
        modules={[FreeMode, Pagination]}
        className="mySwiper" id="ikki"
      >
        <SwiperSlide className="SwiperSlide" >
          <div className="drop">
            <h3>memoform</h3>
            <img src="https://www.imgacademy.com/sites/default/files/legacyhotel.jpg" alt="" />
            <p>Lectus pellentesque senectus elit donec massa ipsum ultricies dui. Bibendum et enim fringilla tincidunt ligula non, condimentum nunc.
            Lectus pellentesque senectus elit donec massa ipsum ultricies dui. Bibendum et enim fringilla tincidunt ligula non, condimentum nunc.
            </p>
            
          </div>
        </SwiperSlide>
        <SwiperSlide className="SwiperSlide" >
          <div className="drop">
            <h3>memoform</h3>
            <img src="https://www.imgacademy.com/sites/default/files/legacyhotel.jpg" alt="" />
            <p>Lectus pellentesque senectus elit donec massa ipsum ultricies dui. Bibendum et enim fringilla tincidunt ligula non, condimentum nunc.</p>
          </div>
        </SwiperSlide>
        <SwiperSlide className="SwiperSlide" >
          <div className="drop">
            <h3>memoform</h3>
            <img src="https://www.imgacademy.com/sites/default/files/legacyhotel.jpg" alt="" />
            <p>Lectus pellentesque senectus elit donec massa ipsum ultricies dui. Bibendum et enim fringilla tincidunt ligula non, condimentum nunc.</p>
          </div>
        </SwiperSlide>
        <SwiperSlide className="SwiperSlide" >
          <div className="drop">
            <h3>memoform</h3>
            <img src="https://www.imgacademy.com/sites/default/files/legacyhotel.jpg" alt="" />
            <p>Lectus pellentesque senectus elit donec massa ipsum ultricies dui. Bibendum et enim fringilla tincidunt ligula non, condimentum nunc.</p>
          </div>
        </SwiperSlide>
        <SwiperSlide className="SwiperSlide" >
          <div className="drop">
            <h3>memoform</h3>
            <img src="https://www.imgacademy.com/sites/default/files/legacyhotel.jpg" alt="" />
            <p>Lectus pellentesque senectus elit donec massa ipsum ultricies dui. Bibendum et enim fringilla tincidunt ligula non, condimentum nunc.</p>
          </div>
        </SwiperSlide>
        <SwiperSlide className="SwiperSlide" >
          <div className="drop">
            <h3>memoform</h3>
            <img src="https://www.imgacademy.com/sites/default/files/legacyhotel.jpg" alt="" />
            <p>Lectus pellentesque senectus elit donec massa ipsum ultricies dui. Bibendum et enim fringilla tincidunt ligula non, condimentum nunc.</p>
          </div>
        </SwiperSlide>
        
        
      </Swiper>


      
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        
        freeMode={true}
        pagination={{
          clickable: true,
        }}
        modules={[FreeMode, Pagination]}
        className="mySwiper" id="uch"
      >
        <SwiperSlide className="SwiperSlide" >
          <div className="drop">
            <h3>memoform</h3>
            <img src="https://www.imgacademy.com/sites/default/files/legacyhotel.jpg" alt="" />
            <p>Lectus pellentesque senectus elit donec massa ipsum ultricies dui. Bibendum et enim fringilla tincidunt ligula non, condimentum nunc.
            Lectus pellentesque senectus elit donec massa ipsum ultricies dui. Bibendum et enim fringilla tincidunt ligula non, condimentum nunc.
            </p>
            
          </div>
        </SwiperSlide>
        <SwiperSlide className="SwiperSlide" >
          <div className="drop">
            <h3>memoform</h3>
            <img src="https://www.imgacademy.com/sites/default/files/legacyhotel.jpg" alt="" />
            <p>Lectus pellentesque senectus elit donec massa ipsum ultricies dui. Bibendum et enim fringilla tincidunt ligula non, condimentum nunc.</p>
          </div>
        </SwiperSlide>
        <SwiperSlide className="SwiperSlide" >
          <div className="drop">
            <h3>memoform</h3>
            <img src="https://www.imgacademy.com/sites/default/files/legacyhotel.jpg" alt="" />
            <p>Lectus pellentesque senectus elit donec massa ipsum ultricies dui. Bibendum et enim fringilla tincidunt ligula non, condimentum nunc.</p>
          </div>
        </SwiperSlide>
        <SwiperSlide className="SwiperSlide" >
          <div className="drop">
            <h3>memoform</h3>
            <img src="https://www.imgacademy.com/sites/default/files/legacyhotel.jpg" alt="" />
            <p>Lectus pellentesque senectus elit donec massa ipsum ultricies dui. Bibendum et enim fringilla tincidunt ligula non, condimentum nunc.</p>
          </div>
        </SwiperSlide>
        <SwiperSlide className="SwiperSlide" >
          <div className="drop">
            <h3>memoform</h3>
            <img src="https://www.imgacademy.com/sites/default/files/legacyhotel.jpg" alt="" />
            <p>Lectus pellentesque senectus elit donec massa ipsum ultricies dui. Bibendum et enim fringilla tincidunt ligula non, condimentum nunc.</p>
          </div>
        </SwiperSlide>
        <SwiperSlide className="SwiperSlide" >
          <div className="drop">
            <h3>memoform</h3>
            <img src="https://www.imgacademy.com/sites/default/files/legacyhotel.jpg" alt="" />
            <p>Lectus pellentesque senectus elit donec massa ipsum ultricies dui. Bibendum et enim fringilla tincidunt ligula non, condimentum nunc.</p>
          </div>
        </SwiperSlide>
        
        
      </Swiper>
    </>
  );
}
