import React, { useRef, useState } from 'react'
import './HomeIkki.scss'
import  ferbook from '../../img/homeIkki_img/feb.png'
import  tviter from '../../img/homeIkki_img/tvit.png'
import  vie from '../../img/homeIkki_img/vie.png'
import  youtb from '../../img/homeIkki_img/you.png'
import  grup from '../../img/homeIkki_img/grup.png'
import Homeikki_slider from '../../components/Homeikki_slider/Homeikki_slider'



function HomeIkki() {
  const usst = useRef()
  const [modal , setModal]= useState('sorov_modal')
  const [buton , setbutn]= useState('bottom')
  let opnmadal = ()=>{
    setModal('sorov_modal_open')
    setbutn('buton_open')
  }
  let removmadal = ()=>{
    setModal('sorov_content')
    setbutn('bottom')
  }

  return (
    <div className='Home'>

      <h1 className='ishlab_chiqarish'>Ishlab chiqarish texnologiyalari</h1>
      <div className="slider_content">
        <Homeikki_slider/>
     </div>

      {/* div_vps */}

      <div className="vps">

        <div className="vps_bir">

          <h1>Dream Cloud<br /> kompaniyasi haqida</h1>
          <p>Penatibus viverra gravida rhoncus in. At turpis morbi ante tortor a est. Habitant adipiscing ut sed pulvinar tellus, ut urna, fermentum:</p>
          <div className="borderr">
            <ul>
              <li>Penatibus viverra gravida rhoncus in.</li>
              <li>Dolor integer in interdum viverra risus dolor enim.</li>
              <li>Turpis senectus eu, eget aenean nulla pellentesque sed ut tempor.</li>
            </ul>
          </div>

        </div>
        <div className="vps_ikki"><img src="https://www.imgacademy.com/sites/default/files/legacyhotel.jpg" alt="" /></div>
      </div>


      <div className="ACG">
        <div className="ACG_bir"><img src="https://www.imgacademy.com/sites/default/files/legacyhotel.jpg" alt="" /></div>
        <div className="ACG_ikki">
          <h6>Libero erat praesent ullamcorper eget tortor sed et. Nec id lobortis gravida vitae. Scelerisque id fusce vitae ut. Integer sed vulputate sed nec. Arcu id mattis erat et id. </h6>
          <div className="border_ol">
            <ol>
              <li>Id risus phasellus laoreet eget. A nec pulvinar.</li>
              <li>Eu justo, tincidunt fringilla diam nulla.</li>
              <li>Amet, nullam cras lacus, fermentum leo tellus sagittis.</li>
              <li>Facilisi mauris condimentum sagittis odio rhoncus semper.</li>
            </ol>
          </div>
          <p>Ac tortor volutpat pellentesque mauris nisi, praesent. Et tempus accumsan est elementum feugiat arcu mauris tincidunt. Eget faucibus pharetra et luctus eget ut fames. A cursus elementum egestas eu scelerisque id.</p>
        </div>
      </div>

      {/*nega bizni tanlashdi */}

      <h2 className='Nega_bizni'>Nega bizni tanlashadi</h2>

      <div className="counter">
        <div className="count_all">
          <div className="con_img">
            <img src="https://www.imgacademy.com/sites/default/files/legacyhotel.jpg" alt="" />
          </div>
          <h6>Yetkazib berish</h6>
          <p>Toshkent bo'ylab bepul o'lchov va etkazib berish</p>
        </div>
        <div className="count_all">
          <div className="con_img">
            <img src="https://www.imgacademy.com/sites/default/files/legacyhotel.jpg" alt="" />
          </div>
          <h6>Yetkazib berish</h6>
          <p>Toshkent bo'ylab bepul o'lchov va etkazib berish</p>
          <h5>+998 97 144-24-42</h5>
        </div>
        <div className="count_all">
          <div className="con_img">
            <img src="https://www.imgacademy.com/sites/default/files/legacyhotel.jpg" alt="" />
          </div>
          <h6>Yetkazib berish</h6>
          <p>Toshkent bo'ylab bepul o'lchov va etkazib berish</p>
        </div>
      </div>

{/* manzil */}


      <div className="Manzil">
        <div className="lakatsya">
          <h3>Manzilimiz</h3>
          <h6>Toshkent, Parkent ko'chasi, 176-uy</h6>
          <p>Mo’ljal: Qoraqamish 2/1, Tursunxodjayeva ro’parasi, Milliy bog’ metro bekati.</p>
          <button>Geolokatsiya</button>
        </div>

        <div className="manzil_slider">
          <div id="carouselExampleSlidesOnly" class="carousel slide" data-bs-ride="carousel">
            <div class="carousel-inner">
              <div class="carousel-item active">
                <img src="https://www.imgacademy.com/sites/default/files/legacyhotel.jpg"  alt="..." />
              </div>
              <div class="carousel-item">
                <img src="https://www.imgacademy.com/sites/default/files/legacyhotel.jpg"  alt="..." />
              </div>
              <div class="carousel-item">
                <img src="https://www.imgacademy.com/sites/default/files/legacyhotel.jpg" class="d-block w-100" alt="..." />
              </div>
            </div>
          </div>
        </div>

      </div>


    {/* {/* sorovnoma */ /*"sorov_modal"*/} 
<div className="open_modal">
<div className=  {modal}>
      <h5>Arizangiz muvaffaqiyatli qabul qilindi ✅</h5>
      <p>Siz bilan tez orada bog’lanamiz 😊</p>
    </div>
    <div className= 'sorov_content' >
      <div className="savol">
        <h6>Sizni qiziqtirdimi? 🧐</h6>
        <p>Raqamingizni qoldiring, biz sizga yana qo'ng'iroq qilamiz📱</p>
      </div>
      <div className="sorov_btn">
        <input ref={usst} type="number" placeholder='  +998 Raqamingizni yozing'/>
        <button onClick={opnmadal} onDoubleClick={removmadal}>Yuborish</button>
      </div>
    </div>
</div>

{/* bottom */}

    <div className={buton}>
    <div className="bottom_bir">
    <div className="ul_li">
        <li>Biz haqimizda</li>
        <li>Katalog</li>
        <li>Aksiya</li>
        <li>Manzilimiz</li>
      </div>
      <div className="ul_img">
        <li><img src={ferbook} alt="" /></li>
        <li><img src={tviter} alt="" /></li>
        <li><img src={vie} alt="" /></li>
        <li><img src={youtb} alt="" /></li>
      </div>
    </div>
    <hr className='hr'/>
    <div className="bottom_ikki">
      <p>© 2021 Dream Cloud. Barcha huquqlar himoyalangan.</p>
      <div className="bottom_img">
        <p>desigend and develped in</p>
        <img src={grup} alt="" />
      </div>
    </div>
    </div>

  
    </div>
  )
}

export default HomeIkki