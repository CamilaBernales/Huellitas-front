import React, { useEffect, useState } from "react";
import ListadoCompras from "../Tienda/ListadoCompras";
import { Modal, Button, Table, Image, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import "../../../css/Precarrito.css";
const PreCarrito = (props) => {
  const { modalShow, onHide, setComprasGuardadas, comprasGuardadas } = props;
  console.log(props);
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
        <Link to="/carrito">ver carrito</Link>
      </Modal.Body>
    </Modal>
  );
};

export default PreCarrito;
