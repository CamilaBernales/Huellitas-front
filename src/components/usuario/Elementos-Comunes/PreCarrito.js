import React from "react";
import ListadoCompras from "../Tienda/ListadoCompras";
import { Modal, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import "../../../css/Precarrito.css";
import PropTypes from "prop-types";
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
        {isLogIn ? (
          <Link className="text-white" to="/carrito">
            <Button variant="info" className="w-100 text-center my-3">
              Iniciar compra
            </Button>
          </Link>
        ) : (
          <Link to="/login">
            <Button variant="info" className="w-100 text-center my-3">
              Iniciar compra
            </Button>
          </Link>
        )}
      </Modal.Body>
    </Modal>
  );
};
PreCarrito.propTypes = {
  modalShow: PropTypes.bool,
  onHide: PropTypes.func,
  setComprasGuardadas: PropTypes.func,
  comprasGuardadas: PropTypes.number,
  isLogIn: PropTypes.bool,
};
export default PreCarrito;
