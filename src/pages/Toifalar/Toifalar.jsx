import React from 'react'
import './Toifalar.scss'

function Toifalar() {
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
        <tr>
        <th></th>
          <td>Model C</td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td>
          <div className='table__action'>
                    <i className="bi bi-pencil-fill"></i>
                    <i className="bi bi-trash-fill"></i>
                  </div>
          </td>
           
        </tr>
        <tr>
        <th></th>
          <td>Model C</td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td>
          <div className='table__action'>
                    <i className="bi bi-pencil-fill"></i>
                    <i className="bi bi-trash-fill"></i>
                  </div>
          </td>
           
        </tr>
        <tr>
        <th></th>
          <td>Model c</td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td>
          <div className='table__action'>
                    <i className="bi bi-pencil-fill"></i>
                    <i className="bi bi-trash-fill"></i>
                  </div>
          </td>
           
        </tr>
        <tr>
        <th></th>
          <td>Model C</td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
       
          
          <td>
          <div className='table__action'>
                    <i className="bi bi-pencil-fill"></i>
                    <i className="bi bi-trash-fill"></i>
                  </div>
          </td>
            
        </tr>
        
      
      </tbody>
    </table>




    <button type="button" className="btn_btn" data-bs-toggle="modal" data-bs-target="#exampleModal" data-bs-whatever="@mdo">Qo'shish</button>

<div className="modal fade " id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div className="modal-dialog">
    <div className="modal-content">
      <div className="modal-header">
        <h5 className="modal-title" id="exampleModalLabel">Qo'shish</h5>
        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div className="modal-body">
        <form>
          <div className="mb-3">
            <label for="recipient-name" className="col-form-label">kategoriya Nomi</label>
            <input type="text" className="form-control" id="recipient-name"></input>
          </div>
          
          <div className="mb-4">
          
            <label for="message-text" className="col-form-label holat">Holat:</label>
            <div className="form-check form-switch icon">
                  <input className="form-check-input" type="checkbox" id="flexSwitchCheckDefault" defaultChecked/>
              </div>
          </div>
          
        </form>
      </div>
      <div className="modal-footer">
        <button type="button" className="btn btn-secondary " data-bs-dismiss="modal">Close</button>
      </div>
    </div>
  </div>
</div>

    </div>
  )
}

export default Toifalar