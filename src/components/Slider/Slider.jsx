import React from "react";
import './slideer.css'
import matras from '../../img/img__home/matras.png'

function Slider() {
  return (
    <div className="Sliderr">
        <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img className="carusel-img" src={matras} alt="" />
          </div>
          <div className="carousel-item">
            <img  className="carusel-img" src={matras} alt="" />
          </div>
          <div className="carousel-item">
            <img className="carusel-img" src={matras} alt="" />
          </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  )
}

export default Slider