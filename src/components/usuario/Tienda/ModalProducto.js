import React, { useState, useEffect } from "react";
import { Modal, Col, Row, Button, Form, Alert } from "react-bootstrap";
import formasPagos from "../../../img/banner-mercadopago-producto.png";

export default function MyVerticallyCenteredModal(props) {
  const { modalShow, producto, setComprasGuardadas, onHide } = props;
  const [cantidad, setCantidad] = useState(1);
  const [productoAgregado, setProductoAgregado] = useState([]);
  const [productoRepetido, setProductoRepetido] = useState(false);

  const handleCantidad = (e) => {
    setCantidad(([e.target.name] = e.target.value));
  };
  const guardarProducto = (id) => {
    const compras = JSON.parse(localStorage.getItem("compras")) || [];
    let buscado = compras.find((prod) => prod._id === id);
    if (buscado) {
      setProductoRepetido(true);
    } else {
      if (productoAgregado.cantidad > 1) {
        productoAgregado.precio *= productoAgregado.cantidad;
      }
      compras.push(productoAgregado);
      localStorage.setItem("compras", JSON.stringify(compras));
      window.alert("Producto agregado al carrito");
      setComprasGuardadas(compras.length);
    }
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
      {productoRepetido ? (
        <Alert variant="warning">
          Este producto ya se encuentra agregado a su carrito de compras. No
          puede volver a agregarlo
        </Alert>
      ) : null}
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
                        placeholder="Cantidad"
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
                        placeholder="Cantidad"
                      />
                    </Col>
                  </Row>
                )}
              </Col>
            </Row>
            <Row className="d-flex justify-content-end my-4 mx-2">
              {producto.disponibilidad === "Disponible" && !productoRepetido ? (
                <Button onClick={() => guardarProducto(producto._id)}>
                  Añadir al carrito
                </Button>
              ) : (
                <Button  disabled>Añadir al carrito</Button>
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
