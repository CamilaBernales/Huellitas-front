import React from 'react'
import {Modal, Col, Row, Button} from 'react-bootstrap'
import alimento from '../../../img/productos/alimento.jpg'

export default function MyVerticallyCenteredModal({modalShow, producto, setModalShow, onHide}) {

    console.log(modalShow);

    return (
        <Modal
            show={modalShow}
            onHide={onHide}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered>
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    {producto.nombre} - ${producto.precio}
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Row>
                    <Col lg={6}>
                        <img className='img-fluid' alt='alimento' src={alimento}/>
                    </Col>
                    <Col lg={6}>
                        <Row>
                            <h6>Detalles del producto</h6>
                            <p>{producto.descripcion}</p>
                        </Row>
                        <Row>
                            <Button>Comprar</Button>
                        </Row>
                    </Col>
                </Row>
            </Modal.Body>
            <Modal.Footer>
                <Button onClick={onHide}>Close</Button>
            </Modal.Footer>
        </Modal>
    );
}
