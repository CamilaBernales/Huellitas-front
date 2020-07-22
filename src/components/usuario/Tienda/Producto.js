import React, { Fragment } from "react";
import { Col, Card, Button, Alert, Row } from "react-bootstrap";
import ModalProducto from "./ModalProducto";
import "./../../../css/Tienda.css";
import PropTypes from "prop-types";

const Producto = (props) => {
  const { producto, setComprasGuardadas } = props;
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
          border="info"
          style={{
            width: "18rem",
          }}
          className="card-custom"
        >
          <Card.Img
            variant="top"
            className="img-fluid imagentienda"
            src={imagen}
          />
          <Card.Body>
            <Card.Title
              className=" my-3 d-flex justify-content-center text-color"
              align="center"
            >
              {nombre}
            </Card.Title>
            <div>
              <Row className="d-flex justify-content-center text-color">
                <Col>${precio}</Col>
                <Col>
                  {disponibilidad === "No Disponible" ? (
                    <Alert variant="danger">{disponibilidad}</Alert>
                  ) : (
                    <Alert variant="success">{disponibilidad}</Alert>
                  )}
                </Col>
              </Row>
              <Row>
                <Button
                  renderas="button"
                  onClick={() => setModalShow(true)}
                  className="mx-4 boton-card flecha"
                  size="sm"
                >
                  Ver producto
                </Button>
              </Row>
            </div>
          </Card.Body>

          <ModalProducto
            producto={producto}
            modalShow={modalShow}
            setModalShow={setModalShow}
            onHide={onHide}
            setComprasGuardadas={setComprasGuardadas}
          />
        </Card>
      </Col>
    </Fragment>
  );
};

Producto.propTypes = {
  setComprasGuardadas: PropTypes.func,
  producto: PropTypes.object,
};
export default Producto;
