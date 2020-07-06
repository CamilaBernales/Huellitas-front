import React, { useState } from "react";
import { Table, Button } from "react-bootstrap";
const ListadoCompras = ({ setComprasGuardadas }) => {
  const [compraGuardada, setCompraGuardada] = useState(
    JSON.parse(localStorage.getItem("compras")) || []
  );

  const eliminarUnProducto = (id) => {
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
  );
};

export default ListadoCompras;
