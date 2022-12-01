import React from 'react'
import "swiper/css/bundle";
import 'antd/dist/reset.css';
import './Home.scss'
import logo from '../../img/img__home/logo.svg'
import Card from '../../components/Card/Card'
import Menu from '../../components/Menu/Menu'


import { data } from '../../lib/data';
import HomeFuter from '../Home_futer/Home_futer';





function Home() {

  return (
    <div className="home">
        <div className='header'>
      <div className="container">
        <div className="header_nav">
            <img src={logo} alt="" />
            <div className='menu'>
                <Menu/>
              </div>
            <div className="nav">
                <ul className='nav__list'>
                  <li className='list__item'>Katalog</li>
                  <li className='list__item'>Aksiya</li>
                  <li className='list__item'>Biz haqimizda</li>
                  <li className='list__item'>Manzilimiz</li>
                  <li className='list__item'>Aloqa</li>
                </ul>
                <div className="aloqa">
                  <i className="bi bi-telephone-fill"></i>  
                  <p>+998 90 123 45 67</p>
                  <button>Buyurtma berish</button>
                </div>
            </div>
          </div>
          <div className="header__about">
            <p>Kechalari sokin dam oling</p>
            <div className='Slider'>
            </div>
            <button>Kategoriyalar <i className="bi bi-arrow-right"></i></button>
            <div className='intro'></div>
            
          </div>
      </div>
      </div>

      <div className="statick">
        <div className="container">
          <div className="statick__item">
            <div className='st-item'>
              <div className="statick-list list1">
                <p>7</p>
                <span>yillik tajriba</span>
              </div>
              <div className="statick-list list2">
                <p>10k+</p>
                <span>mamnun mijozlar</span>
              </div>
            </div>
             <div className='st-item'>
                <div className="statick-list list3">
                  <p>10</p>
                  <span>yillik kafolat</span>
                </div>
                <div className="statick-list list4">
                  <p>3</p>
                  <span>kunda yetkazish</span>
                </div>
             </div>
          </div>
            
          
        </div>
      </div>
      


      <div className="category">
        <div className="container">
          <div className="category__item">
              <p>Bizning mahsulotlar</p>
                <ul className='list'>
                   <li className='B'>Barchasi</li>
                   <li className='act'>Model A+</li>
                   <li>Model B+</li>
                   <li>Model C</li>
                   <li>Model C+</li>
                   <li>Model D</li>
                   <li>Model Yevro</li>
                   <li>Yangi tovarlar</li>
                   <li>Model A</li>
                </ul>
                <div className='line1'></div>

          </div>
        </div>
      </div>
      <div className='C_slider'>
        <div className='line1'></div>

      </div>

      <div className="mahsulot__matras">
        {
          data && data.map((e,i)=>(
            <Card key={i} item={e}/>
          ))
        }
              
              
              <p className='title-matras'>Aksiyadagi mahsulotlar</p>
              
      </div>

      
    <HomeFuter />
    </div> 
  )
}

export default Home