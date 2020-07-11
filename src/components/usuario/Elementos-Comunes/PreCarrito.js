import React from "react";
import ListadoCompras from "../Tienda/ListadoCompras";
import { Modal, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import "../../../css/Precarrito.css";
const PreCarrito = (props) => {
  const { modalShow, onHide, setComprasGuardadas, comprasGuardadas } = props;
  return (
    <Modal id="preCarrito" show={modalShow} onHide={onHide}>
      <Modal.Header closeButton className="text-align-center">
        <Modal.Title className="text-align-center">
          Tu carrito de compras
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <ListadoCompras
          setComprasGuardadas={setComprasGuardadas}
          comprasGuardadas={comprasGuardadas}
        />
        <Button variant="info" className="w-100 text-center my-3">
          {" "}
          <Link className="text-white" to="/carrito">Ver proceso de compra</Link>
        </Button>
      </Modal.Body>
    </Modal>
  );
};

export default PreCarrito;
