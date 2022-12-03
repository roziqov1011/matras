import React from 'react'
import './Buyurtmalar.scss'

function Buyurtmalar() {
  return (
    <div>
       <div className="buyurtmalar">
         <table className='buyurtmalar_table'>
          <thead className='buyurtmalar_nav'>
            <tr>
                <th>
                  ID
                </th>
                <th>
                  ismi
                </th>
                <th>
                  telefon raqami
                </th>
                <th>
                  Mahsulot nomi
                </th>
                <th>
                  miqdor
                </th>
                <th>
                  qayta aloqa
                </th>
               
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
               6
              </td>
              <td>
              Jenny Wilson
              </td>
              <td>
              +998 90 123 45 67
              </td>
              <td>
                Ortopedik Eko matras
              </td>
              <td>
                4
              </td>
              <td><div className="form-check form-switch">
                  <input className="form-check-input" type="checkbox" id="flexSwitchCheckDefault" defaultChecked/>
                </div></td>
            </tr>

            <tr>
              <td>
               7
              </td>
              <td>
              Robert Fox
              </td>
              <td>
              +998 90 123 45 67
              </td>
              <td>
                Ortopedik Eko matras
              </td>
              <td>
                4
              </td>
              <td><div className="form-check form-switch">
                  <input className="form-check-input" type="checkbox" id="flexSwitchCheckDefault" defaultChecked/>
                </div></td>
            </tr>

            <tr>
              <td >
               3
              </td>
              <td >
              Wade Warren
              </td>
              <td >
              +998 90 123 45 67
              </td>
              <td>
              Ortopedik Eko matras
              </td>
              <td>
                4
              </td>
              <td><div className="form-check form-switch">
                  <input className="form-check-input" type="checkbox" id="flexSwitchCheckDefault" defaultChecked/>
                </div></td>
            </tr>

            <tr>
              <td>
               3
              </td>
              <td>
              Jane Cooper
              </td>
              <td>
              +998 90 123 45 67
              </td>
              <td>
                Ortopedik Eko matras
              </td>
              <td>
                4
              </td>
              <td><div className="form-check form-switch">
                  <input className="form-check-input" type="checkbox" id="flexSwitchCheckDefault" defaultChecked/>
                </div>
                </td>
            </tr>
          </tbody>
         </table>
       </div>

    </div>
  )
}

export default Buyurtmalar