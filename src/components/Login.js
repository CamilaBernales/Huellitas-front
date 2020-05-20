import React, { Fragment } from "react";
import { Container, Form, Button, Col, Row } from "react-bootstrap";
import {Link} from 'react-router-dom'
import styles from "./css/Login.module.css";
import imgLogin from "./img/login.svg";
export default function Login() {
  return (
    <Fragment>
      <Container className="m-4">
        <Row className="px-5 d-flex justify-content-center align-items-center ">
          <div className="col mx-5 img-fluid">
            <img src={imgLogin} />
          </div>
          <Col sm={12} md={4} >
            <Form className={styles.formulario}>
              <h2 className="text-center mx-4 ">LOGIN</h2>
              <Form.Group controlId="formEmail">
                <Form.Label className="d-flex justify-content-start">
                  Email:
                </Form.Label>
                <Form.Control 
                type="email" 
                placeholder="Ingrese su email"
                className="border border-warning rounded-left" />
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
              <Row>
                <Col className="d-flex justify-content-center">
                  <Button
                    className="text-white text-uppercase font-weight-bold rounded-pill btn btn-button w-100"
                    variant="warning"
                    type="submit"
                  >
                    Ingresar
                  </Button>
                </Col>
              </Row>
                  <Link className="d-flex justify-content-start p-2" to={'/registro'}>
                    No tienes una cuenta? Registrate!
                  </Link>
            </Form>
          </Col>
        </Row>
      </Container>
    </Fragment>
  );
}
