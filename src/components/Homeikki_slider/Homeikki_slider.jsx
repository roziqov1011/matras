import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import './Homeikki_slider.scss'
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import {matraslib} from '../../lib/lib_matras'
import { FreeMode, Pagination } from "swiper";

export default function Homeikki_slider() {
console.log(matraslib);

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
            <img src="" alt="" />
            <p>Lectus pellentesque senectus elit donec massa ipsum ultricies dui. Bibendum et enim fringilla tincidunt ligula non, condimentum nunc.</p>
          </div>
        </SwiperSlide>
         <SwiperSlide className="SwiperSlide" >
          <div className="drop">
            <h3>memoform</h3>
            <img src="" alt="" />
            <p>Lectus pellentesque senectus elit donec massa ipsum ultricies dui. Bibendum et enim fringilla tincidunt ligula non, condimentum nunc.</p>
          </div>
        </SwiperSlide>
        <SwiperSlide className="SwiperSlide" >
          <div className="drop">
            <h3>memoform</h3>
            <img src="https://relax-matress.ru/upload/iblock/a19/a198cf4ae4041eee9554db0d1b613f56.png" alt="" />
            <p>Lectus pellentesque senectus elit donec massa ipsum ultricies dui. Bibendum et enim fringilla tincidunt ligula non, condimentum nunc.</p>
          </div>
        </SwiperSlide>
        <SwiperSlide className="SwiperSlide" >
          <div className="drop">
            <h3>memoform</h3>
            <img src="https://atria-m.ru/wp-content/uploads/2019/09/matras-askona-baby-flex-spine-400x222.jpg" alt="" />
            <p>Lectus pellentesque senectus elit donec massa ipsum ultricies dui. Bibendum et enim fringilla tincidunt ligula non, condimentum nunc.</p>
          </div>
        </SwiperSlide>
        <SwiperSlide className="SwiperSlide" >
          <div className="drop">
            <h3>memoform</h3>
            <img src="https://ormatek.com/upload/resize_webp/products/ff8/7fc/ff87fc7342df11ecbbbb54bf64fc91d5/more/680_510_1/ff87fc73-42df-11ec-bbbb-54bf64fc91d5_9ecfcdd5-4b94-11ec-bbbc-54bf64fc91d5.webp" alt="" />
            <p>Lectus pellentesque senectus elit donec massa ipsum ultricies dui. Bibendum et enim fringilla tincidunt ligula non, condimentum nunc.</p>
          </div>
        </SwiperSlide>
        <SwiperSlide className="SwiperSlide" >
          <div className="drop">
            <h3>memoform</h3>
            <img src="https://dreamway.uz/media/cache/7d/0f/7d0ff726b3b13d1657f3896be865d6b5.webp" alt="" />
            <p>Lectus pellentesque senectus elit donec massa ipsum ultricies dui. Bibendum et enim fringilla tincidunt ligula non, condimentum nunc.</p>
          </div>
        </SwiperSlide> 
        
        
      </Swiper>

      {/* ikki */}
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
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSMJmSQMRiZhFQyp7ZqA4Nyua0S8AV56uwwxTOx49QweoZj6KzkxVVveA_kcoXCN46RCVs&usqp=CAU" alt="" />
            <p>Lectus pellentesque senectus elit donec massa ipsum ultricies dui. Bibendum et enim fringilla tincidunt ligula non, condimentum nunc.
            Lectus pellentesque senectus elit donec massa ipsum ultricies dui. Bibendum et enim fringilla tincidunt ligula non, condimentum nunc.
            </p>
            
          </div>
        </SwiperSlide>
        <SwiperSlide className="SwiperSlide" >
          <div className="drop">
            <h3>memoform</h3>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRW-uEqaPqJkB897h5a8-1WbQrVTl3mfO74lyg2RQrTF14S2YZx0uoHzI4QKmp-KhBECZ8&usqp=CAU" alt="" />
            <p>Lectus pellentesque senectus elit donec massa ipsum ultricies dui. Bibendum et enim fringilla tincidunt ligula non, condimentum nunc.</p>
          </div>
        </SwiperSlide>
        <SwiperSlide className="SwiperSlide" >
          <div className="drop">
            <h3>memoform</h3>
            <img src="https://relax-matress.ru/upload/iblock/a19/a198cf4ae4041eee9554db0d1b613f56.png" alt="" />
            <p>Lectus pellentesque senectus elit donec massa ipsum ultricies dui. Bibendum et enim fringilla tincidunt ligula non, condimentum nunc.</p>
          </div>
        </SwiperSlide>
        <SwiperSlide className="SwiperSlide" >
          <div className="drop">
            <h3>memoform</h3>
            <img src="https://atria-m.ru/wp-content/uploads/2019/09/matras-askona-baby-flex-spine-400x222.jpg" alt="" />
            <p>Lectus pellentesque senectus elit donec massa ipsum ultricies dui. Bibendum et enim fringilla tincidunt ligula non, condimentum nunc.</p>
          </div>
        </SwiperSlide>
        <SwiperSlide className="SwiperSlide" >
          <div className="drop">
            <h3>memoform</h3>
            <img src="https://ormatek.com/upload/resize_webp/products/ff8/7fc/ff87fc7342df11ecbbbb54bf64fc91d5/more/680_510_1/ff87fc73-42df-11ec-bbbb-54bf64fc91d5_9ecfcdd5-4b94-11ec-bbbc-54bf64fc91d5.webp" alt="" />
            <p>Lectus pellentesque senectus elit donec massa ipsum ultricies dui. Bibendum et enim fringilla tincidunt ligula non, condimentum nunc.</p>
          </div>
        </SwiperSlide>
        <SwiperSlide className="SwiperSlide" >
          <div className="drop">
            <h3>memoform</h3>
            <img src="https://dreamway.uz/media/cache/7d/0f/7d0ff726b3b13d1657f3896be865d6b5.webp" alt="" />
            <p>Lectus pellentesque senectus elit donec massa ipsum ultricies dui. Bibendum et enim fringilla tincidunt ligula non, condimentum nunc.</p>
          </div>
        </SwiperSlide>
        
        
      </Swiper>

      
 {/* uch */}
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
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSMJmSQMRiZhFQyp7ZqA4Nyua0S8AV56uwwxTOx49QweoZj6KzkxVVveA_kcoXCN46RCVs&usqp=CAU" alt="" />
            <p>Lectus pellentesque senectus elit donec massa ipsum ultricies dui. Bibendum et enim fringilla tincidunt ligula non, condimentum nunc.
            Lectus pellentesque senectus elit donec massa ipsum ultricies dui. Bibendum et enim fringilla tincidunt ligula non, condimentum nunc.
            </p>
            
          </div>
        </SwiperSlide>
        <SwiperSlide className="SwiperSlide" >
          <div className="drop">
            <h3>memoform</h3>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRW-uEqaPqJkB897h5a8-1WbQrVTl3mfO74lyg2RQrTF14S2YZx0uoHzI4QKmp-KhBECZ8&usqp=CAU" alt="" />
            <p>Lectus pellentesque senectus elit donec massa ipsum ultricies dui. Bibendum et enim fringilla tincidunt ligula non, condimentum nunc.</p>
          </div>
        </SwiperSlide>
        <SwiperSlide className="SwiperSlide" >
          <div className="drop">
            <h3>memoform</h3>
            <img src="https://relax-matress.ru/upload/iblock/a19/a198cf4ae4041eee9554db0d1b613f56.png" alt="" />
            <p>Lectus pellentesque senectus elit donec massa ipsum ultricies dui. Bibendum et enim fringilla tincidunt ligula non, condimentum nunc.</p>
          </div>
        </SwiperSlide>
        <SwiperSlide className="SwiperSlide" >
          <div className="drop">
            <h3>memoform</h3>
            <img src="https://atria-m.ru/wp-content/uploads/2019/09/matras-askona-baby-flex-spine-400x222.jpg" alt="" />
            <p>Lectus pellentesque senectus elit donec massa ipsum ultricies dui. Bibendum et enim fringilla tincidunt ligula non, condimentum nunc.</p>
          </div>
        </SwiperSlide>
        <SwiperSlide className="SwiperSlide" >
          <div className="drop">
            <h3>memoform</h3>
            <img src="https://ormatek.com/upload/resize_webp/products/ff8/7fc/ff87fc7342df11ecbbbb54bf64fc91d5/more/680_510_1/ff87fc73-42df-11ec-bbbb-54bf64fc91d5_9ecfcdd5-4b94-11ec-bbbc-54bf64fc91d5.webp" alt="" />
            <p>Lectus pellentesque senectus elit donec massa ipsum ultricies dui. Bibendum et enim fringilla tincidunt ligula non, condimentum nunc.</p>
          </div>
        </SwiperSlide>
        <SwiperSlide className="SwiperSlide" >
          <div className="drop">
            <h3>memoform</h3>
            <img src="https://dreamway.uz/media/cache/7d/0f/7d0ff726b3b13d1657f3896be865d6b5.webp" alt="" />
            <p>Lectus pellentesque senectus elit donec massa ipsum ultricies dui. Bibendum et enim fringilla tincidunt ligula non, condimentum nunc.</p>
          </div>
        </SwiperSlide>
        
        
      </Swiper>

      
      
    </>
  );
}
