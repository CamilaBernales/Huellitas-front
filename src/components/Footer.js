import React from 'react'
import Imagen from '../imagen.png'
import { Row, Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'


function Footer () {
    return(
        <Row>
            <Col>
            <img alt="logo" href={Imagen}/>
            </Col>
            <Col>
                <h4 className="mx-4 mt-4">Información</h4>
                    <Col>
                        <Link>
                            Contacto
                        </Link>
                    </Col>
                    <Col>
                        <Link>
                            Nuestro Equipo
                        </Link>
                    </Col>
            </Col>
            <Col>
                <h4 className="mx-4 mt-4">Guias</h4>
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
            <h4 className="mx-4 mt-4">Nuestras Redes Sociales</h4>
            
            </Col>
        </Row>
    )
}


export default Footer