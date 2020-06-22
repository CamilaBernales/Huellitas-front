import React, { Fragment, useState } from 'react'
import { Form, Container, Button, Col, Row, } from 'react-bootstrap'
import axiosConfig from "../../../config/axios"
import Swal from "sweetalert2";
// import style from '../../../css/Login.module.css'

export default function FormMensaje() {

    //Defino el state
    const [consulta, setConsulta] = useState({
        nombre:'',
        email:'',
        mensaje:''
    })
    const [error, setError] = useState(false);
    const [msgError, setMsgError] = useState("");

    //Extraigo la consulta
    const {nombre, email, mensaje} = consulta


    //Cuando hay cambios en el formulario
    const onChangeConsulta = e =>{
        setConsulta({
            ...consulta,
            [e.target.name] : e.target.value
        });
    }


    //Cuando quiero mandar el mensaje
    const onSubmitConsulta = e =>{
        e.preventDefault()
        
        //Validar campos
        if(consulta.nombre.trim() !== '' && consulta.email.trim() !== '' && consulta.mensaje.trim() !== ''){
              
            //Agrego el mensaje en la BD
            axiosConfig
            .post("/api/mensajes/", consulta)
            .then((res) => {
                Swal.fire({
                    position: "center",
                    icon: "success",
                    title: "El mensaje fue enviado con éxito.",
                    showConfirmButton: false,
                    timer: 1500,
                });
                console.log(res);
            })
            .catch((err) => {
                console.log(err.response);
                setError(true);
                setMsgError(err.response.data.msg);
            });
            //Reseteo el formulario
            setConsulta({
                nombre: '',
                email: '',
                mensaje: ''
            })
        } else{
            setError(true);
            setMsgError("Los campos deben estar completos.");
        }
    }
        
    return (
        <Fragment>
            <Container className="m-4">
                <Row className="px-5 d-flex justify-content-center  ">
                    <Col sm={12} md={4}>
                        <div >
                            <Form onSubmit={onSubmitConsulta}>
                                <h4 className="text-center mx-1 ">MANDANOS TU CONSULTA</h4>
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
                                    <Form.Label>Decinos en que podemos ayudarte</Form.Label>
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
    )
}
