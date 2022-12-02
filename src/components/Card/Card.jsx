import React from 'react'
import './card.scss'



function Card({item}) {
  let data = item
  console.log(data.img);
  return (
    <div className='card'>
      <div className='card__matras'>
          <button>Yangi mahsulot</button>
          <img src={data.img} className="img" alt="" />
      </div>
      <div className="card__item">
        <span className='card__title'>{data.name}</span>
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
          <p className='info'>{
            data.info}
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