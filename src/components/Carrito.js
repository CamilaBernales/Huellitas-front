import React, { useEffect, useState, Fragment } from "react";
import { Container, Table, Button } from "react-bootstrap";
import Logo from './Header/Logo';
import Navbar from './Header/Navbar';

const Carrito = () => {
  const [comprasGuardada, setComprasGuardada] = useState(
    JSON.parse(localStorage.getItem("compras")) 
  );
  const [suma, setSuma] = useState(0);

  const eliminarUnProducto = (compra) => {
    console.log(compra);
    let compras = JSON.parse(localStorage.getItem("compras")) || [];
    let index = compras.findIndex((produc) => produc.id === compra.id);
    let producto = compras[index];
    if (producto.cantidadAComprar > 1) {
      producto.precio = Math.round(producto.precio / producto.cantidadAComprar);  
      producto.cantidadAComprar -= 1;
      setComprasGuardada([...comprasGuardada, producto]);
      localStorage.setItem("compras", JSON.stringify(compras));
    } else {
      if (producto.cantidadAComprar <= 1) {
        compras.splice(producto, 1);
        localStorage.setItem("compras", JSON.stringify(compras));
      }
    }
    sumaTotal();
  };

  const sumaTotal = () => {
    let compras = JSON.parse(localStorage.getItem("compras")) || [];
    let total = 0;
    for (let index = 0; index < compras.length; index++) {
      const element = compras[index];
      total += Number(element.precio);
    }
    setSuma(total);
  };

  const listarCompra = () => {
    let compras = JSON.parse(localStorage.getItem("compras")) || [];
    let tabla = [];

    for (let index = 0; index < compras.length; index++) {
      let element = compras[index];
      tabla.push(
        <tr>
          <td>{element.nombre}</td>
          <td>
            {element.cantidadAComprar}
            {/* <select onClick={handleCantidadProductos}>
          <option value="1" defaulValue>1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
        </select> */}
          </td>
          <td>Descuento</td>
          <td>{element.precio}</td>
          <td>
            <button onClick={() => eliminarUnProducto(element)}>
              <i class="fas fa-trash fa-2x"></i>
            </button>
          </td>
        </tr>
      );
    }
    return tabla;
  };

  useEffect(() => {
    sumaTotal();
    listarCompra();
  }, [comprasGuardada]);

  return (
    <Fragment>
      <Logo />
      <Navbar />
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
          <h3 className="text-uppercase text-monospace text-lg-left">
            {" "}
          Total a pagar:{" "}
          </h3>
          <h3 className="text-uppercase text-monospace text-lg-left" id="total">
            {" "}
            {suma}{" "}
          </h3>
        </div>
        <Button className="btn btn-success mt-3 w-100  text-uppercase font-weight-bold">
          Comprar!
      </Button>
      </Container>
    </Fragment>
  );
};

export default Carrito;
