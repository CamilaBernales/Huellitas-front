import React from "react";
import ListadoCompras from "../Tienda/ListadoCompras";
import { Modal, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import "../../../css/Precarrito.css";
const PreCarrito = (props) => {
  const {
    modalShow,
    onHide,
    setComprasGuardadas,
    comprasGuardadas,
    isLogIn,
  } = props;
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
        />{" "}
        <Link className="text-white" to="/carrito">
          {isLogIn ? (
            <Button variant="info" className="w-100 text-center my-3">
              Iniciar compra
            </Button>
          ) : (
            <Button disabled variant="info" className="w-100 text-center my-3">
              Iniciar compra
            </Button>
          )}
        </Link>
      </Modal.Body>
    </Modal>
  );
};

export default PreCarrito;
