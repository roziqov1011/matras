import React from 'react'
import './Static.scss'

export default function Statistica(item) {
  return (
    <div className='Statistica'>
        <p>{item.number}</p>
        <p>{item.matn}</p>
    </div>
  )
}
