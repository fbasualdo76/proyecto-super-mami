import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import { Carousel } from 'react-bootstrap';
const Slider2 = () => {
 return (
    <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://via.placeholder.com/1200x400.png?text=Slide+1"
          alt="Slide 1"
        />
        <Carousel.Caption>
          <h3>Slide 1</h3>
          <p>Descripción del slide 1.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://via.placeholder.com/1200x400.png?text=Slide+2"
          alt="Slide 2"
        />
        <Carousel.Caption>
          <h3>Slide 2</h3>
          <p>Descripción del slide 2.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://via.placeholder.com/1200x400.png?text=Slide+3"
          alt="Slide 3"
        />
        <Carousel.Caption>
          <h3>Slide 3</h3>
          <p>Descripción del slide 3.</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
 );
};

export default Slider2;