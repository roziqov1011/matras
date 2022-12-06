import React from 'react'
import './card.scss'
import matrs from '../../img/img__home/oq_matras.png'


function Card({maxsulot}) {
  return (
    <div className='card'>
      <div className='card__matras'>
          <button>Yangi mahsulot</button>
          <img src={matrs} className="img" alt="" />
      </div>
      <div className="card__item">
        <span className='card__title'>{maxsulot.name}</span>
        <div className="malumaot">
          <ul className='list'>
              <li className='list-item'>
                <span>Yuklama</span>
                <p>{maxsulot.kg} <sub>kg</sub></p>
              </li>
              <li className='list-item'>
                <span>Kafolat</span>
                <p>{maxsulot.yil} <sub>yil</sub></p>
              </li>
              <li className='list-item li1'>
                <span>O’lchami</span>
                <p>{maxsulot.olcham}</p>
              </li>
              <li className='list-item li2'>
                <span>Sig’imi</span>
                <p>{maxsulot.sigim} kishilik</p>
              </li>
          </ul>
          <p className='info'>{maxsulot.malumot}</p>
          <span className='narx'>Narxi</span>
          <p className='som'>{maxsulot.narx} <sub>so’m</sub></p>
          <button className='button'>Buyurtma berish <i className="bi bi-cart-fill"></i></button>
        </div>
      </div>
    </div>
  )
}

export default Card