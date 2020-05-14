  
import React from 'react';
import { Col, Card, Button } from "react-bootstrap";

const Producto = ({producto}) => {

    // extraer las variables
    const {nombre, descripcion, precio } = producto;

    return ( 
        <Col sm={12} md={4} className="d-flex justify-content-center p-3">
        <Card border="danger" style={{ width: '18rem' }} >
            <Card.Img variant="top"  />
            <Card.Body>
                <Card.Title>{nombre}</Card.Title>
                <Card.Text>
                   {descripcion}
                   <br/>
                    ${precio}
                </Card.Text>
                <Button className="w-100 mt-2 ">Comprar</Button>
            </Card.Body>
        </Card>
    </Col >
     );
}
 
export default Producto;