import React from 'react'
import './Manzil.scss'

function Manzil() {
return (
<div>
  <div className='manzil'>
    <div className='manzil_container'>
      <div className='manzil_menu'>
        <ul className='manzil_menu_matn'>
          <li className='manzil_menu_matn_li'>Manzil</li>
          <li className='manzil_menu_matn_li'>Matn</li>
          <li className='manzil_menu_matn_li'>Location</li>
        </ul>
      </div>

      <div className='manzil_form'>
        <ul className='manzil_from_location'>
          <li className='manzil_from_location_li'>Toshkent, Parken...</li>
          <li>Mo’ljal: Qoraqamish... </li>
          <li>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
              class="bi bi-geo-alt-fill" viewBox="0 0 16 16">
              <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10zm0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6z" />
            </svg>
          </li>
        </ul>
        <ul className='manzil_from_delete'>
          <li className='manzil_from_delete_li'>
            <svg className='svg' xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
              class="bi bi-pencil-fill" viewBox="0 0 16 16">
              <path
                d="M12.854.146a.5.5 0 0 0-.707 0L10.5 1.793 14.207 5.5l1.647-1.646a.5.5 0 0 0 0-.708l-3-3zm.646 6.061L9.793 2.5 3.293 9H3.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.207l6.5-6.5zm-7.468 7.468A.5.5 0 0 1 6 13.5V13h-.5a.5.5 0 0 1-.5-.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.5-.5V10h-.5a.499.499 0 0 1-.175-.032l-.179.178a.5.5 0 0 0-.11.168l-2 5a.5.5 0 0 0 .65.65l5-2a.5.5 0 0 0 .168-.11l.178-.178z" />
            </svg>
          </li>
          <li className='manzil_from_delete_il'>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash3-fill"
              viewBox="0 0 16 16">
              <path
                d="M11 1.5v1h3.5a.5.5 0 0 1 0 1h-.538l-.853 10.66A2 2 0 0 1 11.115 16h-6.23a2 2 0 0 1-1.994-1.84L2.038 3.5H1.5a.5.5 0 0 1 0-1H5v-1A1.5 1.5 0 0 1 6.5 0h3A1.5 1.5 0 0 1 11 1.5Zm-5 0v1h4v-1a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5ZM4.5 5.029l.5 8.5a.5.5 0 1 0 .998-.06l-.5-8.5a.5.5 0 1 0-.998.06Zm6.53-.528a.5.5 0 0 0-.528.47l-.5 8.5a.5.5 0 0 0 .998.058l.5-8.5a.5.5 0 0 0-.47-.528ZM8 4.5a.5.5 0 0 0-.5.5v8.5a.5.5 0 0 0 1 0V5a.5.5 0 0 0-.5-.5Z" />
            </svg>
          </li>
        </ul>
      </div>
    </div>
  </div>
  <div>
    <div className='qoshish'>
      <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
        Qo'shish
      </button>
    </div>

    <div class="modal fade my-modal" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel"
      aria-hidden="true">
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

export default Manzil