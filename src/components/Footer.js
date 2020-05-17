import React, { Fragment } from 'react'
import Imagen from '../imagen.png'
import { Row, Col,Jumbotron } from 'react-bootstrap'
import { Link } from 'react-router-dom'


function Footer () {
    return(
        <Fragment>
            <Jumbotron>
                <Row>
                    <Col>
                        <Link to='/'>
                            <img alt="logo" href={Imagen} className="mt-4"/>
                        </Link>
                    </Col>
                    <Col>
                        <h4 className="mx-auto mt-4">Información</h4>
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
                        <h4 className="mx-auto mt-4">Guias</h4>
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
                        <h4 className="mx-auto mt-4">Nuestras Redes Sociales</h4>
                            <Link className="mx-1">Instagram</Link>
                            <Link className="mx-1">Facebook</Link>
                            <Link className="mx-1">Twitter</Link>
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