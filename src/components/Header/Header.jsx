import React from 'react'
import './Header.scss'
import profile from '../../img/admin/profile.svg'
import {useLocation} from 'react-router-dom'
import Searchh from '../Search/Search';

function Header() {
  const location = useLocation();
  console.log(location.pathname);
  return (
    <div className='header'>
      {location.pathname == '/admin' || location.pathname == '/admin/customers' || location.pathname == '/admin/mahsulotlar'  ? <Searchh /> : console.log('test')}
      <div className="profile">
        <img src={profile} alt="profile" />
        <p>John Doe</p>
      </div>
    </div>
  )
}

export default Header