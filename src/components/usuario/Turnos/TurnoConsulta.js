import React, { useState } from "react";
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
import Logo from "../Elementos-Comunes/Logo";
import Navbar from "../Elementos-Comunes/Navbar";
import axiosConfig from "../../../config/axios";

const TurnoConsulta = () => {
  const [nuevoTurno, setNuevoTurno] = useState({
    nombremascota: "",
    edad: "",
    raza: "",
    particularidades: "",
    fecha: "",
    hora: "",
    profesional: ""
    });

  const [turnosConsulta, setTurnoConsulta] = useState(
    JSON.parse(localStorage.getItem("turnos clinica")) || []
  );
  const [error, setError] = useState(false);

  
  const handleTurno = (e) => {
    setNuevoTurno({
      ...nuevoTurno,
      [e.target.name]: e.target.value,
    });
  };


  const submitTurno = (e) => {
    e.preventDefault();
    
      axiosConfig
        .post("/api/turnos/alta", nuevoTurno)
        .then((res) => {
          console.log(res);
        })
        .catch((err) => {
          console.log(err);
        });
      // setTurnoConsulta([...turnosConsulta, nuevoTurno]);
      // localStorage.setItem("turnos clinica", JSON.stringify(turnosConsulta));
      // } else {
      //   setError(true);
      // }
        // console.log(turnosPeluqueria)
    // console.log(nuevoTurno);
  };


  return (
    <>
      <Logo />
      <Navbar />
      <Container className="my-4 ">
        {error ? (
          <Alert variant="danger">Los campos deben estar completos</Alert>
        ) : null}
        <Row class="col-12">
          <Col xs={12} md={8} lg={6}>
            <h3>Datos de tu Mascota</h3>
            <hr />
            <Form>
              <Row>
                <Col className="my-3">
                  <Form.Control placeholder="Nombre" />
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
              <input
                type="time"
                name="hora"
                className="m-3 w-50"
                onChange={handleTurno}
              />
            </Row>
          </Col>

          {/* columna de profesionales */}
          <Col xs={12} md={8} lg={6}>
            <h3>Elige un Profesional</h3>
            <hr />
            {/* opcion 1 */}
            <Row className="my-3">
              <Col>
                <Accordion>
                  <Card>
                    <Card.Header>
                      <Accordion.Toggle as={Button} variant="Text" eventKey="0">
                        <Form.Check
                          type="radio"
                          id="formHorizontalRadios2"
                          label="Beatriz Silva"
                          value="Beatriz Silva"
                          name="profesional"
                          onChange={handleTurno}
                        />
                      </Accordion.Toggle>
                    </Card.Header>
                    <Accordion.Collapse eventKey="0">
                      <Card.Body>
                        Egresada de la Universidad de Tucumán, especializada en
                        clínica y kinesiología de pequeños animales.
                      </Card.Body>
                    </Accordion.Collapse>
                  </Card>
                </Accordion>
              </Col>
            </Row>

            {/* opcion 2 */}
            <Row className="my-3">
              <Col>
                <Accordion>
                  <Card>
                    <Card.Header>
                      <Accordion.Toggle as={Button} variant="Text" eventKey="0">
                        <Form.Check
                          type="radio"
                          id="formHorizontalRadios2"
                          label="Ines Gonzales"
                          value="Ines Gonzaleso"
                          name="profesional"
                          onChange={handleTurno}
                        />
                      </Accordion.Toggle>
                    </Card.Header>
                    <Accordion.Collapse eventKey="0">
                      <Card.Body>
                        Egresada de la Universidad de Buenos Aires,
                        especializada en clínica de pequeños animales
                      </Card.Body>
                    </Accordion.Collapse>
                  </Card>
                </Accordion>
              </Col>
            </Row>
            {/* opcion 3 */}
            <Row className="my-3">
              <Col>
                <Accordion>
                  <Card>
                    <Card.Header>
                      <Accordion.Toggle as={Button} variant="Text" eventKey="0">
                        <Form.Check
                          type="radio"
                          id="formHorizontalRadios2"
                          label="Martina Hernandez"
                          value="Martina Hernandez"
                          name="profesional"
                          onChange={handleTurno}
                        />
                      </Accordion.Toggle>
                    </Card.Header>
                    <Accordion.Collapse eventKey="0">
                      <Card.Body>
                        Egresada de la UNT, especializada en clínica de pequeños
                        animales y en medicina felina, con 30 años de
                        experiencia clínica y criador de felinos exóticos y
                        persas
                      </Card.Body>
                    </Accordion.Collapse>
                  </Card>
                </Accordion>
              </Col>
            </Row>
            {/* opcion 4 */}
            <Row className="my-3">
              <Col>
                <Accordion>
                  <Card>
                    <Card.Header>
                      <Accordion.Toggle as={Button} variant="Text" eventKey="0">
                        <Form.Check
                          type="radio"
                          id="formHorizontalRadios2"
                          label="José Jarazo"
                          value="José Jarazo"
                          name="profesional"
                          onChange={handleTurno}
                        />
                      </Accordion.Toggle>
                    </Card.Header>
                    <Accordion.Collapse eventKey="0">
                      <Card.Body>
                        Egresado de la universidad del Salvador, especializado
                        en clínica de pequeños animales y en cirugía de tejidos
                        blandos traumatizados en el Royal Veterinary Collegue de
                        la Universidad de Londres.
                      </Card.Body>
                    </Accordion.Collapse>
                  </Card>
                </Accordion>
              </Col>
            </Row>
            {/* opcion 5 */}
            <Row className="my-3">
              <Col>
                <Accordion>
                  <Card>
                    <Card.Header>
                      <Accordion.Toggle as={Button} variant="Text" eventKey="0">
                        <Form.Check
                          type="radio"
                          id="formHorizontalRadios2"
                          label="Gerónimo Bazán"
                          value="Gerónimo Bazán"
                          name="profesional"
                          onChange={handleTurno}
                        />
                      </Accordion.Toggle>
                    </Card.Header>
                    <Accordion.Collapse eventKey="0">
                      <Card.Body>
                        Veterinario egresado de la U.B.A en 1995 (22 años de
                        experiencia). Se desempeña en áreas de cirugía,
                        anestesiología y cardiología. Conferencista
                        internacional.
                      </Card.Body>
                    </Accordion.Collapse>
                  </Card>
                </Accordion>
                {/* confirmar turno */}
                <Button
                  type="submit"
                  onClick={submitTurno}
                  className="btn btn-primary my-2 w-100 mt-4 text-uppercase font-weight-bold"
                >
                  Confirmar Turno
                </Button>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default TurnoConsulta;
