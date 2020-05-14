import React, { useEffect, useState } from "react";
import { Container, Table, Button } from "react-bootstrap";

const Carrito = () => {

  const [suma, setSuma] = useState(0);
  
  const eliminarUnProducto = (id) => {

    let compras = JSON.parse(localStorage.getItem("compras")) || [];  
    let producto = compras.find(produc => produc.id === id);
    if(producto){
      compras.splice(producto, 1);
      localStorage.setItem('compras', JSON.stringify(compras));
    }
  }

  const sumaTotal = () => {
    let compras = JSON.parse(localStorage.getItem("compras")) || [];
    let total  = 0;
    for (let index = 0; index < compras.length; index++) {
        const element = compras[index];
        total  += Number(element.precio)
    }
    setSuma(
      total
    )
  }

  const listarCompra = () => {
    let compras = JSON.parse(localStorage.getItem("compras")) || [];
    let tabla = [];
   
    for (let index = 0; index < compras.length; index++) {
      let element = compras[index];
      tabla.push(<tr>
        <td>{element.nombre}</td>
        <td>1</td>
        <td>Descuento</td>
        <td>{element.precio}</td>
        <td>
          <button onClick={() =>eliminarUnProducto(element.id)}>
            <i class="fas fa-trash fa-2x" ></i>
          </button>
        </td>
      </tr>)
     
    }
    return(
      tabla
    )

  };

  useEffect(() => {
    sumaTotal()
    
  }, [])

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
    <tbody>{listarCompra()}</tbody>
      </Table>
      <div className="d-flex m-3 justify-content-center font-weight-bold">
      <h3 className="text-uppercase text-monospace text-lg-left"> Total a pagar:  {" "}  </h3>
      <h3 className="text-uppercase text-monospace text-lg-left"id="total"> {suma} </h3>
      </div>
      <Button className="btn btn-success mt-3 w-100  text-uppercase font-weight-bold">
        Comprar!
      </Button>
    </Container>
  );
};

export default Carrito;
