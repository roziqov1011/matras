import React from 'react'
import './card.scss'
import matrs from '../../img/img__home/oq_matras.png'


function Card() {
  return (
    <div className='card'>
      <div className='card__matras'>
          <button>Yangi mahsulot</button>
          <img src={matrs} className="img" alt="" />
      </div>
      <div className="card__item">
        <span className='card__title'>Ortopedik Eko matras</span>
        <div className="malumaot">
          <ul className='list'>
              <li className='list-item'>
                <span>Yuklama</span>
                <p>150 <sub>kg</sub></p>
              </li>
              <li className='list-item'>
                <span>Kafolat</span>
                <p>3 <sub>yil</sub></p>
              </li>
              <li className='list-item li1'>
                <span>O’lchami</span>
                <p>200x120x40</p>
              </li>
              <li className='list-item li2'>
                <span>Sig’imi</span>
                <p>2 kishilik</p>
              </li>
          </ul>
          <p className='info'>
          Penatibus viverra gravida rhoncus in. At turpis morbi ante tortor a est. Habitant adipiscing ut sed pulvinar tellus, ut urna, fermentum. Porttitor senectus lorem rhoncus facilisi ac dictum varius egestas.
          </p>
          <span className='narx'>Narxi</span>
          <p className='som'>1 699 999 <sub>so’m</sub></p>
          <button className='button'>Buyurtma berish <i className="bi bi-cart-fill"></i></button>
        </div>
      </div>
    </div>
  )
}

export default Card