import React from 'react'
import './Home.scss'
import logo from '../../img/img__home/logo.svg'
import Slider from '../../components/Slider/Slider'
import Statistica from '../../components/Static/Statistica'
import { dataFoiz } from '../../lib/Data_foiz'
import HomeIkki from '../HomeIkki/HomeIkki'
import Category_slid from '../../components/Category_slid/Category_slid'
import Card from '../../components/Card/Card'
<<<<<<< HEAD
import Menu from '../../components/Menu/Menu'
import { data } from '../../lib/data';
import HomeFuter from '../Home_futer/HomeFuter';


=======
>>>>>>> 933192dfa5c1606d4667f714c6d8a08476047067



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
                        <p> <i className="bi bi-telephone-fill"></i> +998 90 123 45 67</p>
                        <button>Buyurtma berish</button>
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
            <Statistica/>
          </div>
        </div>

<<<<<<< HEAD
      <div className="mahsulot__matras">
        {
          data && data.map((e,i)=>(
            <Card key={i} item={e}/>
          ))
        }
              <p className='title-matras'>Aksiyadagi mahsulotlar</p>
              
      </div>
=======
        <div className="CT">
          <div className="container">
              <Category_slid/>
          </div>
        </div>
        <div className="Cardss">
          <div className="container">
              <Card/>
          </div>
        </div>
    <HomeIkki/>
>>>>>>> 933192dfa5c1606d4667f714c6d8a08476047067

    </div> 
  )
}

export default Home