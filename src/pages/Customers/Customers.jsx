import React, { useEffect, useState } from 'react'
import './Customers.scss'

function Customers() {
  const [data ,setData] = useState([])
  const[reset,setReset] = useState()

  useEffect(()=>{
    fetch(`https://638ec96e9cbdb0dbe314bdf0.mockapi.io/customers`)
    .then(response => response.json())
    .then(response => setData(response))
    .catch(err => console.error(err));
  },[reset])

return (
<div>
  <div className="around">
    <table className='table_nav'>
      <thead className='table_head'>
        
        <tr className='trr'>
          <th></th>
          <th>Id</th>
          <th>Sana</th>
          <th>Telefon Raqam</th>
          <th>Qayta Aloqa</th>
          <th></th>
        </tr>
        
      </thead>
      <tbody>
        {
          data.map((e,i)=>(
            <tr key={i}>
          <th></th>
              <td>{e.id}</td>
            <td>{e.sana}</td>
            <td>{e.tel}</td>
          <td>
            <div className="form-check form-switch formm">
              <input className="form-check-input" type="checkbox" id="flexSwitchCheckDefault" defaultChecked />
            </div>
          </td>
            <td>
              <div className="tbody__icon">
              <i className="bi bi-trash  trashh"></i>
              </div>
            </td>
        </tr>
          ))
        }
      </tbody>
    </table>
  </div>
</div>
)
}

export default Customers