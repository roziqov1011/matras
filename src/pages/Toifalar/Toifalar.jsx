import React, { useRef } from 'react'  
import { useState } from 'react'  
import { useEffect } from 'react'  
import './Toifalar.scss'  
  
function Toifalar() {  
  const [data, setData] = useState([])  
  const inp = useRef()  
  useEffect(() => {  
    fetch('https://638ec96e9cbdb0dbe314bdf0.mockapi.io/toifalar')  
      .then(res => res.json())  
      .then(data => setData(data))  
  }, [])  
  const addCategory = () => {  
    let category = inp.current.value  
    fetch('https://638ec96e9cbdb0dbe314bdf0.mockapi.io/toifalar', {  
      method: 'POST',  
      headers: {  
        'Content-type': 'application/json', // qysi formatta yuborish  
        'Accept': 'application/json', // qysi formatta uni qabul qilib olishi  
        'Access-Control-Allow-Origin': '*' // ruxsat berish hammaga  
      },  
      body: JSON.stringify({ nomi: category })  
    })  
      .then(res => res.json())  
      .then(data => console.log(data))  
  }  
  const delCategory = (id) => {  
    setData(data.filter((e)=> e.id != id)) 
    fetch(`https://638ec96e9cbdb0dbe314bdf0.mockapi.io/toifalar/${id}`, {  
      method: 'DELETE',  
      headers: {  
        'Content-type': 'application/json', // qysi formatta yuborish  
        'Accept': 'application/json', // qysi formatta uni qabul qilib olishi  
        'Access-Control-Allow-Origin': '*' // ruxsat berish hammaga  
      },  
       
    })  
      .then(res => res.json())  
      .then(data => console.log(data))  
  } 
  return (  
    <div>  
  
      <table className='table_nav'>  
        <thead className='table_head'>  
  
          <tr>  
            <th></th>  
            <th>toifalar</th>  
            <th></th>  
            <th></th>  
            <th></th>  
            <th></th>  
            <th></th>  
  
  
          </tr>  
  
        </thead>  
        <tbody>  
          {  
            data && data.map((e, i) => (  
              <tr key={i}>  
                <th></th>  
                <td>{e.nomi}</td>  
                <td></td>  
                <td></td>  
                <td></td>  
                <td></td>  
                <td>  
                  <div className='table__action'>  
                    <div>  
                      <i className="bi bi-pencil-fill pencill ruchka"></i>  
                    </div>  
                    <div onClick={()=> delCategory(e.id)}>  
                      <i   id={e.id} className="bi bi-trash-fill trashsh"></i>  
                    </div>  
                  </div>  
                </td>  
  
              </tr>  
            ))  
          }  
  
  
  
        </tbody>  
      </table>  
  
  
  
  
      <button type="button" className="btn_btn btnn" data-bs-toggle="modal" data-bs-target="#exampleModal" data-bs-whatever="@mdo">Qo'shish</button>  
  
      <div className="modal fade " id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">  
        <div className="modal-dialog">  
          <div className="modal-content modal__width">  
            <div className="modal-header">  
              <h5 className="modal-title" id="exampleModalLabel">Qo'shish</h5>  
              <button type="button" className="btn-close closee" data-bs-dismiss="modal" aria-label="Close"></button>  
            </div>  
            <div className="modal-body">  
              <form>  
                <div className="mb-3">  
                  <label htmlFor="recipient-name" className="col-form-label">kategoriya Nomi</label>  
                  <input ref={inp} type="text" className="form-control" id="recipient-name" placeholder='toifa'></input>  
                </div>  
  
                <div className="mb-4">  
  
                  <label htmlFor="message-text" className="col-form-label holat">Holat:</label>  
                  <div className="form-check form-switch icon">  
                    <input className="form-check-input" type="checkbox" id="flexSwitchCheckDefault" defaultChecked />  
                  </div>  
                </div>  
  
              </form>  
            </div><div className="modal-footer">  
              <button onClick={addCategory} type="button" className="btn btn-secondary btn__qoshish" data-bs-dismiss="modal">Qo'shish</button>  
            </div>  
          </div>  
        </div>  
      </div>  
  
    </div>  
  )  
}  
  
export default Toifalar