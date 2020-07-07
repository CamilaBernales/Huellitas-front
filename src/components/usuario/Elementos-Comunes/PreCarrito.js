import React, { useEffect, useState } from "react";
import { Modal, Button, Table, Image, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import "../../../css/Precarrito.css";
const PreCarrito = ({ modalShow, onHide }) => {
  const [comprasLS, setComprasLS] = useState([]);
  const traerComprasLS = () => {
    let compras = JSON.parse(localStorage.getItem("compras"));
    setComprasLS(compras);
  };
  useEffect(() => {
    traerComprasLS();
  }, []);
  return (
    <Modal id="preCarrito" show={modalShow} onHide={onHide}>
      <Modal.Header closeButton className="text-align-center">
        <Modal.Title className="text-align-center">
          Tu carrito de compras
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Table responsive>
          <thead>
            <tr>
              <th>Producto</th>
              <th>Nombre</th>
              <th>Cantidad</th>
            </tr>
          </thead>
          <tbody>
            {comprasLS.map((compra) => (
              <tr>
                <td>
                  <Col xs={6} md={8} className="p-0 m-0">
                    <Image fluid src={compra.imagen} />
                  </Col>
                </td>
                <td>{compra.nombre}</td>
                <td>{compra.cantidad}</td>
              </tr>
            ))}
          </tbody>
        </Table>
        <Button className="w-100 text-align-center">
          <Link className="text-white" to="/carrito">
            ver carrito
          </Link>
        </Button>
      </Modal.Body>
    </Modal>
  );
};

export default PreCarrito;
