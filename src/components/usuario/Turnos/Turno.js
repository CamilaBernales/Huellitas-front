import React, { useState, useEffect } from "react";
import { Col, Form, Row, Container, Button, Alert } from "react-bootstrap";
import Swal from "sweetalert2";
import Logo from "../Elementos-Comunes/Logo";
import Navbar from "../Elementos-Comunes/Navbar";
import axiosConfig from "../../../config/axios";
import '../../../css/Turno.css'
// import moment from "moment";

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
        })
        .catch((err) => {
          console.log(err.response);
          setError(true);
          setMsgError(err.response.data.msg);
          window.scrollTo(0, 200);
        });
    } else {
      window.scrollTo(0, 200);
      setError(true);
      setMsgError("Los campos deben estar completos.");
    }
    setNuevoTurno({
      nombremascota: "",
      edad: "",
      raza: "",
      particularidades: "",
      fecha: new Date(),
      hora: "",
      resumen: "",
      contacto: "",
    });
  };
  useEffect(() => {
    traerTurnosDisp();
    //eslint-disable-next-line
  }, [nuevoTurno.fecha]);
  return (
    <>
      <Logo />
      <Navbar />
      <Container className="my-5 py-3">
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
            <h4>Datos de tu Mascota</h4>
            <Form onSubmit={submitTurno}>
              <Row className="my-3">
                <Col className="my-3">
                  <Form.Label>Nombre de tu mascota</Form.Label>
                  <Form.Control
                    required
                    placeholder="Nombre de tu mascota"
                    name="nombremascota"
                    onChange={handleTurno}
                    maxLength="40"
                  />
                </Col>
              </Row>
              <Row className="my-3">
                <Col className="my-3">
                  <Form.Label>Edad de tu mascota</Form.Label>
                  <Form.Control
                    placeholder="Edad"
                    name="edad"
                    onChange={handleTurno}
                    type="number"
                  />
                </Col>
              </Row>
              <Row className="my-3">
                <Col className="my-3">
                  <Form.Label>Raza de tu mascota</Form.Label>

                  <Form.Control
                    placeholder="Raza"
                    name="raza"
                    onChange={handleTurno}
                    maxLength="40"
                  />
                </Col>
              </Row>
              <Row className="my-3">
                <Col className="my-3">
                  <Form.Label>Alergias y otras particularidades</Form.Label>

                  <Form.Control
                    placeholder="Alergias y otras particularidades"
                    name="particularidades"
                    onChange={handleTurno}
                    maxLength="120"
                  />
                </Col>
              </Row>

              <hr />

              <h4>Información de tu turno</h4>
              <Row className="my-3">
                <Col className="my-3">
                  <Form.Label>Tu número de teléfono</Form.Label>
                  <Form.Control
                    required
                    placeholder="Tu número de teléfono"
                    name="contacto"
                    onChange={handleTurno}
                  />
                </Col>
              </Row>
              <Row className="my-3">
                <Col className="my-3">
                  <Form.Label>Elige una fecha para tu turno</Form.Label>
                  <Form.Control
                    required
                    type="date"
                    name="fecha"
                    onChange={handleTurno}
                  />
                </Col>
              </Row>
              <Row className="my-3">
                <Col className="my-3">
                  <Form.Label>Elige un horario para tu turno</Form.Label>
                  <Form.Group>
                    <select className="w-100" onChange={handleTurno} name="hora">
                      {horarios.map((cita, i) => (
                        <option value={cita} key={i}>
                          {cita}
                        </option>
                      ))}
                    </select>
                  </Form.Group>
                </Col>
              </Row>
              <Row className="my-3">
                <Col className="my-3">
                  <Form.Label>
                    Escribe un breve resumen de lo que le pasa tu mascota
                  </Form.Label>
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
            </Form>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Turno;
