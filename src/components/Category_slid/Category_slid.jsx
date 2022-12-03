import React from 'react'
import './Category_slid.scss'

export default function Category_slid() {
  return (
    <div className='Category_slid'>
      <div className="Category_sliditem">
        <p className='title'>Bizning mahsulotlar</p>
          <ul className="listC">
            <li className="list__item-act">
              <p>Barchasi</p>
            </li>
            <li className="list__itemC">
              <p>Model A+</p>
            </li>
            <li className="list__itemC">
              <p>Model B+</p>
            </li>
            <li className="list__itemC">
              <p>Model C</p>
            </li>
            <li className="list__itemC">
              <p>Model C+</p>
            </li>
            <li className="list__itemC">
              <p>Model D</p>
            </li>
            <li className="list__itemC">
              <p>Model Yevro</p>
            </li>
            <li className="list__itemC">
              <p>Yangi tovarlar</p>
            </li>
            <li className="list__itemC">
              <p>Model A</p>
            </li>
          </ul>
      </div>
    </div>
  )
}
