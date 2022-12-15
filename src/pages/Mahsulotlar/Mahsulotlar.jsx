import React from 'react'
import './Mahsulotlar.scss'
import input_logo from '../../img/admin/input_logo.png'
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


          <button type="button" className="btn btn-primary add__button" data-bs-toggle="modal" data-bs-target="#maxsulot" data-bs-whatever="@getbootstrap">Qo'shish</button>



          <div class="modal fade my-modal" id="maxsulot" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog">
              <div class="modal-content">
                <div class="modal-header">
                  <h5 class="modal-title" id="exampleModalLabel">Tahrirlash</h5>
                  <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                  <div className='modal_img '>
                    <div class="mb-3">
                      <label for="formFile" class="form-label"></label>
                      <input class="form-control" type="file" id="formFile" />
                    </div>
                  </div>
                  <div className='modal_tedy'>
                    <div className='modal_tedy_1'>
                      <span>
                        Manzil
                      </span>
                      <input type="text" />
                    </div>
                    <div className='modal_tedy_2'>
                      <span>
                        Location
                      </span>
                      <input type="text" />
                    </div>
                    <div className='modal_tedy_3'>
                      <span>
                        Holat
                      </span>
                      <div className="form-check form-switch">
                        <input className="form-check-input from" type="checkbox" id="flexSwitchCheckDefault" />
                      </div>
                      <div className='modal_tedy_4'>
                        <span>
                          Matn
                        </span>
                        <div class="mb-3">
                          <label for="exampleFormControlTextarea1" class="form-label"></label>
                          <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="modal-footer">
                  <button type="button" class="btn btn-primary">Saqlash</button>
                </div>
              </div>
            </div>
          </div>
        </div>

    </div>
  )
}

export default Mahsulotlar