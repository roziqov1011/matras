import React, { useState } from 'react'
import { Link, Outlet } from 'react-router-dom'
import Header from '../../components/Header/Header'
import logo from '../../img/admin/logo.svg'
import './Admin.scss'
import home from '../../img/admin/home.svg'
import customers from '../../img/admin/customers.svg'
import toifalar from '../../img/admin/toifalar.svg'
import mahsulotlar from '../../img/admin/mahsulotlar.svg'
import texnologiyalar from '../../img/admin/texnologiyalar.svg'
import manzil from '../../img/admin/manzil.svg'

function Admin() {
  const [active , setActive] = useState()
return (
<div className='Admin'>
  <div className="admin__inner">
  <div className="admin__bar"> 
    <Link  className='logo' to=''> 
      <img src={logo} alt="" /> 
    </Link> 
      <Link onClick={()=> setActive(1)}   className={active == 1? 'admin__link active': 'admin__link'} to=''> 
          <img src={home} alt="home_img" /> 
        Buyurtmalar 
      </Link> 
      <Link onClick={()=> setActive(2)} className={active == 2? 'admin__link active': 'admin__link'} to='customers'> 
          <img src={customers} alt="customers" /> 
        Сustomers 
      </Link> 
      <Link onClick={()=> setActive(3)} className={active == 3? 'admin__link active': 'admin__link'} to='toifalar'> 
          <img src={toifalar} alt="toifalar" /> 
        Toifalar 
      </Link> 
      <Link onClick={()=> setActive(4)} className={active == 4? 'admin__link active': 'admin__link'} to='mahsulotlar'> 
          <img src={mahsulotlar} alt="mahsulotlar" /> 
        Mahsulotlar 
      </Link> 
      <Link onClick={()=> setActive(5)} className={active == 5? 'admin__link active': 'admin__link'} to='texnologiyalar'> 
          <img src={texnologiyalar} alt="texnologiyalar" /> 
        Texnologiyalar 
      </Link> 
      <Link onClick={()=> setActive(6)} className={active == 6? 'admin__link active': 'admin__link'} to='manzil'> 
          <img src={manzil} alt="manzil" /> 
        Manzil 
      </Link> 
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