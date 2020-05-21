import React from "react";
import { Container, Row, Button } from "react-bootstrap";
import Producto from "../Producto";
import { Link } from "react-router-dom";
export default function Promociones() {
  let productos = [
    {
      id: "1",
      nombre: "Alimento Perro Cachorro",
      img: "http://lorempixel.com/286/180/animals/7/",
      precio: "2500",
      descripcion: "alimento para perros de entre 0 y 12 meses",
      esPromo: true,
    },
    {
      id: "2",
      nombre: "Alimento Gato Cachorro",
      img: "http://lorempixel.com/286/180/animals/8/",
      precio: "2500",
      descripcion: "alimento para gatos de entre 0 y 12 meses",
      esPromo: false,
    },
    {
      id: "3",
      nombre: "Alimento Perro Adulto",
      img: "http://lorempixel.com/286/180/animals/9/",
      precio: "3000",
      descripcion: "alimento para perros de entre 12 o mas años",
      esPromo: false,
    },
    {
      id: "4",
      nombre: "Alimento Conejo Cachorro",
      img: "http://lorempixel.com/286/180/animals/1/",
      precio: "2000",
      descripcion: "alimento para conejo de entre 0 y 12 meses",
      esPromo: true,
    },
    {
      id: "5",
      nombre: "Alimento Conejo Adulto",
      img: "http://lorempixel.com/286/180/animals/2/",
      precio: "2300",
      descripcion: "alimento para conejo de entre 0 y 12 meses",
      esPromo: true,
    },
    {
      id: "6",
      nombre: "Alimento Tortuga ",
      img: "http://lorempixel.com/286/180/animals/3/",
      precio: "2100",
      descripcion: "alimento para tortuga",
      esPromo: false,
    },
    {
      id: "7",
      nombre: "Alimento Hamster Cachorro",
      img: "http://lorempixel.com/286/180/animals/4/",
      precio: "3500",
      descripcion: "alimento para hamsters de entre 0 y 12 meses",
      esPromo: false,
    },
    {
      id: "8",
      nombre: "Alimento Hamsters Adulto",
      img: "http://lorempixel.com/286/180/animals/5/",
      precio: "2010",
      descripcion: "alimento para hamsters de entre 12 o mas años",
      esPromo: false,
    },
    {
      id: "9",
      nombre: "Alimento Gato adulto",
      img: "http://lorempixel.com/286/180/animals/6/",
      precio: "2300",
      descripcion: "alimento para gato adulto de 12 o mas años",
      esPromo: false,
    },
  ];

  return (
    <Container className="my-5">
      <h2 className="pb-3 mb-2 text-center">
        Aprovecha estas promociones unicas
      </h2>
      <Row>
        {productos.map((producto) =>
          producto.esPromo ? (
            <Producto key={producto.id} producto={producto} />
          ) : null
        )}
      </Row>
      <div className="d-flex justify-content-center ">
        <Button variant="light">
          <Link className="text-secondary" to="/tienda">Ver todos los productos</Link>
        </Button>
      </div>
    </Container>
  );
}
