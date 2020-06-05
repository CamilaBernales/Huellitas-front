import React, { Fragment, useState } from 'react'
import Navbar from '../Elementos-Comunes/Navbar'
import Logo from '../Elementos-Comunes/Logo'
import Footer from '../Elementos-Comunes/Footer'
import { Form, Container, Button, Col, Row, } from 'react-bootstrap'
// import style from '../../../css/Login.module.css'

export default function Contacto() {

    const [consulta, setConsulta] = useState({
        nombre:'',
        email:'',
        mensaje:''
    })

    const {nombre, email, mensaje} = consulta

    const onChangeConsulta = (e) =>{
        setConsulta({
            ...consulta,
            [e.target.name] : e.target.value
        });
    }

    const onSubmitConsulta = (e) =>{
        e.preventDefault()
        if(nombre === '' && email === '' && mensaje === ''){
            alert('Debe completar todos los campos')
        }
    }

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
                                <Form.Group controlId="formName">
                                    <Form.Label className="d-flex justify-content-start">
                                    Nombre:
                                    </Form.Label>
                                    <Form.Control
                                    className="border border-warning rounded-left"
                                    type="name"
                                    placeholder="Ingrese su nombre completo"
                                    name="nombre"
                                    value={nombre}
                                    onChange={onChangeConsulta}
                                    />
                                </Form.Group>
                                <Form.Group controlId="formEmail">
                                    <Form.Label className="d-flex justify-content-start">
                                    Email:
                                    </Form.Label>
                                    <Form.Control
                                    className="border border-warning rounded-left"
                                    type="email"
                                    placeholder="Ingrese su Email"
                                    name="email"
                                    value={email}
                                    onChange={onChangeConsulta}
                                    />
                                </Form.Group>
                                <Form.Group controlId="exampleForm.ControlTextarea1">
                                    <Form.Label>Example textarea</Form.Label>
                                    <Form.Control
                                    className="border border-warning"
                                    as="textarea"
                                    rows="3"
                                    name="mensaje"
                                    value={mensaje}
                                    onChange={onChangeConsulta}
                                       />
                                </Form.Group>
                                <Row>
                                    <Col className="d-flex justify-content-center">
                                    <Button
                                        className="text-white text-uppercase font-weight-bold rounded-pill btn btn-button w-100"
                                        variant="warning"
                                        type="submit"
                                        onSubmit={onSubmitConsulta}
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
            <Footer />
        </Fragment>
    )
}
