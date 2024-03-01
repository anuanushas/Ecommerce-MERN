import React from "react";

const Carousel = () => {
  return (
    <div
      id="carouselExampleAutoplaying"
      className="carousel slide"
      data-bs-ride="carousel"
    >
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img
            src="https://rukminim1.flixcart.com/fk-p-flap/1600/270/image/4b0762342e0f4dc3.jpeg?q=20"
            className="d-block w-100"
            alt="..."
          />
        </div>
        <div className="carousel-item">
          <img
            src="https://rukminim1.flixcart.com/fk-p-flap/1600/270/image/5a2311ff9e965a96.jpeg?q=20"
            className="d-block w-100"
            alt="..."
          />
        </div>
        <div className="carousel-item">
          <img
            src="https://rukminim1.flixcart.com/fk-p-flap/1600/270/image/0fb08c091c6937fb.jpeg?q=20"
            className="d-block w-100"
            alt="..."
          />
        </div>
      </div>
      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExampleAutoplaying"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true" />
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#carouselExampleAutoplaying"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true" />
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
};

export default Carousel;
