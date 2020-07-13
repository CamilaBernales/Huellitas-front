import React from "react";
import {Link} from 'react-router-dom'
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
          <Button size="lg"  className="btn-custom">
            <Link className="color-texto" to="/equipo">
              Conocenos
            </Link>
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
          <Button size="lg" className="btn-custom">
            <Link className="color-texto" to="/turno">
              Solicitar turno
            </Link>
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
          <Button size="lg" className="btn-custom">
            <Link className="color-texto" to="/tienda">
              Comprar
            </Link>
          </Button>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}
