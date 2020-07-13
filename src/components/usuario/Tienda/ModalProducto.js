import React, { useState, useEffect } from "react";
import { Modal, Col, Row, Button, Form, Alert } from "react-bootstrap";
import formasPagos from "../../../img/banner-mercadopago-producto.png";
import "./../../../css/Tienda.css";

export default function MyVerticallyCenteredModal({
  modalShow,
  producto,
  setModalShow,
  onHide,
  setComprasGuardadas
}) {
  const [cantidad, setCantidad] = useState(1);
  const [productoAgregado, setProductoAgregado] = useState([]);
  const handleCantidad = (e) => {
    setCantidad(([e.target.name] = e.target.value));
  };
  const guardarProducto = () => {
    const compras = JSON.parse(localStorage.getItem("compras")) || [];
    console.log(productoAgregado);
    if (productoAgregado.cantidad > 1) {
      productoAgregado.precio *= productoAgregado.cantidad;
    }
    compras.push(productoAgregado);
    localStorage.setItem("compras", JSON.stringify(compras));
    window.alert("Producto agregado al carrito");
    setComprasGuardadas(JSON.parse(localStorage.getItem("compras")).length);
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
        <Modal.Title id="contained-modal-title-vcenter" className="text-color">
          {producto.nombre}- ${producto.precio}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Row>
          <Col lg={6}>
            <img className="img-fluid" alt="alimento" src={producto.imagen} />
          </Col>
          <Col lg={6}>
            <Row className="text-color">
              <h6>Detalles del producto</h6>
            </Row>
            <Row className="text-color">
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
                <Button 
                onClick={() => guardarProducto()}
                className="boton"
                >
                  Comprar
                </Button>
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
        <Button 
        onClick={onHide}
        className="boton"
        >Close</Button>
      </Modal.Footer>
    </Modal>
  );
}
