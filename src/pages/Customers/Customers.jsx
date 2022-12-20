import React, { useEffect, useState } from 'react'
import './Customers.scss'

function Customers() {
const [data ,setData] = useState([])
const[user,setUser] = useState([])

useEffect(()=>{
  getUsers();
},[])
function getUsers() {
  fetch(`https://638ec96e9cbdb0dbe314bdf0.mockapi.io/customers`)
//   .then((result)=>{
//   result.json().then((resp)=>{
//     setUser(resp)
//   })
// })
.then(response => response.json())
.then(response => setData(response))
.catch(err => console.error(err));
}

function deleteUser(id) {

  fetch(`https://638ec96e9cbdb0dbe314bdf0.mockapi.io/customers/${id}`,{
    method:'DELETE'
  }).then((result)=>{
    result.json().then((resp)=>{
      console.warn(resp)
      getUsers(id) 
    })
  })


  
}

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
              <input className="form-check-input" type="checkbox" id="flexSwitchCheckDefault" defaultChecked  />
              {e.qaytaloqa}
            </div>
          </td>
          <td>
            <button className="tbody__icon" onClick={()=> deleteUser(e.id)}><i className="bi bi-trash  trashh"></i></button>
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