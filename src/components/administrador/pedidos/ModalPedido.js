import React from 'react'
// import Navbaradmin from '../Elementos-Comunes/Navbaradmin'
// import TablaPedidos from './TablaPedidos'
import {Table, Modal, Button, Row, Col} from 'react-bootstrap'
// import axiosConfig from "../../../config/axios";

export default function ModalPedido({pedido, compra, modalShow, onHide}) {

    console.log(pedido.map( p => p.precio));

    return (

        <Modal
            id='modalCompras'
            show={modalShow}
            onHide={onHide}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered>
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    Id Pedido: {compra._id}
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Row>
                    <Col xs={12} md={8}>
                        <p>Nombre: 
                            <strong> {compra.nombre} {compra.apellido}</strong>
                        </p>
                        <p>Direccion: 
                            <strong> {compra.direccion}
                            </strong>
                        </p>
                        <p>Telefono: 
                            <strong> {compra.telefono}</strong>
                        </p>
                    </Col>
                </Row>
                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th>Producto</th>
                            <th>Cantidad</th>
                            <th>Precio</th>
                        </tr>
                    </thead>
                    <tbody>
                        {pedido.length > 0
                            ? pedido.map(p => <tr>
                                <td>{p.nombre}</td>
                                <td>{p.cantidad}</td>
                                <td>${p.precio}</td>
                            </tr>)
                            : null}
                        <tr>
                            <td colSpan="2"><strong>Total</strong></td>
                            <td><strong>${pedido.map( p => p.precio).reduce((a, b) => a + b, 0)}</strong></td>
                        </tr>
                    </tbody>
                </Table>
            </Modal.Body>
            <Modal.Footer>
                <Button onClick={onHide}>Close</Button>
            </Modal.Footer>
        </Modal>
    );
}