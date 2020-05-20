import React, { Fragment } from 'react'
import Imagen from "../imagen.png";
import { Row, Col, Jumbotron } from 'react-bootstrap'
import { Link } from 'react-router-dom'


function Footer () {
    return(
        <Fragment>
            <Jumbotron>
                <Row className="mt-4 mx-auto" xs={2} md={4}>
                    <Col>
                        <Link>
                            <img alt="logo" href={Imagen} className="mt-4"/>
                        </Link>
                    </Col>
                    <Col>
                        <h4 className="ml-3">Información</h4>
                            <Col>
                                <Link to='/contacto'>
                                    Contacto
                                </Link>
                            </Col>
                            <Col>
                                <Link to='/equipo'>
                                    Nuestro Equipo
                                </Link>
                            </Col>
                    </Col>
                    <Col>
                        <h4 className="ml-3">Guias</h4>
                            <Col>
                                <Link>
                                    Medios de Pago
                                </Link>
                            </Col>
                            <Col>
                                <Link>
                                    Terminos y Condiciones de Uso
                                </Link>
                            </Col>
                            <Col>
                                <Link>
                                    Sampling
                                </Link>
                            </Col>
                    </Col>
                    <Col>
                        <h4 className="ml-5">Redes Sociales</h4>
                        <div className="ml-5">
                            <Link className="mx-1">
                                <i class="fab fa-instagram"></i>
                            </Link>
                            <Link className="mx-1">
                                <i class="fab fa-facebook-square"></i>
                            </Link>
                            <Link className="mx-1">
                                <i className="fab fa-twitter-square"></i>
                            </Link>
                        </div>
                    </Col>
                </Row>
                    <h6 className="mt-3">
                        &copy; 2020 Huellitas. Todos los derechos reservados 
                    </h6>
            </Jumbotron>
        </Fragment>
    )
}


export default Footer