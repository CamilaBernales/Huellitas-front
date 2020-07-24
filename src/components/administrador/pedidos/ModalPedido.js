import React from "react";
import { Table, Modal, Button, Row, Col } from "react-bootstrap";
import PropTypes from "prop-types";
import moment from "moment";

export default function ModalPedido({ pedido, compra, modalShow, onHide }) {
  return (
    <Modal
      id="modalCompras"
      show={modalShow}
      onHide={onHide}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Pedido {moment(compra.fecha).format("DD-MM-YYYY")}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Row>
          <Col xs={12} md={8}>
            <p>
              Nombre:
              <strong>
                {" "}
                {compra.nombre} {compra.apellido}
              </strong>
            </p>
            <p>
              Direccion:
              <strong> {compra.direccion}</strong>
            </p>
            <p>
              Telefono:
              <strong> {compra.telefono}</strong>
            </p>
          </Col>
        </Row>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>Producto</th>
              <th>Cantidad</th>
              <th>Precio</th>
            </tr>
          </thead>
          <tbody>
            {pedido.length !== 0
              ? pedido.map((p) => (
                  <tr key={p._id}>
                    <td>{p.nombre}</td>
                    <td>{p.cantidad}</td>
                    <td>${p.precio}</td>
                  </tr>
                ))
              : null}
            <tr>
              <td colSpan="2">
                <strong>Total</strong>
              </td>
              <td>
                <strong>
                  ${pedido.map((p) => p.precio).reduce((a, b) => a + b, 0)}
                </strong>
              </td>
            </tr>
          </tbody>
        </Table>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}
ModalPedido.propTypes = {
  modalShow: PropTypes.bool,
  onHide: PropTypes.func,
  compra: PropTypes.array,
  pedido: PropTypes.array,
};
