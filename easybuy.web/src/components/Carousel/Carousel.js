import React from "react";
import './Carousel.css'
// import "bootstrap/dist/css/bootstrap.min.css";
// import "bootstrap/dist/js/bootstrap.bundle.min.js";

function Carousel() {
    return (
        <div id="carouselWithImages" className="carousel slide" data-bs-ride="carousel" data-bs-interval="2000">
            <div className="carousel-inner">
            <div className="carousel-item active">
                    <div className="carousel-content-container">
                        <div className="carousel-text">
                            Text content goes here. You can add more text as needed.
                        </div>
                        <div className="carousel-img-container">
                            <img className="carousel-img" src="mobiles_c.jpg" alt="mobiles" />
                        </div>
                    </div>
                </div>
            </div>

            {/* Carousel Controls */}
            <button className="carousel-control-prev" type="button" href="#carouselWithImages" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            </button>
            <button className="carousel-control-next" type="button" href="#carouselWithImages" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
            </button>
        </div>
    );
}

export default Carousel;
