import React from 'react'
import Slider1 from "../../images/slider1.jpg"
import Slider2 from "../../images/slider2.jpg"
import Slider3 from "../../images/slider3.jpg"

const Carousel = () => {
    return (
        <div style={{marginTop:"160px"}}>
            <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src={Slider1} className="d-block w-100" alt="..." />
                    </div>
                    <div className="carousel-item">
                        <img src={Slider2} className="d-block w-100" alt="..." />
                    </div>
                    <div className="carousel-item">
                        <img src={Slider3} className="d-block w-100" alt="..." />
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

export default Carousel
