import React, { Fragment } from "react";
import { Col, Card, Button, Alert, Row } from "react-bootstrap";
import ModalProducto from "./ModalProducto";
import "./../../../css/Tienda.css";
const Producto = ({ producto, setComprasGuardadas }) => {
  const { _id, nombre, precio, imagen, disponibilidad } = producto;
  const [modalShow, setModalShow] = React.useState(false);
  const onHide = () => {
    setModalShow(false);
  };

  return (
    <Fragment>
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
<<<<<<< HEAD
            <div>
              <Row>Precio: ${precio}</Row>
              <Row>
                {disponibilidad === "No Disponible" ? (
                  <Alert variant="danger">{disponibilidad}</Alert>
                ) : (
                  <Alert variant="success">{disponibilidad}</Alert>
                )}
              </Row>
            </div>
=======
            <Row>Precio: ${precio}</Row>
            <Row>
              {disponibilidad === "No Disponible" ? (
                <Alert variant="danger">{disponibilidad}</Alert>
              ) : (
                <Alert variant="success">{disponibilidad}</Alert>
              )}
            </Row>
>>>>>>> 5827dc034a1169fd8be811d4026fe36cc4b56d25
          </Card.Body>
          <Card.Footer>
            <Button
              renderas="button"
              onClick={() => setModalShow(true)}
              className="w-100"
              size="sm"
            >
              Detalles
            </Button>
            <ModalProducto
              producto={producto}
              modalShow={modalShow}
              setModalShow={setModalShow}
              onHide={onHide}
              setComprasGuardadas={setComprasGuardadas}
            />
          </Card.Footer>
        </Card>
      </Col>
    </Fragment>
  );
};

export default Producto;
