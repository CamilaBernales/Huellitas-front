import React, { useState, useEffect } from "react";
import { Form, Col, Alert, Row } from "react-bootstrap";

export default function InputCantidad({ producto }) {
  const [cantidad, setCantidad] = useState(1);

  const handleCantidad = (e) => {
    e.preventDefault();
    setCantidad(([e.target.name] = e.target.value));
  };

  return (
    <>
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
                onChange={handleCantidad}
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
                min="1"
                placeHolder="Cantidad"
              />
            </Col>
          </Row>
        )}
      </Col>
    </>
  );
}
