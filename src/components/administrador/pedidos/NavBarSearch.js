import React from 'react'
import {Col, Form,Button} from 'react-bootstrap'
import "../../../css/Tienda.css"

export default function NavBarSearch() {


    return (
        <Form.Row>
            <Col>
                <Form.Group>
                    <Form.Control type="text" placeholder="Cliente / N° Pedido / Fecha / Etc"/>
                </Form.Group>
            </Col>
            <Col>
                <Button className="boton-search buscar">Buscar</Button>
            </Col>
        </Form.Row>
    )
}