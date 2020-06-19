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
import axiosConfig from "../../../config/axios";
import moment from "moment";

const Turno = () => {
  const [nuevoTurno, setNuevoTurno] = useState({
    nombremascota: "",
    edad: "",
    raza: "",
    particularidades: "",
    fecha: new Date(),
    hora: "",
    resumen: "",
    contacto: "",
  });
  const [horarios, setHorarios] = useState([]);
  const [error, setError] = useState(false);
  const [msgError, setMsgError] = useState("");
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
        setHorarios(res.data.hdisp);
      })
      .catch((err) => {
        console.log(err.response);
        setError(true);
        setMsgError(err.response.data.msg);
      });
  };

  const submitTurno = (e) => {
    if (
      nuevoTurno.nombremascota.trim() !== "" &&
      nuevoTurno.resumen.trim() !== "" &&
      nuevoTurno.fecha !== "" &&
      nuevoTurno.hora.trim() !== "" &&
      nuevoTurno.contacto.trim() !== ""
    ) {
      e.preventDefault();
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
          setError(true);
          setMsgError(err.response.data.msg);
        });
    } else {
      setError(true);
      setMsgError("Los campos deben estar completos.");
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
            {msgError}
          </Alert>
        ) : null}
        <Row className="d-flex justify-content-center align-items-center">
          <Col sm={12} md={8} xl={6}>
            <h3>Datos de tu Mascota</h3>
            <hr />
            <Form onSubmit={submitTurno}>
              <Row>
                <Col className="my-3">
                  <Form.Control
                    required
                    placeholder="Nombre de tu mascota"
                    name="nombremascota"
                    onChange={handleTurno}
                    maxLength="40"
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
                    maxLength="40"
                  />
                </Col>
              </Row>
              <Row>
                <Col className="my-3">
                  <Form.Control
                    placeholder="Alergias y otras particularidades"
                    name="particularidades"
                    onChange={handleTurno}
                    maxLength="120"
                  />
                </Col>
              </Row>
            </Form>

            <hr />

            <h3>Información de tu turno</h3>
            <Row>
              <Col className="my-3">
                <Form.Control
                  required
                  placeholder="Tu número de teléfono"
                  name="contacto"
                  onChange={handleTurno}
                />
              </Col>
            </Row>
            <Row className="m-3">
              <label>Elegi una fecha</label>
              <input
                required
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
                  required
                  className="p-4 w-100"
                  id="resumen"
                  name="resumen"
                  onChange={handleTurno}
                  maxLength="200"
                />
              </Col>
            </Row>
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
