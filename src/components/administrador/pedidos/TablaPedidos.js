import React from 'react'
import {Table, Button} from 'react-bootstrap'

export default function TablaPedidos({pedidos}) {

    return (
        <Table striped bordered hover>
            <thead>
                <tr>
                    <th>N° Pedido</th>
                    <th>Fecha</th>
                    <th>Cliente</th>
                    <th>Observaciones</th>
                    <ht>Acciones</ht>
                </tr>
            </thead>
            <tbody>
                {pedidos.map(p => 
                <tr>
                    <td>{p.id}</td>
                    <td>{p.fecha}</td>
                    <td>{p.cliente}</td>
                    <td>{p.observaciones}</td>
                    <td>
                        <Button size='sm' variant='danger' className='ml-1'>Eliminar</Button>
                        <Button size='sm' variant='success' className='ml-1'>Ver perdido</Button>
                        <Button size='sm' varinat='warning' className='ml-1'>Modificar</Button>
                    </td>
                </tr>)}
            </tbody>
        </Table>
    )
}
