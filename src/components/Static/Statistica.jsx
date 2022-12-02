import React from 'react'
import './Static.scss'

export default function Statistica(item) {
    console.log(item);
  return (
    <div className='Statistica'>
        <p>{item.id}</p>
        <p>{item.raqam}</p>
        <p>{item.text}</p>
    </div>
  )
}
