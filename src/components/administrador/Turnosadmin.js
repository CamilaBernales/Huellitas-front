import React, { Fragment, useState } from 'react';
import { Redirect } from 'react-router-dom';
import { Table, Container, Button, Row, Col, InputGroup, FormControl } from 'react-bootstrap';
import Navbaradmin from './Navbaradmin';

export default function Turnosadmin () {
  const [turnos, setTurnos] = useState(JSON.parse(localStorage.getItem('turnos')));
  const usuarioReg = localStorage.getItem('usuarioReg');

  if (usuarioReg !== 'Administrador') {
    return (<Redirect to="/"/>);
  }

  const turnosCode = [
    {
      idTurno: '01',
      nombre: 'Maria',
      servicio: 'Peluquería',
      fecha: '02/07/20',
      hora: '10:00'
    },
    {
      idTurno: '02',
      nombre: 'Pedro',
      servicio: 'Desparasitar',
      fecha: '04/07/20',
      hora: '14:00'
    },
    {
      idTurno: '03',
      nombre: 'Daniel',
      servicio: 'Vacuna',
      fecha: '05/07/20',
      hora: '10:00'
    }
  ];

  localStorage.setItem('turnos', JSON.stringify(turnosCode));

  const editarTurno = (id) => {

  }

  const eliminarTurno = (id) => {
    if (window.confirm('Desea eliminar este turno?')) {
      const turnosFilt = turnos.filter(turno => turno.idTurno !== id);
      localStorage.setItem('turnos', JSON.stringify(turnosFilt));
      setTurnos(JSON.parse(localStorage.getItem('turnos')));
    }
  }

  return (
    <Fragment>
      <Navbaradmin/>
      <Container className="d-flex flex-column justify-center py-5">
        <Row className="m-0 d-flex align-items-end">
          <Col className="pl-0">
            <label htmlFor="nombre"className="mb-0">Nombre</label>
            <InputGroup className="mb-4" size="sm">
              <FormControl id="nombre" aria-describedby="nombre" />
            </InputGroup>
          </Col>
          <Col>
            <label htmlFor="servicio"className="mb-0">Servicio</label>
            <InputGroup className="mb-4" size="sm">
              <FormControl id="servicio" aria-describedby="servicio" />
            </InputGroup>
          </Col>
          <Col>
            <label htmlFor="fecha"className="mb-0">Fecha</label>
            <InputGroup className="mb-4" size="sm">
              <FormControl id="fecha" aria-describedby="fecha" />
            </InputGroup>
          </Col>
          <Col>
            <label htmlFor="hora"className="mb-0">Hora</label>
            <InputGroup className="mb-4" size="sm">
              <FormControl id="hora" aria-describedby="hora" />
            </InputGroup>
          </Col>
          <Col className="p-0">
            <Button className="mb-4" size="sm">Guardar</Button>
          </Col>
        </Row>
        <Table striped bordered responsive size="sm">
          <thead>
            <tr>
              <th>Turno Id</th>
              <th>Nombre</th>
              <th>Detalle servicio</th>
              <th>Fecha</th>
              <th>Hora</th>
              <th>Editar</th>
              <th>Eliminar</th>
            </tr>
          </thead>
          <tbody>
            {
              turnos.map((turno) => {
                return(
                  <tr key={turno.idTurno}>
                    <td>{turno.idTurno}</td>
                    <td>{turno.nombre}</td>
                    <td>{turno.servicio}</td>
                    <td>{turno.fecha}</td>
                    <td>{turno.hora}</td>
                    <td className="d-flex-column">
                      <Button onClick={() => editarTurno(turno.idTurno)}>
                        <i className="fas fa-edit"/>
                      </Button>
                    </td>
                    <td className="d-flex-column justify-content-center">
                      <Button onClick={() => eliminarTurno(turno.idTurno)}>
                        <i className="fas fa-trash"/>
                      </Button>
                    </td>
                  </tr>
                );
              })
            }
          </tbody>
        </Table>
      </Container>
    </Fragment>
  );
}