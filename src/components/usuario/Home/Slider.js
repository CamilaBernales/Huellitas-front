import React from "react";
import { Carousel, Button } from "react-bootstrap";
import "../../../css/Home.css";


export default function Slider() {
  return (
    <Carousel className="carousel">
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="images/carrusel1.jpg"
          alt="First slide"
        />
        <Carousel.Caption>
          <em>
            {" "}
            <h3>Profesionales de calidad</h3>
          </em>
          <Button href="/equipo" size="lg"  className="btn-custom">
              Conocenos
          </Button>
          {/* <Button variant="outline-primary">Conocenos</Button>{' '} */}
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="images/carrusel2.jpg"
          alt="Third slide"
        />

        <Carousel.Caption>
          <em>
            <h3>Atención personalizada</h3>
          </em>
          <Button href="/turno" size="lg"  className="btn-custom">
              Solicitar turno
          </Button>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="images/carrusel3.jpg"
          alt="Third slide"
        />

        <Carousel.Caption>
          <em>
            <h3>Tienda con variedad de productos</h3>
          </em>
          <Button href="/tienda" size="lg"  className="btn-custom">
              Comprar
          </Button>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}
