import React, { useState, Fragment } from "react";
import { Table, Button, Alert } from "react-bootstrap";
const ListadoCompras = ({ setComprasGuardadas }) => {
  const [compraGuardada, setCompraGuardada] = useState(
    JSON.parse(localStorage.getItem("compras")) || []
  );

  const eliminarUnProducto = (id) => {
    let compras = JSON.parse(localStorage.getItem("compras")) || [];
    let index = compras.findIndex((produc) => produc._id === id);
    let producto = compras[index];
    compras.splice(producto, 1);
    localStorage.setItem("compras", JSON.stringify(compras));
    setCompraGuardada(JSON.parse(localStorage.getItem("compras")));
    window.location.reload(true);
  };

  return (
    <Fragment>
      { (compraGuardada.length === 0) ?
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
      }
    </Fragment>
  );
};

export default ListadoCompras;
