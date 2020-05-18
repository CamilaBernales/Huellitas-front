<<<<<<< HEAD
import React, {useState} from 'react';
import {Col, Card, Button} from "react-bootstrap";

const Producto = ({producto}) => {

    const [productoAgregado,
        setProductoAgregado] = useState([])

    const guardarProducto = producto => {
        setProductoAgregado(producto);
        const compra = JSON.parse(localStorage.getItem('compras')) || [];
        compra.push((producto))
        localStorage.setItem('compras', JSON.stringify(compra));
    }

    const {id, nombre, img, descripcion, precio, esPromo} = producto;

    return (
        <Col sm={12} md={4} className="d-flex justify-content-center p-3">
            <Card border="danger" style={{
                width: '18rem'
            }}>
                <Card.Img variant="top" src={img} />
                <Card.Body>
                    <Card.Title>{nombre}</Card.Title>
                    <Card.Text>
                        {descripcion}
                        <br/>
                        ${precio}
                    </Card.Text>
                    <Button className="w-100 mt-2" onClick={() => guardarProducto(producto)}>Comprar</Button>
                </Card.Body>
            </Card>
        </Col>
    );
}

export default Producto;
=======
import React, { useState, useEffect, Fragment } from "react";
import { Col, Card, Button, Alert } from "react-bootstrap";

const Producto = ({ producto }) => {

    const [productoAgregado, setProductoAgregado] = useState(
        JSON.parse(localStorage.getItem("compras")) || []
    );
    const [alert, setAalert] = useState(false);

    const guardarProducto = (producto) => {
        const compras = JSON.parse(localStorage.getItem("compras")) || [];
        const index = compras.findIndex(
            (compra) => compra.id === producto.id
        );
        let compra = compras[index];
        if (compra) {
            if (compra.cantidadAComprar < 5) {
                setAalert(false);

                if (window.confirm("Quieres agregar este producto de nuevo a tu carrito?")) {
                    compra.cantidadAComprar += 1;
                    compra.precio =  Number(compra.precio)+Number(compra.precio)
                    setProductoAgregado([...productoAgregado, producto]);
                    localStorage.setItem("compras", JSON.stringify(compras));
                }
            } else {
                setAalert(true)
                return
            }
        } else {
            producto.agregado = true;
            producto.cantidadAComprar += 1;
            setProductoAgregado([...productoAgregado, producto]);
            compras.push(producto);
            localStorage.setItem("compras", JSON.stringify(compras));
        }
    };


    const { id, nombre, descripcion, precio, agregado } = producto;

    return (
        <Fragment>
                {alert ? (
                    <Alert variant="danger">
                        Lo sentimos, no puedes agregar más de cinco productos del mismo tipo
                        a tu compra
                    </Alert>
                ) : null}
            <Col sm={12} md={4} className="d-flex justify-content-center p-3 ">
                <Card key={id} border="danger" style={{ width: "18rem" }}>
                    <Card.Img variant="top" />
                    <Card.Body>
                        <Card.Title>{nombre}</Card.Title>
                        <Card.Text>
                            {descripcion}
                            <br />${precio}
                        </Card.Text>
                        <Button
                            onClick={() => guardarProducto(producto)}
                            className="w-100 mt-2 "
                        >
                            {agregado ? "Producto agregado" : "Comprar"}
                        </Button>
                    </Card.Body>
                </Card>
            </Col>
        </Fragment>
    );
};

export default Producto;
>>>>>>> 757085ae0d8695b0f6387caf6eb7d5ad24a976eb
