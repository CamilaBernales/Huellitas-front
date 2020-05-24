import React, { Fragment } from 'react';
import { Table, Container } from 'react-bootstrap';
import Navbaradmin from './Navbaradmin';

export default function Turnosadmin () {
  let turnos =[
    {
      idTurnos: '01',
      nombre: 'Maria',
      servicio: 'Peluquería',
      fecha: '02/07/20',
      hora: '10:00'
    },
    {
      idTurnos: '02',
      nombre: 'Pedro',
      servicio: 'Desparasitar',
      fecha: '04/07/20',
      hora: '14:00'
    },
    {
      idTurnos: '03',
      nombre: 'Daniel',
      servicio: 'Vacuna',
      fecha: '05/07/20',
      hora: '10:00'
    }
  ];

  const listarTurnos = () => {
    let tbody = [];
    for (let index = 0; index < turnos.length; index++) {
      const turno = turnos[index];
      tbody.push(
        <tr key={turno.idTurnos}>
          <td>{turno.idTurnos}</td>
          <td>{turno.nombre}</td>
          <td>{turno.servicio}</td>
          <td>{turno.fecha}</td>
          <td>{turno.hora}</td>
        </tr>
      );
    }
    return tbody;
  }

  return(
    <Fragment>
      <Navbaradmin/>
      <Container className="d-flex justify-center py-5">
        <Table striped bordered responsive size="sm">
          <thead>
            <tr>
              <th>Turno Id</th>
              <th>Nombre</th>
              <th>Detalle servicio</th>
              <th>Fecha</th>
              <th>Hora</th>
            </tr>
          </thead>
          <tbody>
            {listarTurnos()}
          </tbody>
        </Table>
      </Container>
    </Fragment>
  );
}