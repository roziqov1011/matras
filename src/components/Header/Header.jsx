import React from 'react'
import './Header.scss'
import profile from '../../img/admin/profile.svg'

function Header() {
  return (
    <div className='header'>
      <input className='search' type="text" placeholder='User'/>
      <div className="profile">
        <img src={profile} alt="profile" />
        <p>John Doe</p>
      </div>
    </div>
  )
}

export default Header