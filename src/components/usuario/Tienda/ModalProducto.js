import React, { useState, useEffect } from "react";
import { Modal, Col, Row, Button, Form, Alert } from "react-bootstrap";
import alimento from "../../../img/productos/alimento.jpg";
import formasPagos from "../../../img/banner-mercadopago-producto.png";
import InputCantidad from "./InputCantidad";

export default function MyVerticallyCenteredModal({
  modalShow,
  producto,
  setModalShow,
  onHide,
}) {
  const [cantidad, setCantidad] = useState(1);
  const handleCantidad = (e) => {
    setCantidad(([e.target.name] = e.target.value));
  };
  const [productoAgregado, setProductoAgregado] = useState([]);
  const guardarProducto = () => {
    const compras = JSON.parse(localStorage.getItem("compras")) || [];
    console.log(productoAgregado);
    if (productoAgregado.cantidad > 1) {
      productoAgregado.precio *= productoAgregado.cantidad;
    }
    compras.push(productoAgregado);
    localStorage.setItem("compras", JSON.stringify(compras));
    window.alert("Producto agregado al carrito");
  };
  useEffect(() => {
    setProductoAgregado({ ...producto, cantidad });
    // eslint-disable-next-line
  }, [cantidad]);
  return (
    <Modal
      show={modalShow}
      onHide={onHide}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          {producto.nombre}- ${producto.precio}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Row>
          <Col lg={6}>
            <img className="img-fluid" alt="alimento" src={producto.imagen} />
          </Col>
          <Col lg={6}>
            <Row>
              <h6>Detalles del producto</h6>
            </Row>
            <Row>
              <p>{producto.descripcion}</p>
            </Row>
            <Row>
              <Col>
                {producto.disponibilidad === "Disponible" ? (
                  <Row>
                    <Col>
                      <Alert variant="success">{producto.disponibilidad}</Alert>
                    </Col>
                    <Col>
                      <Form.Control
                        value={cantidad}
                        name="cantidad"
                        onChange={handleCantidad}
                        size="sm"
                        type="number"
                        max="5"
                        min="1"
                        placeHolder="Cantidad"
                      />
                    </Col>
                  </Row>
                ) : (
                  <Row>
                    <Col>
                      <Alert variant="danger">{producto.disponibilidad}</Alert>
                    </Col>
                    <Col>
                      <Form.Control
                        disabled
                        onChange={handleCantidad}
                        name="cantidad"
                        size="sm"
                        type="number"
                        max="5"
                        placeHolder="Cantidad"
                      />
                    </Col>
                  </Row>
                )}
              </Col>
            </Row>
            <Row>
              {producto.disponibilidad === "Disponible" ? (
                <Button onClick={() => guardarProducto()}>Comprar</Button>
              ) : (
                <Button disabled>Comprar</Button>
              )}
            </Row>
            <Row>
              <img
                className="img-fluid"
                alt="formas de pago"
                src={formasPagos}
              />
            </Row>
          </Col>
        </Row>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}
