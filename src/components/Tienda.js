import React from "react";
import { Container, Row} from "react-bootstrap";
import Producto from '../components/Producto'
const Tienda = () => {
  let productos = [
    {
      id: "1",
      nombre: "Alimento Perro Cachorro",
      precio: "2500",
      descripcion: "alimento para perros de entre 0 y 12 meses",
    },
    {
      id: "2",
      nombre: "Alimento Gato Cachorro",
      precio: "2500",
      descripcion: "alimento para gatos de entre 0 y 12 meses",
    },
    {
      id: "3",
      nombre: "Alimento Perro Adulto",
      precio: "3000",
      descripcion: "alimento para perros de entre 12 o mas años",
    },
    {
      id: "4",
      nombre: "Alimento Perro Cachorro",
      precio: "2000",
      descripcion: "alimento para perros de entre 0 y 12 meses",
    },
    {
      id: "5",
      nombre: "Alimento Gato Cachorro",
      precio: "2300",
      descripcion: "alimento para gatos de entre 0 y 12 meses",
    },
    {
      id: "6",
      nombre: "Alimento Perro Cachorro",
      precio: "2100",
      descripcion: "alimento para perros de entre 0 y 12 meses",
    },
    {
      id: "7",
      nombre: "Alimento Hamster Cachorro",
      precio: "3500",
      descripcion: "alimento para hamsters de entre 0 y 12 meses",
    },
    {
      id: "8",
      nombre: "Alimento Hamsters Adulto",
      precio: "2010",
      descripcion: "alimento para hamsters de entre 12 o mas años",
    },
    {
      id: "9",
      nombre: "Alimento Gato adulto",
      precio: "2300",
      descripcion: "alimento para perros de 12 o mas años",
    },
  ];

  return (
    <div>
      <Container>
       <Row className="m-auto">
            {productos.map(producto => (
                <Producto 
                    key={producto.id}
                    producto={producto}
                />
            ))}
        </Row>
        </Container>
    </div>
  );
};

export default Tienda;
