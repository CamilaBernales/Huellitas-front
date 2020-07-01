import React, { useState, useEffect } from "react";
import { Table, Button } from "react-bootstrap";
const ListadoCompras = () => {
  const [comprasGuardads, setComprasGuardads] = useState(
    JSON.parse(localStorage.getItem("compras")) || []
  );

  const eliminarUnProducto = (id) => {
    let compras = JSON.parse(localStorage.getItem("compras")) || [];
    let index = compras.findIndex((produc) => produc.id === id);
    let producto = compras[index];
    compras.splice(producto, 1);
    localStorage.setItem("compras", JSON.stringify(compras));
    setComprasGuardads(JSON.parse(localStorage.getItem("compras")));
    window.location.reload(true);
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
  );
};

export default ListadoCompras;
