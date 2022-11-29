import React from 'react'
import { Link, Outlet } from 'react-router-dom'
import Header from '../../components/Header/Header'
import './Admin.scss'

function Admin() {
  return (
    <div className='Admin'>
        <Header/>
        <div className="admin__inner">
        <div className="admin__bar">
                <Link to=''>Buyurtmalar</Link>
                <Link to='customers'>Сustomers</Link>
                <Link to='toifalar'>Toifalar</Link>
                <Link to='mahsulotlar'>Mahsulotlar</Link>
                <Link to='texnologiyalar'>Texnologiyalar</Link>
                <Link to='manzil'>Manzil</Link>
        </div>
        <Outlet/>
        </div>

    </div>
  )
}

export default Admin