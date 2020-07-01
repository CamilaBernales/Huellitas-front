import React, { useState, Fragment } from "react";
import { Col, Card, Button, Alert, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import ModalProducto from "./ModalProducto";
import "./../../../css/Tienda.css";
const Producto = ({ producto }) => {
  const [productoAgregado, setProductoAgregado] = useState(
    JSON.parse(localStorage.getItem("compras")) || []
  );
  const [alert, setAalert] = useState(false);
  const guardarProducto = (producto) => {
    console.log(producto);
    const compras = JSON.parse(localStorage.getItem("compras")) || [];
    const index = compras.findIndex((compra) => compra.id === producto._id);
    let compra = compras[index];
    if (compra) {
      if (compra.cantidadAComprar < 5) {
        setAalert(false);

        if (
          window.confirm("Quieres agregar este producto de nuevo a tu carrito?")
        ) {
          compra.cantidadAComprar += 1;
          compra.precio = Number(compra.precio) + Number(compra.precio);
          setProductoAgregado([...productoAgregado, producto]);
          localStorage.setItem("compras", JSON.stringify(compras));
          window.alert("Producto agregado al carrito");
        }
      } else {
        setAalert(true);
        return;
      }
    } else {
      producto.agregado = true;
      producto.cantidadAComprar += 1;
      setProductoAgregado([...productoAgregado, producto]);
      compras.push(producto);
      localStorage.setItem("compras", JSON.stringify(compras));
      window.alert("Producto agregado al carrito");
    }
  };

  const { _id, nombre, precio, imagen, disponibilidad, espromo } = producto;

  const [modalShow, setModalShow] = React.useState(false);
  const onHide = () => {
    setModalShow(false);
  };

  return (
    <Fragment>
      {alert ? (
        <Alert variant="danger">
          Lo sentimos, no puedes agregar más de cinco productos del mismo tipo a
          tu compra
        </Alert>
      ) : null}
      <Col sm={12} md={6} xl={4} className="d-flex justify-content-center p-3 ">
        <Card
          key={_id}
          border="primary"
          style={{
            width: "18rem",
          }}
        >
          <Card.Img
            variant="top"
            className="img-fluid imagentienda"
            src={imagen}
          />
          <Card.Body>
            <Card.Title>{nombre}</Card.Title>
            <Card.Text>
              <Row>Precio: ${precio}</Row>
              <Row>
                {producto.disponibilidad === "No Disponible" ? (
                  <Alert variant="danger">{producto.disponibilidad}</Alert>
                ) : (
                  <Alert variant="success">{producto.disponibilidad}</Alert>
                )}
              </Row>
            </Card.Text>
          </Card.Body>
          <Card.Footer>
            <Button
              renderAs="button"
              onClick={() => setModalShow(true)}
              className="w-100"
              size="sm"
            >
              Detalles
            </Button>
            <ModalProducto
              guardarProducto={guardarProducto}
              producto={producto}
              modalShow={modalShow}
              setModalShow={setModalShow}
              onHide={onHide}
            />
          </Card.Footer>
        </Card>
      </Col>
    </Fragment>
  );
};

export default Producto;
