import React, { Fragment } from 'react';
import {Container, Form, Button, Col, Row } from 'react-bootstrap';
import Logo from './Header/Logo';
import Navbar from './Header/Navbar';

export default function Registro() {
  return(
    <Fragment>
      <Logo/>
      <Navbar/>
      <Container className="m-4">
        <Row className="justify-content-center">
          <Col sm={12} md={4}>
            <Form >
              <Form.Group controlId="formName">
                <Form.Label className="d-flex justify-content-start">Nombre:</Form.Label>
                <Form.Control type="text" placeholder="Ingrese su nombre" />
              </Form.Group>

              <Form.Group controlId="formLastName">
                <Form.Label className="d-flex justify-content-start">Apellido:</Form.Label>
                <Form.Control type="text" placeholder="Ingrese su apellido" />
              </Form.Group>

              <Form.Group controlId="formEmail">
                <Form.Label className="d-flex justify-content-start">Email:</Form.Label>
                <Form.Control type="email" placeholder="Ingrese su email" />
              </Form.Group>

              <Form.Group controlId="formPassword">
                <Form.Label className="d-flex justify-content-start">Contraseña:</Form.Label>
                <Form.Control type="password" placeholder="Ingrese su contraseña" />
              </Form.Group>

              <Form.Group controlId="formConfirmPassword">
                <Form.Label className="d-flex justify-content-start">Confirmar contraseña:</Form.Label>
                <Form.Control type="password" placeholder="Ingrese su contraseña nuevamente" />
              </Form.Group>

              <Row >
                <Col className="d-flex justify-content-end">
                  <Button variant="primary" type="submit">
                    Enviar
                  </Button>
                </Col>
              </Row>
            </Form>
          </Col>
        </Row>
      </Container>
    </Fragment>
  );
}