import React from 'react'
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js'
const Carousel = () => {
  return (
    <div className="carouselContainer">
      <div
        id="carouselExampleControls"
        class="carousel slide"
        data-bs-ride="carousel"
      >
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img
              src="/Assets/article_topimage_vannkraft.jpg"
              class="d-block w-100"
              alt="Kraftverk1"
            />
          </div>
          <div class="carousel-item">
            <img
              src="/Assets/vannkraft-1-foto-shutterstock-ntb.jpg"
              class="d-block w-100"
              alt="Kraftverk2"
            />
          </div>
          <div class="carousel-item">
            <img
              src="/Assets/Vannkraft.jpg"
              class="d-block w-100"
              alt="Kraftverk3"
            />
          </div>
        </div>
        <button
          class="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleControls"
          data-bs-slide="prev"
        >
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button
          class="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleControls"
          data-bs-slide="next"
        >
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  )
}
export default Carousel
