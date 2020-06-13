import React, { useState, useEffect } from "react";
import {
  Col,
  Form,
  Row,
  Container,
  Accordion,
  Card,
  Button,
  Alert,
} from "react-bootstrap";
import { equipo } from "../Equipo/Equipo";
import Swal from "sweetalert2";
import Logo from "../Elementos-Comunes/Logo";
import Navbar from "../Elementos-Comunes/Navbar";
import tokenAuth from "../../../config/token";
import axiosConfig from "../../../config/axios";
import moment from 'moment';

const Turno = () => {
  console.log(equipo);
  const [nuevoTurno, setNuevoTurno] = useState({
    nombremascota: "",
    edad: "",
    raza: "",
    particularidades: "",
    fecha: "",
    hora: "",
    profesional: "",
    resumen: "",
  });

  const [horarios, setHorarios] = useState([
    "9:00",
    "9:30",
    "10:00",
    "10:30",
    "11:00",
    "11:30",
    "12:00",
    "14:00",
    "14:30",
    "15:00",
    "15:30",
    "16:00",
    "16:30",
    "17:00",
    "17:30",
    "18:00",
    "18:30",
    "19:00",
  ]);
  const [error, setError] = useState(false);

  const handleTurno = (e) => {
    setNuevoTurno({
      ...nuevoTurno,
      [e.target.name]: e.target.value,
    });
  };
  const traerTurnosDisp = () => {
    axiosConfig
      .get(`/api/turnos/horariosdip/${nuevoTurno.fecha}`)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err.response);
      });
  };

  const submitTurno = (e) => {
    if (
      nuevoTurno.nombremascota.trim() !== "" &&
      nuevoTurno.edad.trim() !== "" &&
      nuevoTurno.raza.trim() !== "" &&
      nuevoTurno.fecha.trim() !== "" &&
      nuevoTurno.hora.trim() !== "" &&
      nuevoTurno.profesional.trim() !== ""
    ) {
      e.preventDefault();
      const token = localStorage.getItem("token");
      if (token) {
        tokenAuth(token);
      }

      console.log(token);
      axiosConfig
        .post("/api/turnos/alta", nuevoTurno)
        .then((res) => {
          Swal.fire({
            position: "center",
            icon: "success",
            title: "Tu turno fue guardado con éxito.",
            showConfirmButton: false,
            timer: 1500,
          });
          console.log(res);
        })
        .catch((err) => {
          console.log(err.response);
        });
    } else {
      setError(true);
    }
  };
  useEffect(() => {
    traerTurnosDisp();
    //eslint-disable-next-line
  }, [nuevoTurno.fecha]);
  return (
    <>
      <Logo />
      <Navbar />
      <Container className="my-4 ">
        {error ? (
          <Alert
            className="p-3 text-center text-uppercase font-weight-bold"
            variant="danger"
          >
            Los campos deben estar completos
          </Alert>
        ) : null}
        <Row class="col-12">
          <Col xs={12} md={8} lg={6}>
            <h3>Datos de tu Mascota</h3>
            <hr />
            <Form>
              <Row>
                <Col className="my-3">
                  <Form.Control
                    placeholder="Nombre de tu mascota"
                    name="nombremascota"
                    onChange={handleTurno}
                  />
                </Col>
              </Row>
              <Row>
                <Col className="my-3">
                  <Form.Control
                    placeholder="Edad"
                    name="edad"
                    onChange={handleTurno}
                  />
                </Col>
              </Row>
              <Row>
                <Col className="my-3">
                  <Form.Control
                    placeholder="Raza"
                    name="raza"
                    onChange={handleTurno}
                  />
                </Col>
              </Row>
              <Row>
                <Col className="my-3">
                  <Form.Control
                    placeholder="Alergias y otras particularidades"
                    name="particularidades"
                    onChange={handleTurno}
                  />
                </Col>
              </Row>
            </Form>

            <hr />

            <h3>Información de tu turno</h3>
            <Row className="m-3">
              <label>Elegi una fecha</label>
              <input
                type="date"
                className="m-3 w-50"
                name="fecha"
                onChange={handleTurno}
              />
            </Row>
            <Row className="m-3">
              <label>Elegi un Horario</label>
              <select onChange={handleTurno} name="hora">
                {horarios.map((cita, i) => (
                  <option value={cita} key={i}>
                    {cita}
                  </option>
                ))}
              </select>
            </Row>
            <Row>
              <Col className="my-3">
                <p>Cuentanos que le pasa a tu mascota</p>
                <textarea
                  className="p-4 w-100"
                  id="resumen"
                  name="resumen"
                  onChange={handleTurno}
                />
              </Col>
            </Row>
          </Col>

          {/* columna de profesionales */}
          <Col xs={12} md={8} lg={6}>
            <h3>Elige un Profesional</h3>
            <hr />
            {equipo.map((personal) => (
              <Row>
                <Col>
                  <Accordion>
                    <Card>
                      <Card.Header>
                        <Accordion.Toggle
                          as={Button}
                          variant="Text"
                          eventKey="0"
                        >
                          <Form.Check
                            type="radio"
                            id={personal.id}
                            label={personal.nombre}
                            value={personal.nombre}
                            name="profesional"
                            onChange={handleTurno}
                          />
                        </Accordion.Toggle>
                      </Card.Header>
                      <Accordion.Collapse eventKey="0">
                        <Card.Body>{personal.informacion}</Card.Body>
                      </Accordion.Collapse>
                    </Card>
                  </Accordion>
                </Col>
              </Row>
            ))}

            <Button
              type="submit"
              onClick={submitTurno}
              className="btn btn-primary my-2 w-100 mt-4 text-uppercase font-weight-bold"
            >
              Confirmar Turno
            </Button>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Turno;
