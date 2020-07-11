import React, { useState, useEffect } from "react";
import { Table, Button, Col, Image, Alert } from "react-bootstrap";
const ListadoCompras = (props) => {
  const { setComprasGuardadas, comprasGuardadas } = props;
  const [compraGuardada, setCompraGuardada] = useState(
    JSON.parse(localStorage.getItem("compras")) || []
  );
  const [carroVacio, setCarroVacio] = useState(false);
  const eliminarUnProducto = (id) => {
    let filtradoCompras = compraGuardada.filter((produc) => produc._id !== id);
    localStorage.setItem("compras", JSON.stringify(filtradoCompras));
    setComprasGuardadas(filtradoCompras.length);
  };
  useEffect(() => {
    setCompraGuardada(JSON.parse(localStorage.getItem("compras")) || []);
    if (compraGuardada.length === 0) {
      setCarroVacio(true);
    }
  }, [compraGuardada.length, comprasGuardadas]);
  return (
    <div>
      {carroVacio ? (
        <Alert variant="primary">
          Aún no tienes nada agregado a tu carrito
        </Alert>
      ) : (
        <Table responsive>
          <thead>
            <tr>
              <th>Producto</th>
              <th>Nombre</th>
              <th>Cantidad</th>
              <th>Precio</th>
              <th>Eliminar</th>
            </tr>
          </thead>
          <tbody>
            {compraGuardada.map((compra) => (
              <tr key={compra._id}>
                <td>
                  <Col xs={10} sm={8} className="p-0 m-0">
                    <Image fluid src={compra.imagen} />
                  </Col>
                </td>
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
      )}
    </div>
  );
};

export default ListadoCompras;
