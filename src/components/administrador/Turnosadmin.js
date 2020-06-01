import React, { Fragment, useState } from 'react';
import { Redirect } from 'react-router-dom';
import { 
  Table, 
  Container, 
  Button, 
  Row, 
  Col, 
  InputGroup, 
  FormControl 
} from 'react-bootstrap';
import Navbaradmin from './Elementos-Comunes/Navbaradmin';

export default function Turnosadmin () {
  const [turnos, setTurnos] = useState(JSON.parse(localStorage.getItem('turnos')) || []);
  const [disabled, setDisabled] = useState(true);
  const [editar, setEditar] = useState({
    idTurno: '',
    nombre: '',
    servicio: '',
    fecha: '',
    hora: ''
  });
  const usuarioReg = sessionStorage.getItem('usuarioReg');

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
    setDisabled(false);
    const [turnoSelec] = turnos.filter(turno => turno.idTurno === id);
    setEditar({
      idTurno: turnoSelec.idTurno,
      nombre: turnoSelec.nombre,
      servicio: turnoSelec.servicio,
      fecha: turnoSelec.fecha,
      hora: turnoSelec.hora
    });
  }

  const onChangeTurno = (e) => {
    e.preventDefault();
    setEditar({
      ...editar,
      [e.target.name]: e.target.value
    });
  }

  const onClickGuardar = () => {
    const turnosFilt = turnos.filter(turno => turno.idTurno !== editar.idTurno);
    const turnosEdit = turnosFilt.concat([editar]);
    setTurnos(turnosEdit);
    setEditar({
      idTurno: '',
      nombre: '',
      servicio: '',
      fecha: '',
      hora: ''
    });
    setDisabled(true);
  }

  const onClickCancelar = () => {
    setEditar({
      idTurno: '',
      nombre: '',
      servicio: '',
      fecha: '',
      hora: ''
    });
    setDisabled(true);
    return;
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
              <FormControl 
                disabled={disabled}
                id="nombre" 
                aria-describedby="nombre"
                type="text"
                name="nombre"
                value={editar.nombre}
                onChange={onChangeTurno}
              />
            </InputGroup>
          </Col>
          <Col>
            <label htmlFor="servicio"className="mb-0">Servicio</label>
            <InputGroup className="mb-4" size="sm">
              <FormControl 
                disabled={disabled}
                id="servicio" 
                aria-describedby="servicio" 
                type="text"
                name="servicio"
                value={editar.servicio}
                onChange={onChangeTurno}
              />
            </InputGroup>
          </Col>
          <Col>
            <label htmlFor="fecha"className="mb-0">Fecha</label>
            <InputGroup className="mb-4" size="sm">
              <FormControl 
                disabled={disabled}
                id="fecha" 
                aria-describedby="fecha" 
                type="text"
                name="fecha"
                value={editar.fecha}
                onChange={onChangeTurno}
              />
            </InputGroup>
          </Col>
          <Col>
            <label htmlFor="hora"className="mb-0">Hora</label>
            <InputGroup className="mb-4" size="sm">
              <FormControl 
                disabled={disabled}
                id="hora" 
                aria-describedby="hora" 
                type="text"
                name="hora"
                value={editar.hora}
                onChange={onChangeTurno}
              />
            </InputGroup>
          </Col>
          <Col className="p-0">
            <Button 
              disabled={disabled}
              className="mb-4" 
              size="sm"
              type="submit"
              onClick={onClickGuardar}
            >
              Guardar
            </Button>
            <Button 
              variant="outline-primary"
              disabled={disabled}
              className="mb-4 ml-3" 
              size="sm"
              type="submit"
              onClick={onClickCancelar}
            >
              Cancelar
            </Button>
          </Col>
        </Row>
        {
          turnos.length === 0?
            <h2 className="p-3 mx-auto">No hay turnos registardos</h2>
          :
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
                        <td className="text-center">
                          <Button onClick={() => editarTurno(turno.idTurno)}>
                            <i className="fas fa-edit"/>
                          </Button>
                        </td>
                        <td className="text-center">
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
        }
      </Container>
    </Fragment>
  );
}