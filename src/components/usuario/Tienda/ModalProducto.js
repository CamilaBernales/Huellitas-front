import React, {useState, useEffect} from 'react'
import {
    Modal,
    Col,
    Row,
    Button,
    Form,
    Alert
} from 'react-bootstrap'
import alimento from '../../../img/productos/alimento.jpg'
import formasPagos from '../../../img/banner-mercadopago-producto.png'
import InputCantidad from './InputCantidad'

export default function MyVerticallyCenteredModal({agregado, guardarProducto, modalShow, producto, setModalShow, onHide}) {


    return (
        <Modal
            show={modalShow}
            onHide={onHide}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered>
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    {producto.nombre}
                    - ${producto.precio}
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
                            <InputCantidad producto={producto}/>
                        </Row>
                        <Row>
                            <Button onClick={() => guardarProducto(producto)}>
                                {agregado
                                    ? "Producto agregado"
                                    : "Comprar"}
                            </Button>
                        </Row>
                        <Row>
                            <img className='img-fluid' alt='formas de pago' src={formasPagos}/>
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
