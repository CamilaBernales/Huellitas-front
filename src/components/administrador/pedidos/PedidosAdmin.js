import React, {Fragment, useState, useEffect} from 'react';
import {Container, Row, Col} from 'react-bootstrap';
import NavBarSearch from './NavBarSearch';
import TablaPedidos from './TablaPedidos';
import axiosConfig from '../../../config/axios'


export default function PedidosAdmin() {

    const [compras,
        setCompras] = useState([]);

    useEffect(() => {
        axiosConfig
            .get("/api/compra/listado")
            .then((res) => setCompras(res.data))
            .catch((err) => console.log(err.response));
    }, []);

    return (
        <Fragment>
            <Container className="d-flex flex-column justify-center py-3">
                <NavBarSearch/>
                <Row>
                    <Col></Col>
                </Row>
                <Row>
                    <TablaPedidos compras={compras}/>
                </Row>
            </Container>
        </Fragment>
    );
}