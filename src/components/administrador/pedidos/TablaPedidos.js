import React, {Fragment, useState, useEffect} from 'react'
import {Table, Button} from 'react-bootstrap'
import ModalPedido from './ModalPedido'
import axiosConfig from "../../../config/axios";

export default function TablaPedidos({compras}) {

    const [modalShow,
        setModalShow] = React.useState(false);
    const onHide = () => {
        setModalShow(false);
    };

    const [pedido,
        setPedido] = useState([]);

    const mostrar = (p) => {
        setModalShow(true)
        setPedido(p)
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
                    </tr>
                </thead>
                <tbody>
                    {compras.map(p => <tr key={p._id}>
                        <td>{p.fecha}</td>
                        <td>{p.nombre} {p.apellido}</td>
                        <td>{p.direccion}</td>
                        <td>
                            <Button size='sm' variant='danger' className='ml-1'>Eliminar</Button>
                            <Button
                                size='sm'
                                variant='success'
                                onClick={()=> mostrar(p.pedido)}
                                className='ml-1'>Ver perdido</Button>
                        </td>
                    </tr>)}
                </tbody>
            </Table>
            <ModalPedido
                pedido={pedido}
                modalShow={modalShow}
                setModalShow={setModalShow}
                onHide={onHide}/>
        </Fragment>
    )
}
