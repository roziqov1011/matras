import React from 'react'
import './Customers.scss'

function Customers() {

return (
<div>
  <div className="around">
    <table className='table_nav'>
      <thead className='table_head'>
        
        <tr>
          <th></th>
          <th>Id</th>
          <th>Sana</th>
          <th>Telefon Raqam</th>
          <th>Qayta Aloqa</th>
          <th></th>
        </tr>
        
      </thead>
      <tbody>
        <tr>
          <th></th>
          <td>6</td>
          <td>12:13-12.05.2021</td>
          <td>+998 90 123 45 67</td>
          <td>
            <div className="form-check form-switch">
              <input className="form-check-input" type="checkbox" id="flexSwitchCheckDefault" defaultChecked />
            </div>
          </td>
            <td>
              <div className="tbody__icon">
              <i className="bi bi-trash"></i>
              </div>
            </td>
        </tr>
        <tr>
          <th></th>
          <td>2</td>
          <td>12:13-12.05.2021</td>
          <td>+998 90 123 45 67</td>
          <td>
            <div className="form-check form-switch">
              <input className="form-check-input" type="checkbox" id="flexSwitchCheckDefault" defaultChecked />
            </div>
          </td>
            <td>
              <div className="tbody__icon">
              <i className="bi bi-trash"></i>
              </div>
            </td>
        </tr>
        <tr>
          <th></th>
          <td>3</td>
          <td>12:13-12.05.2021</td>
          <td>+998 90 123 45 67</td>
          <td>
            <div className="form-check form-switch">
              <input className="form-check-input" type="checkbox" id="flexSwitchCheckDefault" defaultChecked />
            </div>
          </td>
            <td>
              <div className="tbody__icon">
              <i className="bi bi-trash"></i>
              </div>
            </td>
        </tr>
        <tr>
          <th></th>
          <td>6</td>
          <td>12:13-12.05.2021</td>
          <td>+998 90 123 45 67</td>
          <td>
            <div className="form-check form-switch">
              <input className="form-check-input" type="checkbox" id="flexSwitchCheckDefault" defaultChecked />
            </div>
          </td>
            <td>
              <div className="tbody__icon">
              <i className="bi bi-trash"></i>
              </div>
            </td>
        </tr>
        <tr>
          <th></th>
          <td>4</td>
          <td>12:13-12.05.2021</td>
          <td>+998 90 123 45 67</td>
          <td>
            <div className="form-check form-switch">
              <input className="form-check-input" type="checkbox" id="flexSwitchCheckDefault" defaultChecked />
            </div>
          </td>
            <td>
              <div className="tbody__icon">
              <i className="bi bi-trash"></i>
              </div>
            </td>
        </tr>
      </tbody>
    </table>
  </div>
</div>
)
}

export default Customers