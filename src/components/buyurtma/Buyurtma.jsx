import React from "react";
import './Buyurtma.scss'

function Buyurtma() {
    return (
      <div className="Buyurtma">
            <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
                Buyurtma berish
            </button>


            <div className="modal fade " id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog">
                <div className="modal-content">
                <div className="modal-body buyrtma__modal">
                    
                </div>
                </div>
            </div>
            </div>
      </div>
    )
  }
  
  export default Buyurtma