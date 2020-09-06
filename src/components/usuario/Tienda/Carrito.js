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
import Footer from "../Elementos-Comunes/Footer";
import "../../../css/Carrito.css";
import axiosConfig from "../../../config/axios";
import Swal from "sweetalert2";
import PropTypes from "prop-types";
// import mercadoPagoIntegracion from './mercadoPagoIntegracion'

const Carrito = (props) => {
  const { setComprasGuardadas, comprasGuardadas } = props;
  const [key, setKey] = useState("iniciocompra");
  const [suma, setSuma] = useState(0);
  const [detallesEnvio, setDetallesEnvio] = useState(
    JSON.parse(localStorage.getItem("usuario")) || null
  );

  const { nombre, email, direccion, localidad, telefono } = detallesEnvio;

  const installmentRef = useRef();
  const formRef = useRef();
  const primerRender = useRef(true);
  const [medioDePago, setMedioDePago] = useState({
    tarjetaChecked: false,
    efectivoChecked: false,
  });
  const [datosTarjeta, setDatosTarjeta] = useState({
    cvc: "",
    expiry: "",
    focus: "",
    name: "",
    number: "",
    dni: "",
    month: "",
    installments: 1,
  });
  const [compraPagada, setCompraPagada] = useState({
    nombre: "",
    telefono: "",
    direccion: "",
    total: 0,
    pedido: [],
  });

  useEffect(() => {
    if (primerRender.current) {
      primerRender.current = false;
      return;
    }
    crearToken();
    // eslint-disable-next-line
  }, [compraPagada]);

  useEffect(() => {
    window.Mercadopago.setPublishableKey(
      "TEST-e2bfcd64-f846-4033-9a9e-9ab4c0e87ea8"
    );
  }, []);

  useEffect(() => {
    function guessPaymentMethod() {
      if (datosTarjeta.number.length >= 6) {
        let bin = datosTarjeta.number.substring(0, 6);
        window.Mercadopago.getPaymentMethod({ bin }, setPaymentMethod);
      }
    }

    let paymentMethodId = "";
    function setPaymentMethod(status, response) {
      if (status === 200) {
        paymentMethodId = response[0].id;
        setDatosTarjeta({ ...datosTarjeta, paymentMethodId });
        getInstallments();
      } else {
        alert(`Número no válido.`);
        window.location.reload(true);
      }
    }

    function getInstallments() {
      window.Mercadopago.getInstallments(
        {
          payment_method_id: paymentMethodId,
          amount: parseFloat(suma),
        },
        function (status, response) {
          if (status === 200) {
            response[0].payer_costs.forEach((installment) => {
              let opt = document.createElement("option");
              opt.text = installment.recommended_message;
              opt.value = parseInt(installment.installments);
              installmentRef.current.appendChild(opt);
            });
          } else {
            alert(`installments method info error: ${response}`);
          }
        }
      );
    }
    guessPaymentMethod();
    // eslint-disable-next-line
  }, [datosTarjeta.number]);

  useEffect(() => {
    sumaTotal();
  }, [comprasGuardadas]);

  const onChangeDetalle = (e) => {
    setDetallesEnvio({
      ...detallesEnvio,
      [e.target.name]: e.target.value,
      provincia: "Tucumán",
      codigoPostal: "4000",
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

  const onClickTarjeta = () => {
    setMedioDePago({
      tarjetaChecked: !medioDePago.tarjetaChecked,
      efectivoChecked: false,
    });
  };
  const onClickEfectivo = () => {
    setMedioDePago({
      tarjetaChecked: false,
      efectivoChecked: !medioDePago.efectivoChecked,
    });
  };
  const comprasGuardada = JSON.parse(localStorage.getItem("compras"));

  const pagarCompra = () => {
    if (
      nombre === undefined ||
      email === undefined ||
      direccion === undefined ||
      localidad === undefined ||
      telefono === undefined 
    ) {
      alert("Debe completar todos los detalles de envio.");
      return;
    }
    if (suma.length === 0) {
      alert("Su pago debe ser superior a $0");
      return;
    }
    if (!(medioDePago.efectivoChecked || medioDePago.tarjetaChecked)) {
      alert("Debe seleccionar una formade pago");
      return;
    }

    if (
      (datosTarjeta.number === "" ||
        datosTarjeta.name === "" ||
        datosTarjeta.expiry === "" ||
        datosTarjeta.cvc === "") &&
      medioDePago.tarjetaChecked
    ) {
      alert("Debe completar todos los datos de la tarjeta");
      return;
    }
    let reNumber = /\d{16}/;
    let reExpiry = /\d{2}/;
    let reCvc = /\d{3,4}/;
    if (
      (!reNumber.test(datosTarjeta.number) ||
        !reExpiry.test(datosTarjeta.expiry) ||
        !reCvc.test(datosTarjeta.cvc)) &&
      medioDePago.tarjetaChecked
    ) {
      alert("Por favor verifique que los datos de la tarjeta sean correctos");
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
      telefono: detallesEnvio.telefono,
      direccion: [
        detallesEnvio.direccion,
        detallesEnvio.localidad,
        "Tucumán",
      ].join(" - "),
      total: suma,
      pedido: pedidoCompras,
    });
  };

  const crearToken = () => {
    if (medioDePago.efectivoChecked !== true) {
      var $form = formRef.current;
      window.Mercadopago.createToken($form, sdkResponseHandler);
      function sdkResponseHandler(status, response) {
        if (status !== 200 && status !== 201) {
          alert("Verifica los datos de tu tarjeta");
        } else {
          solicitudCompra(response.id);
        }
      }
    }
    solicitudCompra();
  };

  const solicitudCompra = (token) => {
    axiosConfig
      .post("api/compra", {
        ...compraPagada,
        token,
        datosTarjeta,
        detallesEnvio,
        medioDePago,
      })
      .then(() => {
        Swal.fire({
          position: "center",
          icon: "success",
          title: "Tu compra fue exitosa",
          showConfirmButton: true,
          confirmButtonText: "Gracias!",
        });
      })
      .then(() => {
        localStorage.setItem("compras", JSON.stringify([]));
        setDetallesEnvio({
          nombre: "",
          email: "",
          direccion: "",
          provincia: "Tucumán",
          localidad: "",
          telefono: "",
        });
        window.location.href = "/miscompras";
      })
      .catch((err) => console.log(err.response));
  };

  return (
    <Fragment>
      <Container className="mt-5 mb-5 carrito">
        <Tabs
          className="d-flex justify-content-center align-items-center"
          activeKey={key}
          onSelect={(k) => setKey(k)}
        >
          <Tab eventKey="iniciocompra" title="Lista de compras" disabled>
            <h3>Lista de compras</h3>
            <Row className="d-flex justify-content-center align-items-center">
              <Col sm={12} md={8} xl={6}>
                <Row>
                  <ListadoCompras
                    setComprasGuardadas={setComprasGuardadas}
                    comprasGuardadas={comprasGuardadas}
                  />
                  <Col className="my-3">
                    {comprasGuardada.length === 0 ? (
                      <Button className="mx-2" variant="secondary" disabled>
                        Continuar
                      </Button>
                    ) : (
                      <Button
                        className="mx-2 boton-continuar"
                        variant="secondary"
                        onClick={() => setKey("datoscomprador")}
                      >
                        Continuar
                      </Button>
                    )}
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
          <Tab eventKey="datoscomprador" title="Detalles de envio" disabled>
            <Row className="d-flex justify-content-center align-items-center">
              <Col sm={12} md={8} xl={6}>
                <h3 className="my-3 text-center">Detalles de envio</h3>
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
                        maxLength="100"
                        placeholder="Correo"
                        defaultValue={email}
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
                  <Row>
                    <Col className="my-3">
                      <Form.Control
                        name="direccion"
                        type="text"
                        maxLength="100"
                        placeholder="Dirección"
                        defaultValue={direccion}
                        onChange={onChangeDetalle}
                      />
                    </Col>
                  </Row>
                  <Row>
                    <Col className="my-3">
                      <Form.Control
                        as="select"
                        name="localidad"
                        type="text"
                        defaultValue={localidad}
                        onChange={onChangeDetalle}
                      >
                        <option>Seleccione una localidad</option>
                        <option>San Miguel de Tucumán</option>
                        <option>Yerba Buena</option>
                        <option>Tafí Viejo</option>
                        <option>Banda del Rio Salí</option>
                      </Form.Control>
                    </Col>
                  </Row>
                  <Row>
                    <Col className="my-3">
                      <Form.Control
                        name="provincia"
                        type="text"
                        placeholder="Tucumán"
                        defaultValue="Tucumán"
                        disabled
                      />
                    </Col>
                  </Row>
                </Form>
                <Row className="d-flex justify-content-end align-items-end">
                  <Col className="my-3 d-flex justify-content-end align-items-end">
                    <Button
                      className="mx-2 btn btn-secondary"
                      onClick={() => setKey("iniciocompra")}
                    >
                      Volver
                    </Button>
                    <Button
                      className="mx-2 d-flex justify-content-end align-items-end boton-continuar"
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
          <Tab eventKey="pagocompra" title="Medio de pago" disabled>
            <h3>Medios de Pago</h3>

            <Row className="d-flex justify-content-center align-items-center">
              <Col sm={12} md={8} xl={6}>
                <Accordion>
                  <Row>
                    <Col>
                      <Card>
                        <Card.Header>
                          <Accordion.Toggle
                            as={Button}
                            variant="Text"
                            eventKey="0"
                            onClick={onClickTarjeta}
                          >
                            <Form.Check
                              readOnly
                              type="radio"
                              name="tarjeta"
                              id="tarjeta"
                              label="Tarjeta de crédito o débito"
                              checked={medioDePago.tarjetaChecked}
                            />
                          </Accordion.Toggle>
                        </Card.Header>
                        <Accordion.Collapse eventKey="0">
                          <Card.Body>
                            <PaymentForm
                              setDatosTarjeta={setDatosTarjeta}
                              datosTarjeta={datosTarjeta}
                              installmentRef={installmentRef}
                              suma={suma}
                              formRef={formRef}
                            />
                          </Card.Body>
                        </Accordion.Collapse>
                      </Card>
                    </Col>
                  </Row>
                  <Row>
                    <Col>
                      <Card>
                        <Card.Header>
                          <Accordion.Toggle
                            as={Button}
                            variant="Text"
                            eventKey="1"
                            onClick={onClickEfectivo}
                          >
                            <Form.Check
                              readOnly
                              type="radio"
                              name="efectivo"
                              id="efectivo"
                              label="Efectivo"
                              checked={medioDePago.efectivoChecked}
                            />
                          </Accordion.Toggle>
                        </Card.Header>
                        <Accordion.Collapse eventKey="1">
                          <Card.Body>
                            Pronto nos contactaremos para confirmar tu compra
                          </Card.Body>
                        </Accordion.Collapse>
                      </Card>
                    </Col>
                  </Row>
                </Accordion>
                <Row>
                  <Col className="my-3">
                    <Button
                      className="mx-2 btn btn-secondary"
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
      <Footer />
    </Fragment>
  );
};
Carrito.propTypes = {
  comprasGuardadas: PropTypes.number,
  setComprasGuardadas: PropTypes.func,
};
export default Carrito;
