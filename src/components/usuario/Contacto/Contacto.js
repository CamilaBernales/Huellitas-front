import React, { Fragment } from 'react'
import Navbar from '../Elementos-Comunes/Navbar'
import Logo from '../Elementos-Comunes/Logo'
import Footer from '../Elementos-Comunes/Footer'
import { Form, Container, Button, Col, Row, } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import imgLogin from "../../../img/login.svg";
// import style from '../../../css/Login.module.css'

export default function Contacto() {
    return (
        <Fragment>
            <Logo />
            <Navbar />
            <Container className="m-4">
                <Row className="px-5 d-flex justify-content-center  ">
                    <Col sm={12} md={4}>
                        <div >
                            <Form>
                                <h4 className="text-center mx-1 ">MANDANOS UN MENSAJE</h4>
                                <Form.Group controlId="formEmail">
                                    <Form.Label className="d-flex justify-content-start">
                                    Email:
                                    </Form.Label>
                                    <Form.Control
                                    type="email"
                                    placeholder="Ingrese su email"
                                    className="border border-warning rounded-left"
                                    name="email"
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
                                    name="password"
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
                            </Form>
                        </div>
                    </Col>
                </Row>
            </Container>
            <Footer />
        </Fragment>
    )
}
