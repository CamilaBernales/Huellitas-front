import React, {Fragment, useState} from 'react'
import {Table, Button} from 'react-bootstrap'
import ModalPedido from './ModalPedido'
import moment from 'moment';

export default function TablaPedidos({compras}) {

    const [modalShow,
        setModalShow] = React.useState(false);
    const onHide = () => {
        setModalShow(false);
    };

    const [pedido,
        setPedido] = useState([]);

        const [compra,
            setCompra] = useState({});

    

    const mostrar = (c, p) => {
        setModalShow(true)
        setPedido(p)
        setCompra(c)
        console.log(c);
        console.log(p);
    }

    return (
        <Fragment>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>Fecha</th>
                        <th>Cliente</th>
                        <th>Direccion</th>
                        <th>Acciones</th>
                        <th>Importe Total</th>
                    </tr>
                </thead>
                <tbody>
                    {compras.map(c => <tr key={c._id}>
                        <td>{moment(c.fecha).format("DD/MM/YYYY")}</td>
                        <td>{c.nombre} {c.apellido}</td>
                        <td>{c.direccion}</td>
                        <td>
                            <Button
                                size='sm'
                                variant='success'
                                onClick={()=> mostrar(c, c.pedido)}
                                className='ml-1'>Detalle</Button>
                        </td>
                        <td>${c.pedido.map(p=> p.precio).reduce((a,b)=>a+b,0)}</td>
                    </tr>)}
                </tbody>
            </Table>
            <ModalPedido
                pedido={pedido}
                compra={compra}
                modalShow={modalShow}
                setModalShow={setModalShow}
                onHide={onHide}/>
        </Fragment>
    )
}
