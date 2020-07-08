<<<<<<< HEAD
import React, { useState, useEffect, Fragment } from "react";
import { Table, Button, Alert } from "react-bootstrap";
const ListadoCompras = () => {
  const [comprasGuardads, setComprasGuardads] = useState(
=======
import React, { useState } from "react";
import { Table, Button } from "react-bootstrap";
const ListadoCompras = ({ setComprasGuardadas }) => {
  const [compraGuardada, setCompraGuardada] = useState(
>>>>>>> 5827dc034a1169fd8be811d4026fe36cc4b56d25
    JSON.parse(localStorage.getItem("compras")) || []
  );

  const eliminarUnProducto = (id) => {
<<<<<<< HEAD
    let compras = JSON.parse(localStorage.getItem("compras")) || [];
    let index = compras.findIndex((produc) => produc._id === id);
    let producto = compras[index];
    compras.splice(producto, 1);
    localStorage.setItem("compras", JSON.stringify(compras));
    setComprasGuardads(JSON.parse(localStorage.getItem("compras")));
    window.location.reload(true);
  };

  return (
    <Fragment>
      { (comprasGuardads.length === 0) ?
        <Alert variant="danger"><h5 className="m-auto text-center">No hay productos en el carrito</h5></Alert>
      :
        <div>
          <Table responsive>
            <thead>
              <tr>
                <th>Nombre Producto</th>
                <th>Cantidad</th>
                <th>Precio</th>
                <th>Eliminar</th>
              </tr>
            </thead>
            <tbody>
              {comprasGuardads.map((compra) => (
                <tr key={compra._id}>
                  <td>{compra.nombre}</td>
                  <td>{compra.cantidad}</td>
                  <td>{compra.precio}</td>
                  <td>
                    <Button onClick={() => eliminarUnProducto(compra._id)}>
                      <i class="fas fa-trash fa-1x"></i>
                    </Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </div>
      }
    </Fragment>
=======
    let index = compraGuardada.findIndex((produc) => produc.id === id);
    let producto = compraGuardada[index];
    compraGuardada.splice(producto, 1);
    localStorage.setItem("compras", JSON.stringify(compraGuardada));
    setCompraGuardada(JSON.parse(localStorage.getItem("compras")));
    setComprasGuardadas(JSON.parse(localStorage.getItem("compras")).length);
  };

  return (
    <div>
      <Table responsive>
        <thead>
          <tr>
            <th>Nombre Producto</th>
            <th>Cantidad</th>
            <th>Precio</th>
            <th>Eliminar</th>
          </tr>
        </thead>
        <tbody>
          {compraGuardada.map((compra) => (
            <tr key={compra._id}>
              <td>{compra.nombre}</td>
              <td>{compra.cantidad}</td>
              <td>{compra.precio}</td>
              <td>
                <Button onClick={() => eliminarUnProducto(compra._id)}>
                  <i class="fas fa-trash fa-1x"></i>
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
>>>>>>> 5827dc034a1169fd8be811d4026fe36cc4b56d25
  );
};

export default ListadoCompras;
