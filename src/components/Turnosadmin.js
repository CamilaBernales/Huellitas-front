import React, { Fragment, useState } from 'react';
import { Redirect } from 'react-router-dom';
import { Table, Container, Button } from 'react-bootstrap';
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
      <Container className="d-flex justify-center py-5">
        <Table striped bordered responsive size="sm">
          <thead>
            <tr>
              <th>Turno Id</th>
              <th>Nombre</th>
              <th>Detalle servicio</th>
              <th>Fecha</th>
              <th>Hora</th>
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
                    <td className="d-flex justify-content-center">
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