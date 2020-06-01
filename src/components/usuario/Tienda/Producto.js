import React, {useState, Fragment, useEffect} from "react";
import {
    Col,
    Card,
    Form,
    Button,
    Alert,
    ButtonGroup,
    Modal,
    Row
} from "react-bootstrap";
import {Link} from "react-router-dom";
import alimento from '../../../img/productos/alimento.jpg'
import ModalProducto from './ModalProducto'
import InputCantidad from './InputCantidad'

const Producto = ({producto}) => {

    const [productoAgregado,
        setProductoAgregado] = useState(JSON.parse(localStorage.getItem("compras")) || []);
    const [alert,
        setAalert] = useState(false);

    const guardarProducto = (producto) => {
        const compras = JSON.parse(localStorage.getItem("compras")) || [];
        const index = compras.findIndex((compra) => compra.id === producto.id);
        let compra = compras[index];
        if (compra) {
            if (compra.cantidadAComprar < 5) {
                setAalert(false);

                if (window.confirm("Quieres agregar este producto de nuevo a tu carrito?")) {
                    compra.cantidadAComprar += 1;
                    compra.precio = Number(compra.precio) + Number(compra.precio)
                    setProductoAgregado([
                        ...productoAgregado,
                        producto
                    ]);
                    localStorage.setItem("compras", JSON.stringify(compras));
                }
            } else {
                setAalert(true)
                return
            }
        } else {
            producto.agregado = true;
            producto.cantidadAComprar += 1;
            setProductoAgregado([
                ...productoAgregado,
                producto
            ]);
            compras.push(producto);
            localStorage.setItem("compras", JSON.stringify(compras));
        }
    };

    const {id, nombre, descripcion, precio, agregado} = producto;

    const [modalShow,
        setModalShow] = React.useState(false);
    const onHide = () => {
        setModalShow(false)
    }

    
    return (
        <Fragment>
            {alert
                ? (
                    <Alert variant="danger">
                        Lo sentimos, no puedes agregar más de cinco productos del mismo tipo a tu compra
                    </Alert>
                )
                : null}
            <Col sm={12} md={4} className="d-flex justify-content-center p-3 ">
                <Card
                    key={id}
                    border="danger"
                    style={{
                    width: "18rem"
                }}>
                    <Card.Img variant="top" className='img-fluid' alt='alimento' src={alimento}/>
                    <Card.Body>
                        <Card.Title>{nombre}</Card.Title>
                        <Card.Text>
                            Precio: ${precio}
                        </Card.Text>
                        <Row>
                            <InputCantidad producto={producto}/>
                        </Row>
                        <ButtonGroup>
                            <Button
                                renderAs='button'
                                onClick={() => setModalShow(true)}
                                className='mr-2'
                                size='sm'>Detalles</Button>
                            <ModalProducto
                                agregado={agregado}
                                guardarProducto={guardarProducto}
                                producto={producto}
                                modalShow={modalShow}
                                setModalShow={setModalShow}
                                onHide={onHide}/>

                            <Button size='sm' onClick={() => guardarProducto(producto)}>
                                {agregado
                                    ? "Producto agregado"
                                    : "Comprar"}
                            </Button>
                        </ButtonGroup>
                    </Card.Body>
                </Card>
            </Col>
        </Fragment>
    );
};

export default Producto;
