import React, { Fragment } from 'react';
import {Container, Form, Button, Col, Row } from 'react-bootstrap';
import Logo from './Header/Logo';
import Navbar from './Header/Navbar';

export default function Login() {
  
  return (
    <Fragment>
      <Logo/>
      <Navbar/>
      <Container className="mt-4">
        <Row className="justify-content-center">
          <Col sm={12} md={4}>
            <Form >
              <Form.Group controlId="formEmail">
                <Form.Label className="d-flex justify-content-start">Email:</Form.Label>
                <Form.Control type="email" placeholder="Ingrese su email" />
              </Form.Group>

              <Form.Group controlId="formPassword">
                <Form.Label className="d-flex justify-content-start">Contraseña:</Form.Label>
                <Form.Control type="password" placeholder="Ingrese su contraseña" />
              </Form.Group>

              <Row>
                <Col className="d-flex justify-content-end">
                  <Button variant="primary" type="submit">
                    Ingresar
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