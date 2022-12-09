import React from 'react'
import './Search.scss'
import {useLocation} from 'react-router-dom'

function Searchh() {
  const location = useLocation();

  return (
    <div>
      <input className='search' type="text" placeholder={location.pathname == '/admin/mahsulotlar' ? 'Mahsulotlar' : 'User'}/>
    </div>
  )
}

export default Searchh