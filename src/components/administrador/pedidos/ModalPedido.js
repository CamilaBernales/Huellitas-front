import React, {useState, useEffect} from 'react'
import Navbaradmin from '../Elementos-Comunes/Navbaradmin'
import TablaPedidos from './TablaPedidos'
import {Table, Modal, Button} from 'react-bootstrap'
import axiosConfig from "../../../config/axios";

export default function ModalPedido({pedido, modalShow, onHide}) {

    return (

        <Modal id='modalCompras'
            show={modalShow}
            onHide={onHide}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered>
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter"></Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th>Producto</th>
                            <th>Cantidad</th>
                            <th>Precio</th>
                        </tr>
                    </thead>
                    <tbody>
                        {pedido.length > 0 ? pedido.map(p => 
                        <tr>
                            <td>{p.nombre}</td>
                            <td>{p.cantidad}</td>
                            <td>{p.precio}</td>
                        </tr>
                        ) : null}
                    </tbody>
                </Table>
            </Modal.Body>
            <Modal.Footer>
                <Button onClick={onHide}>Close</Button>
            </Modal.Footer>
        </Modal>
    );
}