import React from 'react'
import { Link, Outlet } from 'react-router-dom'
import Header from '../../components/Header/Header'
import logo from '../../img/admin/logo.svg'
import './Admin.scss'

function Admin() {
return (
<div className='Admin'>
  <div className="admin__inner">
    <div className="admin__bar">
    <Link className='logo' to=''>
      <img src={logo} alt="" />
    </Link>
      <Link className='admin__link' to=''>Buyurtmalar</Link>
      <Link className='admin__link' to='customers'>Сustomers</Link>
      <Link className='admin__link' to='toifalar'>Toifalar</Link>
      <Link className='admin__link' to='mahsulotlar'>Mahsulotlar</Link>
      <Link className='admin__link' to='texnologiyalar'>Texnologiyalar</Link>
      <Link className='admin__link' to='manzil'>Manzil</Link>
    </div>
    <div className='Admin__left'>
      <Header />
      <Outlet />
    </div>
  </div>

</div>
)
}

export default Admin