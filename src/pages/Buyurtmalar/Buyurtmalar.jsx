import React from 'react'
import './Buyurtmalar.scss'

function Buyurtmalar() {
  return (
    <div>
        <div className="wrapper1">
          <table className='table'>
            <thead className='table__thead'>
              <tr>
              <th>ID</th>
              <th>ismi</th>
              <th>telefon raqami</th>
              <th>mahsulot nomlari</th>
              <th>miqdor</th>
              <th>Qayta aloqa</th>
              <th></th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>6</td>
                <td>Jenny Wilson</td>
                <td>+998 90 123 45 67</td>
                <td>Ortopedik Eko matras</td>
                <td>4</td>
                <td><div className="form-check form-switch">
                  <input className="form-check-input mody" type="checkbox" id="flexSwitchCheckDefault" defaultChecked/>
                </div></td>
                <td>
                
                </td>
              </tr>
              <tr>
                <td>7 </td>
                <td> Jenny Wilson</td>
                <td>+998 90 123 45 67</td>
                <td>Ortopedik Eko matras</td>
                <td>4</td>
                <td>
                <div className="form-check form-switch">
                  <input className="form-check-input mody" type="checkbox" id="flexSwitchCheckDefault"/>
                </div>
                </td>
                <td>
                  
                </td>
              </tr>
              <tr>
                <td>3</td>
                <td>Jenny Wilson</td>
                <td>+998 90 123 45 67</td>
                <td>Ortopedik Eko matras</td>
                <td>4</td>
                <td><div className="form-check form-switch">
                  <input className="form-check-input mody" type="checkbox" id="flexSwitchCheckDefault" defaultChecked/>
                </div></td>
                <td>
                
                </td>
              </tr>
              <tr>
                <td>3</td>
                <td>Jenny Wilson</td>
                <td>+998 90 123 45 67</td>
                <td>Ortopedik Eko matras</td>
                <td>4</td>
                <td>
                <div className="form-check form-switch">
                  <input className="form-check-input mody" type="checkbox" id="flexSwitchCheckDefault" defaultChecked/>
                </div>
                </td>
                <td>
                
                </td>
              </tr>
              
            </tbody>
          </table>

        </div>

    </div>
  )
}

export default Buyurtmalar