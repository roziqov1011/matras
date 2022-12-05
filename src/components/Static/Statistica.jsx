import React from 'react'
import './Static.scss'

export default function Statistica({item}) {
  return (
    <div className='Statistica'>
        <div className="Statistica__item">
            <div className="static">
                <p>{item.number}</p>
                <span>{item.matn}</span>
            </div>
        </div>
    </div>
  )
}
