/* eslint-disable jsx-a11y/role-supports-aria-props */
import React, { useEffect, useState, Fragment } from "react";
import {
  Container,
  Table,
  Button,
  Tabs,
  Tab,
  Row,
  Col,
  Form,
  Accordion,
  Card,
} from "react-bootstrap";
import Logo from "../Elementos-Comunes/Logo";
import Navbar from "../Elementos-Comunes/Navbar";

const Carrito = () => {
  const [key, setKey] = useState("iniciocompra");

  const [comprasGuardada, setComprasGuardada] = useState(
    JSON.parse(localStorage.getItem("compras"))
  );
  const [suma, setSuma] = useState(0);

  const eliminarUnProducto = (compra) => {
    console.log(compra);
    let compras = JSON.parse(localStorage.getItem("compras")) || [];
    let index = compras.findIndex((produc) => produc.id === compra.id);
    let producto = compras[index];
    if (producto.cantidadAComprar > 1) {
      producto.precio = Math.round(producto.precio / producto.cantidadAComprar);
      producto.cantidadAComprar -= 1;
      setComprasGuardada([...comprasGuardada, producto]);
      localStorage.setItem("compras", JSON.stringify(compras));
    } else {
      if (producto.cantidadAComprar <= 1) {
        compras.splice(producto, 1);
        localStorage.setItem("compras", JSON.stringify(compras));
      }
    }
    sumaTotal();
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

  const listarCompra = () => {
    let compras = JSON.parse(localStorage.getItem("compras")) || [];
    let tabla = [];

    for (let index = 0; index < compras.length; index++) {
      let element = compras[index];
      tabla.push(
        <tr>
          <td>{element.nombre}</td>
          <td>
            {element.cantidadAComprar}
            {/* <select onClick={handleCantidadProductos}>
          <option value="1" defaulValue>1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
        </select> */}
          </td>
          <td>{element.precio}</td>
          <td>
            <button onClick={() => eliminarUnProducto(element)}>
              <i class="fas fa-trash fa-2x"></i>
            </button>
          </td>
        </tr>
      );
    }
    return tabla;
  };

  useEffect(() => {
    sumaTotal();
    listarCompra();
  }, [comprasGuardada]);

  return (
    <Fragment>
      <Logo />
      <Navbar />
      <Container className="mt-5 mb-5">
        <Tabs
          className="d-flex justify-content-center align-items-center"
          activeKey={key}
          onSelect={(k) => setKey(k)}
        >
          <Tab eventKey="iniciocompra" title="Paso 1">
            <Row className="d-flex justify-content-center align-items-center">
              <Col sm={12} md={8} xl={6}>
                <Table responsive>
                  <thead>
                    <tr>
                      <th>Nombre Producto</th>
                      <th>Cantidad</th>
                      <th>Descuento</th>
                      <th>Precio</th>
                      <th>Eliminar</th>
                    </tr>
                  </thead>
                  <tbody>{listarCompra()}</tbody>
                </Table>
                <Row>
                  <Col className="my-3">
                    <Button
                      className="mx-2"
                      variant="secondary"
                      onClick={() => setKey("datoscomprador")}
                    >
                      Continuar
                    </Button>
                  </Col>
                </Row>
              </Col>
              <Col sm={12} md={8} xl={6}>
                <Form.Label className="my-3 text-uppercase font-weight-bold d-flex justify-content-start">
                  Inserta tu cupón de descuento
                </Form.Label>
                <Form.Control
                  className="border border-warning rounded-left"
                  type="cupo"
                  placeholder="Cupón de descuento"
                />
                <hr />
                <div className="descuento ">
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
                <hr />
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
          <Tab eventKey="datoscomprador" title="Paso 2">
            <h3>Detalles de envio</h3>
            <hr />
            <Row className="d-flex justify-content-center align-items-center">
              <Col sm={12} md={8} xl={6}>
                <Form>
                  <Row>
                    <Col className="my-3">
                      <Form.Control placeholder="First name" />
                    </Col>
                    <Col className="my-3">
                      <Form.Control placeholder="Last name" />
                    </Col>
                  </Row>
                  <Row>
                    <Col className="my-3">
                      <Form.Control placeholder="correo" />
                    </Col>
                  </Row>
                  <Row>
                    <Col className="my-3">
                      <Form.Control placeholder="Adress" />
                    </Col>
                  </Row>
                  <Row>
                    <Col className="my-3">
                      <Form.Control placeholder="Adress 2" />
                    </Col>
                  </Row>
                  <Row>
                    <Col className="my-3">
                      <Form.Control as="select" value="Provincia">
                        <option>Choose...</option>
                        <option>...</option>
                      </Form.Control>
                    </Col>
                    <Col className="my-3">
                      <Form.Control placeholder="Código Postal" />
                    </Col>
                  </Row>
                  <Row>
                    <Col className="my-3">
                      <Form.Control placeholder="Numero de Télefono " />
                    </Col>
                    <Col className="my-3">
                      <Form.Control placeholder="Numero de Télefono alternativo " />
                    </Col>
                  </Row>
                  <Row>
                    <Col>
                      <div className="input-group-text input-group-lg">
                        <Form.Check
                          type="radio"
                          label="Envio con demora de 3/4 días"
                          name="formHorizontalRadios"
                          id="formHorizontalRadios2"
                        />
                      </div>
                    </Col>
                    <Col>
                      <div className="input-group-text input-group-lg ">
                        <Form.Check
                          type="radio"
                          label="Envio en 24hs"
                          name="formHorizontalRadios"
                          id="formHorizontalRadios2"
                        />
                      </div>
                    </Col>
                  </Row>
                </Form>
                <Row>
                  <Col className="my-3">
                    <Button
                      className="mx-2"
                      onClick={() => setKey("iniciocompra")}
                    >
                      Volver
                    </Button>
                    <Button
                      className="mx-2"
                      variant="secondary"
                      onClick={() => setKey("pagocompra")}
                    >
                      Continuar
                    </Button>
                  </Col>
                </Row>
              </Col>
              <Col sm={12} md={8} xl={6}>
                <Table responsive>
                  <thead>
                    <tr>
                      <th>Nombre Producto</th>
                      <th>Cantidad</th>
                      <th>Descuento</th>
                      <th>Precio</th>
                      <th>Eliminar</th>
                    </tr>
                  </thead>
                  <tbody>{listarCompra()}</tbody>
                </Table>
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
          <Tab eventKey="pagocompra" title="Paso 3">
            <h3>Medios de Pago</h3>

            <hr />
            <Row className="d-flex justify-content-center align-items-center">
              <Col sm={12} md={8} xl={6}>
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
                              label="Rapipado o Pago Fácil"
                            />
                          </Accordion.Toggle>
                        </Card.Header>
                        <Accordion.Collapse eventKey="0">
                          <Card.Body>
                            Te reedireccionaremos a MercadoPago
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
                              label="Tárjeta de crédito o débito"
                            />
                          </Accordion.Toggle>
                        </Card.Header>
                        <Accordion.Collapse eventKey="0">
                          <Card.Body>
                            Te reedireccionaremos a MercadoPago
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
                            Te reedireccionaremos a MercadoPago
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
              <Col sm={12} md={8} xl={6}>
                <Table responsive>
                  <thead>
                    <tr>
                      <th>Nombre Producto</th>
                      <th>Cantidad</th>
                      <th>Descuento</th>
                      <th>Precio</th>
                      <th>Eliminar</th>
                    </tr>
                  </thead>
                  <tbody>{listarCompra()}</tbody>
                </Table>
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
                <Button className="btn btn-success my-2 w-100  text-uppercase font-weight-bold">
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

export default Carrito;
