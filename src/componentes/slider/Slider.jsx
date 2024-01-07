import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import slider1 from "../../assets/imgSlider/slider1.jpg"
import slider2 from "../../assets/imgSlider/slider2.jpg"
import slider3 from "../../assets/imgSlider/slider3.jpg"
const Slider = () => {
    return (
        <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel" style={{ marginTop: '5px', marginBottom: '5px' }}>
            <div className="carousel-inner">
                <div className="carousel-item active">
                    <img src={slider1} className="d-block w-100" alt="Imagen 1" />
                </div>
                <div className="carousel-item">
                    <img src={slider2} className="d-block w-100" alt="Imagen 2" />
                </div>
                <div className="carousel-item">
                    <img src={slider3} className="d-block w-100" alt="Imagen 3" />
                </div>
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Anterior</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Siguiente</span>
            </button>
        </div>
    );
};
export default Slider;