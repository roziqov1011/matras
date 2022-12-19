import React from 'react'
import './Home.scss'
import logo from '../../img/img__home/logo.svg'
import Slider from '../../components/Slider/Slider'
import Statistica from '../../components/Static/Statistica'
import { dataFoiz } from '../../lib/Data_foiz'
import HomeIkki from '../HomeIkki/HomeIkki'
import Category_slid from '../../components/Category_slid/Category_slid'
import Card from '../../components/Card/Card'
import { maxsulot } from '../../lib/maxsulot'
import Buyurtma from '../../components/buyurtma/Buyurtma'
import Menu from '../../components/Menu/Menu'
import Slider__category from '../../components/slider__category/Slider__category'

function Home() {
  return (
    <div className="home">
      <div className="headerr">
        <div className="containerrr">
          <div className="header__item">
              <nav className='nav-list'>
                <a href="#">Katalog</a>
                <a href="#Aksiya">Aksiya</a>
                <a href="#Bizhaqimizda">Biz haqimizda</a>
                <a href="#manzil_ul">Manzilimiz</a>
                <a href="#Bizhaqimizda">Aloqa</a>  
              </nav>
                <div className="logo-btn">
                  <img src={logo} alt="" />
                  <Menu/>
                    <div className="btn-ra">
                        <span> <i className="bi bi-telephone-fill"></i> +998 90 123 45 67</span>
                        <Buyurtma/>
                    </div>  
                </div>
                <div className="header_M">
                    <p className='header_M-title'>Kechalari sokin dam oling</p>
                    <div className="slider_bots">
                      <Slider/>
                    </div>
                    <button className='M-button'>Kategoriyalar <i className="bi bi-arrow-right"></i></button>
                    <div className="line"></div>
                </div>
          </div>
        </div>
      </div>

        <div className="ST">
          <div className="container">
            <div className="st">
                {
                  dataFoiz && dataFoiz.map((e,i)=>(
                    <Statistica key={i} item={e}/>
                  ))
                }
            </div>
          </div>
        </div>
        
        <div className="CT">
          <div className="container">
              <Category_slid/>
              <Slider__category/>
          </div>
        </div>

        <div className="Cardss" id='Aksiya'>
          <div className="containerrr">
                <div className="cardss">
                  {
                    maxsulot && maxsulot.map((e,i)=>(
                      <Card key={i} maxsulot={e}/>

                    ))
                  }
                </div>
          </div>
        </div>
    
      {/* <HomeIkki/> */}
    </div> 
  )
}

export default Home