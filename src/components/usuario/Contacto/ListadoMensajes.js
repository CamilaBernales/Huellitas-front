import React, { Fragment } from 'react'
import Navbaradmin from '../../administrador/Navbaradmin'
import { Container, Row, Col, InputGroup, FormControl, Button, Table} from 'react-bootstrap'

export default function ListadoMensajes() {
    

    return (
        <Fragment>
            <Navbaradmin />
            <Container className="d-flex flex-column justify-center py-5">
                <Table striped bordered responsive size="sm">
                    <thead>
                        <tr>
                            <th>Nombre</th>
                            <th>Email</th>
                            <th>Mensaje</th>
                        </tr>
                    </thead>
                    <tbody>
                        
                    </tbody>
                </Table>
            </Container>
        </Fragment>
    )
}
