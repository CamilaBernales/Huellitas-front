import React, {Fragment, useState} from 'react';
import {Redirect} from 'react-router-dom';
import {Container, Row, Col} from 'react-bootstrap';
import Navbaradmin from '../Elementos-Comunes/Navbaradmin';
import NavBarSearch from './NavBarSearch';
import TablaPedidos from './TablaPedidos';

export default function PedidosAdmin() {

    const pedidos = [
        {
            id: 1,
            fecha: "01/06/2020",
            cliente: 'Francisco Perez',
            observaciones: '',
            pedido: [
                {
                    id: '1',
                    nombre: 'Alimento Conejo Adulto'
                }, {
                    id: '2',
                    nombre: "Alimento Gato Cachorro"
                }
            ]

        }, {
            id: 2,
            fecha: "27/05/2020",
            cliente: 'Nicolas Origuela',
            observaciones: 'llevar a la san juan 1883',
            pedido: [
                {
                    id: '1',
                    nombre: 'Alimento Conejo Adulto'
                }, {
                    id: '2',
                    nombre: "Alimento Gato Cachorro"
                }
            ]
        }
    ]

    return (
        <Fragment>
            <Navbaradmin/>
            <Container className="d-flex flex-column justify-center py-3">
                <NavBarSearch/>
                <Row>
                    <Col></Col>
                </Row>
                <Row>
                    <TablaPedidos pedidos={pedidos}/>
                </Row>
            </Container>
        </Fragment>
    );
}