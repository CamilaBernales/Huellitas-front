import React, { useState, useEffect } from "react";
import { Modal, Col, Row, Button, Form, Alert } from "react-bootstrap";
import formasPagos from "../../../img/banner-mercadopago-producto.png";

export default function MyVerticallyCenteredModal(props) {
  const {
    modalShow,
    producto,
    setComprasGuardadas,
    onHide,
  } = props
  console.log(props)
  const [cantidad, setCantidad] = useState(1);
  const [productoAgregado, setProductoAgregado] = useState([]);
  const handleCantidad = (e) => {
    setCantidad(([e.target.name] = e.target.value));
  };
  const guardarProducto = () => {
    const compras = JSON.parse(localStorage.getItem("compras")) || [];
    if (productoAgregado.cantidad > 1) {
      productoAgregado.precio *= productoAgregado.cantidad;
    }
    compras.push(productoAgregado);
    localStorage.setItem("compras", JSON.stringify(compras));
    window.alert("Producto agregado al carrito");
    setComprasGuardadas(compras.length);
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
