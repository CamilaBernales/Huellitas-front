/* eslint-disable jsx-a11y/role-supports-aria-props */
import React, { useEffect, useState, useRef, Fragment } from "react";
import {
  Container,
  Button,
  Tabs,
  Tab,
  Row,
  Col,
  Form,
  Accordion,
  Card,
} from "react-bootstrap";
import PaymentForm from "./PaymentForm";
import ListadoCompras from "./ListadoCompras";
import "../../../css/Carrito.css";
import axiosConfig from "../../../config/axios";
import Swal from "sweetalert2";
import PropTypes from "prop-types";

const Carrito = (props) => {
  const { setComprasGuardadas, comprasGuardadas } = props;
  const [key, setKey] = useState("iniciocompra");
  const [suma, setSuma] = useState(0);
  const [detallesEnvio, setDetallesEnvio] = useState(
    JSON.parse(localStorage.getItem("usuario")) || null
  );

  const {
    nombre,
    email,
    direccion,
    provincia,
    localidad,
    codigopostal,
    telefono,
  } = detallesEnvio;

  const primerRender = useRef(true);

  const [compraPagada, setCompraPagada] = useState({});

  const onChangeDetalle = (e) => {
    setDetallesEnvio({
      ...detallesEnvio,
      [e.target.name]: e.target.value,
    });
  };

  const sumaTotal = () => {
    let compras = JSON.parse(localStorage.getItem("compras")) || [];
    let total = 0;
    for (let index = 0; index < compras.length; index++) {
      const element = compras[index];
      total += Number(element.precio);
    }
    setSuma(total);
  };

  useEffect(() => {
    if (primerRender.current) {
      primerRender.current = false;
      return;
    }
    solicitudCompra();
    // eslint-disable-next-line
  }, [compraPagada]);
  useEffect(() => {
    sumaTotal();
  }, [comprasGuardadas]);

  const pagarCompra = () => {
    const comprasGuardada = JSON.parse(localStorage.getItem("compras"));
    if (comprasGuardada.length === 0) {
      alert("No hay productos guadados");
      window.location.href = "/";
      return;
    }
    const pedidoCompras = comprasGuardada.map(function (compra) {
      let compraModif = {
        producto: compra._id,
        precio: compra.precio,
        cantidad: compra.cantidad,
      };
      return compraModif;
    });
    setCompraPagada({
      nombre: detallesEnvio.nombre,
      apellido: detallesEnvio.nombre,
      telefono: detallesEnvio.telefono,
      direccion: detallesEnvio.direccion,
      codigoPostal: detallesEnvio.codigopostal,
      total: suma,
      pedido: pedidoCompras,
    });
  };
  const solicitudCompra = () => {
    axiosConfig
      .post("api/compra", compraPagada)
      .then((res) => {
        console.log(res);
        Swal.fire({
          position: "center",
          icon: "success",
          title: "Tu compra fue exitosa",
          showConfirmButton: false,
          timer: 1500,
        });
      })
      .then(() => {
        localStorage.setItem("compras", JSON.stringify([]));
        setDetallesEnvio({
          nombre: "",
          email: "",
          direccion: "",
          provincia: "",
          localidad: "",
          codigopostal: "",
          telefono: "",
        });
        window.location.href="/miscompras"
      })
      .catch((err) => console.log(err));
    axiosConfig.post("/api/compra/email", detallesEnvio);
  };

  return (
    <Fragment>
      <Container className="mt-5 mb-5 carrito">
        <Tabs
          className="d-flex justify-content-center align-items-center"
          activeKey={key}
          onSelect={(k) => setKey(k)}
        >
          <Tab eventKey="iniciocompra" title="Lista de compras">
            <h3>Lista de compras</h3>
            <Row className="d-flex">
              <Col sm={12} md={8} xl={6}>
                <Row>
                  <ListadoCompras
                    setComprasGuardadas={setComprasGuardadas}
                    comprasGuardadas={comprasGuardadas}
                  />
                  <Col className="my-3">
                    <Button
                      variant="secondary"
                      onClick={() => setKey("datoscomprador")}
                      className="mx-2 d-flex justify-content-end align-items-end"
                    >
                      Continuar
                    </Button>
                  </Col>
                </Row>
              </Col>
              <Col sm={12} md={8} xl={6}>
                <div className="descuento">
                  <Row>
                    <Col className="d-flex justify-content-start">
                      <h6>SUBTOTAL</h6>
                    </Col>
                    <Col className="d-flex justify-content-end">{suma}</Col>
                  </Row>
                  <Row>
                    <Col className="d-flex justify-content-start">
                      <h6>ENVIO</h6>
                    </Col>
                    <Col className="d-flex justify-content-end">FREE</Col>
                  </Row>
                  <Row>
                    <Col className="d-flex justify-content-start">
                      <h6>IMPUESTOS</h6>
                    </Col>
                    <Col className="d-flex justify-content-end">15%</Col>
                  </Row>
                </div>
                <div className="d-flex m-3 justify-content-center font-weight-bold">
                  <h3 className="text-uppercase text-monospace text-lg-left">
                    {" "}
                    Total a pagar:{" "}
                  </h3>
                  <h3
                    className="text-uppercase text-monospace text-lg-left"
                    id="total"
                  >
                    {suma}
                  </h3>
                </div>
              </Col>
            </Row>
          </Tab>
          <Tab eventKey="datoscomprador" title="Detalles de envio">
            <Row className="d-flex justify-content-center align-items-center">
              <Col sm={12} md={8} xl={6}>
                <h3 className="my-3">Detalles de envio</h3>
                <Form>
                  <Row>
                    <Col className="my-3">
                      <Form.Control
                        name="nombre"
                        type="text"
                        maxLength="30"
                        placeholder="Nombre"
                        defaultValue={nombre}
                        onChange={onChangeDetalle}
                      />
                    </Col>
                  </Row>
                  <Row>
                    <Col className="my-3">
                      <Form.Control
                        name="email"
                        type="email"
                        maxLength="20"
                        placeholder="Correo"
                        defaultValue={email}
                        onChange={onChangeDetalle}
                      />
                    </Col>
                  </Row>
                  <Row>
                    <Col className="my-3">
                      <Form.Control
                        name="direccion"
                        type="text"
                        maxLength="20"
                        placeholder="Dirección"
                        defaultValue={direccion}
                        onChange={onChangeDetalle}
                      />
                    </Col>
                  </Row>
                  <Row>
                    <Col className="my-3">
                      <Form.Control
                        name="provincia"
                        type="text"
                        placeholder="Provincia"
                        defaultValue={provincia}
                        onChange={onChangeDetalle}
                      />
                    </Col>
                  </Row>
                  <Row>
                    <Col className="my-3">
                      <Form.Control
                        name="localidad"
                        type="text"
                        maxLength="20"
                        placeholder="Localidad"
                        defaultValue={localidad}
                        onChange={onChangeDetalle}
                      />
                    </Col>
                  </Row>
                  <Row>
                    <Col className="my-3">
                      <Form.Control
                        name="codigopostal"
                        type="text"
                        maxLength="8"
                        placeholder="Código Postal"
                        defaultValue={codigopostal}
                        onChange={onChangeDetalle}
                      />
                    </Col>
                  </Row>
                  <Row>
                    <Col className="my-3">
                      <Form.Control
                        name="telefono"
                        type="tel"
                        maxLength="14"
                        placeholder="Télefono"
                        defaultValue={telefono}
                        onChange={onChangeDetalle}
                      />
                    </Col>
                  </Row>
                </Form>
                <Row className="d-flex justify-content-end align-items-end">
                  <Col className="my-3 d-flex justify-content-end align-items-end">
                    <Button
                      className="mx-2"
                      onClick={() => setKey("iniciocompra")}
                    >
                      Volver
                    </Button>
                    <Button
                      className="mx-2 d-flex justify-content-end align-items-end"
                      variant="secondary"
                      onClick={() => setKey("pagocompra")}
                    >
                      Continuar
                    </Button>
                  </Col>
                </Row>
              </Col>
            </Row>
          </Tab>
          <Tab eventKey="pagocompra" title="Medio de pago">
            <h3>Medios de Pago</h3>
            <Row className="d-flex justify-content-between">
              <Col sm={12} md={8}>
                <Row>
                  <Col>
                    <Accordion>
                      <Card>
                        <Card.Header>
                          <Accordion.Toggle
                            as={Button}
                            variant="Text"
                            eventKey="0"
                          >
                            <Form.Check
                              type="radio"
                              name="formHorizontalRadios"
                              id="formHorizontalRadios2"
                              label="Tárjeta de crédito o débito"
                            />
                          </Accordion.Toggle>
                        </Card.Header>
                        <Accordion.Collapse eventKey="0">
                          <Card.Body>
                            <PaymentForm />
                          </Card.Body>
                        </Accordion.Collapse>
                      </Card>
                    </Accordion>
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <Accordion>
                      <Card>
                        <Card.Header>
                          <Accordion.Toggle
                            as={Button}
                            variant="Text"
                            eventKey="0"
                          >
                            <Form.Check
                              type="radio"
                              name="formHorizontalRadios"
                              id="formHorizontalRadios2"
                              label="Efectivo (SÓLO TUCUMAN)"
                            />
                          </Accordion.Toggle>
                        </Card.Header>
                        <Accordion.Collapse eventKey="0">
                          <Card.Body>
                            Pronto nos contactaremos para confirmar tu compra
                          </Card.Body>
                        </Accordion.Collapse>
                      </Card>
                    </Accordion>
                  </Col>
                </Row>
                <Row>
                  <Col className="my-3">
                    <Button
                      className="mx-2"
                      onClick={() => setKey("datoscomprador")}
                    >
                      Volver
                    </Button>
                  </Col>
                </Row>
              </Col>
              <Col sm={12} md={4}>
                <ListadoCompras
                  setComprasGuardadas={setComprasGuardadas}
                  comprasGuardadas={comprasGuardadas}
                />
                <div className="d-flex m-3 justify-content-center font-weight-bold">
                  <h4 className="text-uppercase text-monospace text-lg-left">
                    {" "}
                    Total a pagar:{" "}
                  </h4>
                  <h4
                    className="text-uppercase text-monospace text-lg-left"
                    id="total"
                  >
                    {suma}
                  </h4>
                </div>
                <Button
                  className="btn btn-success my-2 w-100  text-uppercase font-weight-bold"
                  onClick={pagarCompra}
                >
                  Comprar!
                </Button>
              </Col>
            </Row>
          </Tab>
        </Tabs>
      </Container>
    </Fragment>
  );
};
Carrito.propTypes = {
  comprasGuardadas: PropTypes.number,
  setComprasGuardadas: PropTypes.func,
};
export default Carrito;
