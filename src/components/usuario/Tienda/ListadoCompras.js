import React, { useState, useEffect } from "react";
import { Table, Button, Col, Image, Alert } from "react-bootstrap";
import PropTypes from "prop-types";

const ListadoCompras = (props) => {
  const { setComprasGuardadas, comprasGuardadas } = props;
  const [comprasLS, setComprasLS] = useState(
    JSON.parse(localStorage.getItem("compras")) || []
  );
  const [carroVacio, setCarroVacio] = useState(false);
  const eliminarUnProducto = (id) => {
    let filtradoCompras = comprasLS.filter((produc) => produc._id !== id);
    localStorage.setItem("compras", JSON.stringify(filtradoCompras));
    setComprasGuardadas(filtradoCompras.length);
  };
  useEffect(() => {
    setComprasLS(JSON.parse(localStorage.getItem("compras")) || []);
    if (comprasLS.length === 0) {
      setCarroVacio(true);
    }
  }, [comprasLS.length, comprasGuardadas]);
  return (
    <div>
      {carroVacio ? (
        <Alert variant="primary">
          <h6> Aún no tienes nada agregado a tu carrito</h6>
        </Alert>
      ) : (
        <Col sm={12} md={8} lg={10}>
        <Table responsive="sm">
          <thead>
            <tr className="th-usuario">
              <th>Producto</th>
              <th>Nombre</th>
              <th>Cantidad</th>
              <th>Precio</th>
              <th>Eliminar</th>
            </tr>
          </thead>
          <tbody>
            {comprasLS.map((compra) => (
              <tr key={compra._id}>
                <td>
                  <Col key={compra._id} xs={10} sm={8} className="p-0 m-0">
                    <Image fluid src={compra.imagen} />
                  </Col>
                </td>
                <td>{compra.nombre}</td>
                <td>{compra.cantidad}</td>
                <td>{compra.precio}</td>
                <td>
                  <Button
                    className="btn btn-danger"
                    onClick={() => eliminarUnProducto(compra._id)}>
                    <i className="fas fa-trash fa-1x"></i>
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
        </Col>
      )}
    </div>
  );
};
ListadoCompras.propTypes = {
  setComprasGuardadas: PropTypes.func,
  comprasGuardadas: PropTypes.number,
};

export default ListadoCompras;
