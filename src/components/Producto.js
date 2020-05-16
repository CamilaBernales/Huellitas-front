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