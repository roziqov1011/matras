import React from 'react'
import './Buyurtmalar.scss'

function Buyurtmalar() {
  return (
    <div>
     
    <table className='table_nav'>
      <thead className='table_head'>
        
        <tr>
        <th></th>
          <th>Id</th>
          <th>ismi</th>
          <th>Telefon Raqam</th>
          <th>mahsulot nomi</th>
          <th>miqdor</th>
          <th>qayta aloqa</th>
          
          
        </tr>
        
      </thead>
      <tbody>
        <tr>
        <th></th>
          <td>6</td>
          <td>Jenny Wilson</td>
          <td>+998 90 123 45 67</td>
          <td>Ortopedik Eko matras</td>
          <td>4</td>
          <td>
            <div className="form-check form-switch icons_theme">
              <input className="form-check-input icons_theme" type="checkbox" id="flexSwitchCheckDefault" defaultChecked />
            </div>
          </td>
           
        </tr>
        <tr>
        <th></th>
          <td>7</td>
          <td>Robert Fox</td>
          <td>+998 90 123 45 67</td>
          <td>Ortopedik Eko matras</td>
          <td>4</td>
          <td>
            <div className="form-check form-switch icons_theme">
              <input className="form-check-input" type="checkbox" id="flexSwitchCheckDefault" defaultChecked />
            </div>
          </td>
           
        </tr>
        <tr>
        <th></th>
          <td>3</td>
          <td>Wade Warren</td>
          <td>+998 90 123 45 67</td>
          <td>Ortopedik Eko matras</td>
          <td>4</td>
          <td>
            <div className="form-check form-switch icons_theme">
              <input className="form-check-input" type="checkbox" id="flexSwitchCheckDefault" defaultChecked />
            </div>
          </td>
           
        </tr>
        <tr>
        <th></th>
          <td>3</td>
          <td>Jane Cooper</td>
          <td>+998 90 123 45 67</td>
          <td>Ortopedik Eko matras</td>
          <td>4</td>
          <td>
            <div className="form-check form-switch icons_theme">
              <input className="form-check-input" type="checkbox" id="flexSwitchCheckDefault" defaultChecked />
            </div>
          </td>
            
        </tr>
        
      
      </tbody>
    </table>
  </div>
    
  )
}

export default Buyurtmalar