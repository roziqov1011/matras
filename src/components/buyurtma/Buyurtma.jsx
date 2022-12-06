import React from "react";
import './Buyurtma.scss'

function Buyurtma() {
    return (
      <div className="Buyurtma">
            <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
                Buyurtma berish
            </button>


            <div class="modal fade " id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog">
                <div class="modal-content">
                <div class="modal-body buyrtma__modal">
                    
                </div>
                </div>
            </div>
            </div>
      </div>
    )
  }
  
  export default Buyurtma