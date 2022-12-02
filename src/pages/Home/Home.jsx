import React from 'react'
import './Home.scss'
import logo from '../../img/img__home/logo.svg'
import Card from '../../components/Card/Card'



import Slider from '../../components/Slider/Slider'
import HomeIkki from '../HomeIkki/HomeIkki'


function Home() {
  return (
    <div className="home">
      <div className="headerr">
        <div className="container">
          <div className="header__item">
              <nav className='nav-list'>
                <a href="#">Katalog</a>
                <a href="#">Aksiya</a>
                <a href="#">Biz haqimizda</a>
                <a href="#">Manzilimiz</a>
                <a href="#">Aloqa</a>  
              </nav>
                <div className="logo-btn">
                  <img src={logo} alt="" />
                    <div className="btn-ra">
                        <p> <i class="bi bi-telephone-fill"></i> +998 90 123 45 67</p>
                        <button>Buyurtma berish</button>
                    </div>
                </div>
                <div className="header_M">
                    <p className='header_M-title'>Kechalari sokin dam oling</p>
                    <div className="slider_bots">
                      <Slider/>
                    </div>
                    <button className='M-button'>Kategoriyalar <i class="bi bi-arrow-right"></i></button>
                    <div className="line"></div>
                </div>
          </div>
        </div>
      </div>
    <HomeIkki/>
    </div> 
  )
}

export default Home