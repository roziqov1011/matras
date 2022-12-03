import React from 'react'
import './Mahsulotlar.scss'

function Mahsulotlar() {
  return (
    <div>
        <div className="wrapper">
          <table className='table'>
            <thead className='table__thead'>
              <tr>
              <th>Mahsulot nomlari</th>
              <th>Toifalar</th>
              <th>Narxi</th>
              <th>Yuklama</th>
              <th>Razmeri</th>
              <th>Status</th>
              <th></th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Lux Soft Memory</td>
                <td>Model C</td>
                <td>1 600 000 so’m</td>
                <td>150 kg</td>
                <td>200 x 134 x 40</td>
                <td><div className="form-check form-switch">
                  <input className="form-check-input" type="checkbox" id="flexSwitchCheckDefault" defaultChecked/>
                </div></td>
                <td>
                  <div className='table__action'>
                    <i className="bi bi-pencil-fill"></i>
                    <i className="bi bi-trash-fill"></i>
                  </div>
                </td>
              </tr>
              <tr>
                <td>Lux Soft Memory</td>
                <td>Model C</td>
                <td>1 600 000 so’m</td>
                <td>150 kg</td>
                <td>200 x 134 x 40</td>
                <td>
                <div className="form-check form-switch">
                  <input className="form-check-input" type="checkbox" id="flexSwitchCheckDefault"/>
                </div>
                </td>
                <td>
                  <div className='table__action'>
                    <i className="bi bi-pencil-fill edit"></i>
                    <i className="bi bi-trash-fill"></i>
                  </div>
                </td>
              </tr>
              <tr>
                <td>Lux Soft Memory</td>
                <td>Model C</td>
                <td>1 600 000 so’m</td>
                <td>150 kg</td>
                <td>200 x 134 x 40</td>
                <td><div className="form-check form-switch">
                  <input className="form-check-input" type="checkbox" id="flexSwitchCheckDefault" defaultChecked/>
                </div></td>
                <td>
                  <div className='table__action'>
                    <i className="bi bi-pencil-fill"></i>
                    <i className="bi bi-trash-fill"></i>
                  </div>
                </td>
              </tr>
              <tr>
                <td>Lux Soft Memory</td>
                <td>Model C</td>
                <td>1 600 000 so’m</td>
                <td>150 kg</td>
                <td>200 x 134 x 40</td>
                <td>
                <div className="form-check form-switch">
                  <input className="form-check-input" type="checkbox" id="flexSwitchCheckDefault" defaultChecked/>
                </div>
                </td>
                <td>
                  <div className='table__action'>
                    <i className="bi bi-pencil-fill"></i>
                    <i className="bi bi-trash-fill"></i>
                  </div>
                </td>
              </tr>
              
            </tbody>
          </table>


          <button type="button" className="btn btn-primary add__button" data-bs-toggle="modal" data-bs-target="#exampleModal" data-bs-whatever="@getbootstrap">Qo'shish</button>

          <div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
          <div className="modal-dialog">
            <div className="modal-content modal-add">
              <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLabel">New message</h5>
                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
              </div>
              <div className="modal-body">
                <form>
                  <div className="mb-3">
                    <label for="recipient-name" className="col-form-label">Recipient:</label>
                    <input type="text" className="form-control" id="recipient-name" />
                  </div>
                  <div className="mb-3">
                    <label for="message-text" className="col-form-label">Message:</label>
                    <textarea className="form-control" id="message-text"></textarea>
                  </div>
                </form>
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                <button type="button" className="btn btn-primary">Send message</button>
              </div>
            </div>
          </div>
          </div>
        </div>

    </div>
  )
}

export default Mahsulotlar