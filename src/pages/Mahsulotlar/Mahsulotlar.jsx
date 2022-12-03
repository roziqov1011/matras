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
                    <i class="bi bi-pencil-fill"></i>
                    <i class="bi bi-trash-fill"></i>
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
                    <i class="bi bi-pencil-fill edit"></i>
                    <i class="bi bi-trash-fill"></i>
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
                    <i class="bi bi-pencil-fill"></i>
                    <i class="bi bi-trash-fill"></i>
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
                    <i class="bi bi-pencil-fill"></i>
                    <i class="bi bi-trash-fill"></i>
                  </div>
                </td>
              </tr>
              
            </tbody>
          </table>


          <button type="button" class="btn btn-primary add__button" data-bs-toggle="modal" data-bs-target="#exampleModal" data-bs-whatever="@getbootstrap">Qo'shish</button>

          <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
          <div class="modal-dialog modal-add">
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title" id="exampleModalLabel">New message</h5>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
              </div>
              <div class="modal-body">
                <form>
                  <div class="mb-3">
                    <label for="recipient-name" class="col-form-label">Recipient:</label>
                    <input type="text" class="form-control" id="recipient-name" />
                  </div>
                  <div class="mb-3">
                    <label for="message-text" class="col-form-label">Message:</label>
                    <textarea class="form-control" id="message-text"></textarea>
                  </div>
                </form>
              </div>
              <div class="modal-footer">
                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                <button type="button" class="btn btn-primary">Send message</button>
              </div>
            </div>
          </div>
          </div>
        </div>

    </div>
  )
}

export default Mahsulotlar