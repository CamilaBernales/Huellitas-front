import React, { useEffect } from "react";
import { Container, Table, Button } from "react-bootstrap";

const Carrito = () => {
  const listarCompra = () => {
    let compras = JSON.parse(localStorage.getItem("compras")) || [];
    let tabla = "";
    let suma = 0;
    for (let index = 0; index < compras.length; index++) {
      let element = compras[index];
      tabla += `<tr><td>${element.nombre}</td><td>1</td><td>Descuento</td><td>${element.precio}</td><td><i class="fas fa-trash fa-2x"></i></td></tr>`;
      suma += (Number(element.precio))
    }
    document.getElementById("productosAgregados").innerHTML = tabla;
    document.getElementById("total").innerHTML = suma;

  };

  // const eliminarUnProducto = () => {

  // }
  useEffect(() => {
    listarCompra();
  }, []);

  return (
    <Container className="mt-5 mb-5">
      <Table responsive>
        <thead>
          <tr>
            <th>Nombre Producto</th>
            <th>Cantidad</th>
            <th>Descuento</th>
            <th>Total</th>
            <th>Eliminar</th>
          </tr>
        </thead>
        <tbody id="productosAgregados"></tbody>
      </Table>
      <div className="d-flex m-3 justify-content-center font-weight-bold">
      <h3 className="text-uppercase text-monospace text-lg-left"> Total a pagar:  {" "}  </h3>
      <h3 className="text-uppercase text-monospace text-lg-left"id="total"> {" "} </h3>
      </div>
      <Button className="btn btn-success mt-3 w-100  text-uppercase font-weight-bold">
        Comprar!
      </Button>
    </Container>
  );
};

export default Carrito;
