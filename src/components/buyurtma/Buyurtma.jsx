import React from "react";
import './Buyurtma.scss'

function Buyurtma() {
    return (
      <div className="Buyurtma">
            <button type="button" class="btn btn-primary button__modal" data-bs-toggle="modal" data-bs-target="#exampleModal">
                Buyurtma berish
            </button>


            <div class="modal fade " id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog">
                <div class="modal-content" style={{height: '676px'}}>
                <div class="modal-body buyrtma__modal">
                    <div className="buyurtma__block">
                        <p className="title__b">Buyurtma qilish</p>
                        <input className="name__yoz" type="text" placeholder="Ismingizni yozing"/>
                        <div className="raqam">
                          <button className="raqam__button">+998</button>
                          <input type="number" placeholder="Raqamingizni yozing"/>
                        </div>
                        <p className="tanlash">Mahsulotlarni toifasini tanlang</p>
                        <select className="cateygoreya">
                            <option value="#"></option>
                        </select>
                        <p className="tanlash">Miqdorni tanlang</p>
                        <div className="miqdor">
                          <button className="button_1">-</button>
                          <span className="miqdor__sonni">1</span>
                          <button className="button_2">+</button>
                        </div>
                    </div>
                    <div class="">
                      <button class="btn btn-primary " data-bs-target="#exampleModalToggle2" data-bs-toggle="modal" data-bs-dismiss="modal">Yuborish</button>
                    </div>
                </div>
                </div>
            </div>
            </div>
            <div class="modal fade" id="exampleModalToggle2" aria-hidden="true" aria-labelledby="exampleModalToggleLabel2" tabindex="-1">
            <div class="modal-dialog modal-dialog-centered">
              <div class="modal-content">
                <div class="modal-header">
                  <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                  Hide this modal and show the first with the button below.
                </div>
              </div>
            </div>
          </div>
      </div>
    )
}
  
  export default Buyurtma