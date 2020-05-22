import React, { Fragment } from "react";
import { Container, Form, Button, Col, Row } from "react-bootstrap";
import registroimg from "./img/registro.svg";
import styles from "./css/Login.module.css";

export default function Registro() {
  return (
    <Fragment>
      <Container className="m-4">
        <Row className="px-2 d-flex justify-content-center align-items-center">
          <div className="col mx-5 img-fluid">
            <img src={registroimg} alt="imagen registro" />
          </div>
          <Col sm={12} md={4}>
            <div className={styles.formulario}>
              <Form>
                <h2 className="text-center text-uppercase mx-4">
                  Crear una cuenta
                </h2>
                <Form.Group controlId="formName">
                  <Form.Label className="d-flex justify-content-start">
                    Nombre:
                  </Form.Label>
                  <Form.Control
                    className="border border-warning rounded-left"
                    type="text"
                    placeholder="Ingrese su nombre"
                  />
                </Form.Group>

                <Form.Group controlId="formLastName">
                  <Form.Label className="d-flex justify-content-start">
                    Apellido:
                  </Form.Label>
                  <Form.Control
                    className="border border-warning rounded-left"
                    type="text"
                    placeholder="Ingrese su apellido"
                  />
                </Form.Group>

                <Form.Group controlId="formEmail">
                  <Form.Label className="d-flex justify-content-start">
                    Email:
                  </Form.Label>
                  <Form.Control
                    className="border border-warning rounded-left"
                    type="email"
                    placeholder="Ingrese su email"
                  />
                </Form.Group>

                <Form.Group controlId="formPassword">
                  <Form.Label className="d-flex justify-content-start">
                    Contraseña:
                  </Form.Label>
                  <Form.Control
                    className="border border-warning rounded-left"
                    type="password"
                    placeholder="Ingrese su contraseña"
                  />
                </Form.Group>

                <Form.Group controlId="formConfirmPassword">
                  <Form.Label className="d-flex justify-content-start">
                    Confirmar contraseña:
                  </Form.Label>
                  <Form.Control
                    className="border border-warning rounded-left"
                    type="password"
                    placeholder="Ingrese su contraseña nuevamente"
                  />
                </Form.Group>

                <Row>
                  <Col className="d-flex justify-content-end">
                    <Button
                      className="text-white text-uppercase font-weight-bold rounded-pill btn btn-button w-100"
                      variant="warning"
                      type="submit"
                    >
                      Enviar
                    </Button>
                  </Col>
                </Row>
              </Form>
            </div>
          </Col>
        </Row>
      </Container>
    </Fragment>
  );
}
