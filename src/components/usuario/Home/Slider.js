import React from "react";
import { Carousel, Button } from "react-bootstrap";
import "../../../css/Home.css";
// import Gato from "../../../img/imagenes-slider/Gato.jpg"
import PerroCorriendo from "../../../img/imagenes-slider/Perro-Corriendo.jpg";
import BirdShop from "../../../img/imagenes-slider/pajaro-comprando.jpg";
import Veterinario from "../../../img/imagenes-slider/veterinario.jpg";

export default function Slider() {
  return (
    <Carousel className="carousel">
      <Carousel.Item>
        <img
          className="d-block w-100 h-100"
          src={Veterinario}
          alt="First slide"
        />
        <Carousel.Caption>
          <em>
            {" "}
            <h3 className="h3-slider">Profesionales de calidad</h3>
          </em>
          <Button href="/equipo" size="lg" className="btn-custom">
            <strong>Conocenos</strong>
          </Button>
          {/* <Button variant="outline-primary">Conocenos</Button>{' '} */}
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 h-100"
          src={PerroCorriendo}
          alt="Third slide"
        />

        <Carousel.Caption>
          <em>
            <h3 className="h3-slider">Atención personalizada</h3>
          </em>
          <Button href="/turno" size="lg" className="btn-custom">
            Solicitar turno
          </Button>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100 h-100" src={BirdShop} alt="Third slide" />

        <Carousel.Caption>
          <em>
            <h3 className="pb-2 h3-slider">Tienda con variedad de productos</h3>
          </em>
          <Button href="/tienda" size="lg" className="btn-custom">
            Comprar
          </Button>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}
