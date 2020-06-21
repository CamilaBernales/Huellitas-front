import React from 'react'
import {Col, Form,Button} from 'react-bootstrap'

export default function NavBarSearch() {


    return (
        <Form.Row>
            <Col>
                <Form.Group>
                    <Form.Control type="text" placeholder="Cliente / N° Pedido / Fecha / Etc"/>
                </Form.Group>
            </Col>
            <Col>
                <Button variant='outline-info'>Buscar</Button>
            </Col>
        </Form.Row>
    )
}