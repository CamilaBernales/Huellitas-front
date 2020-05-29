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

const TurnoPeluqueria = () => {
  const [nuevoTurno, setNuevoTurno] = useState({
    nombre: "",
    edad: "",
    raza: "",
    particularidades: "",
    fecha: "",
    hora: "",
    profesional: "",
  });

  const [turnosPeluqueria, setTurnoPeluqueria] = useState(
    JSON.parse(localStorage.getItem("turnos peluqueria")) || []
  );
  const [error, setError] = useState(false);

  const submitTurno = (e) => {
    e.preventDefault();
    if (
      nuevoTurno.nombre !== "" &&
      nuevoTurno.edad !== "" &&
      nuevoTurno.raza !== "" &&
      nuevoTurno.fecha !== "" &&
      nuevoTurno.hora !== "" &&
      nuevoTurno.profesional !== ""
    ) {
      setTurnoPeluqueria([...turnosPeluqueria, nuevoTurno]);
      localStorage.setItem(
        "turnos peluqueria",
        JSON.stringify(turnosPeluqueria)
      );
    } else {
      setError(true);
    }
    // console.log(turnosPeluqueria)
    // console.log(nuevoTurno);
  };

  const handleTurno = (e) => {
    setNuevoTurno({
      ...nuevoTurno,
      [e.target.name]: e.target.value,
    });
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
            <Form onSubmit={submitTurno}>
              <Row>
                <Col className="my-3">
                  <Form.Control
                    placeholder="Nombre"
                    name="nombre"
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
                          label="Josefina Cipriani"
                          onChange={handleTurno}
                          name="profesional"
                          value="Josefina Cipriani"
                        />
                      </Accordion.Toggle>
                    </Card.Header>
                    <Accordion.Collapse eventKey="0">
                      <Card.Body>
                        Jose se dedica a bañar al 4 patas del hogar. Trabaja
                        hace 5 años con nosotros y destacamos su amabilidad y
                        paciencia
                      </Card.Body>
                    </Accordion.Collapse>
                  </Card>
                </Accordion>
              </Col>
            </Row>
            {/* opcion 2 */}
            <Row>
              <Col>
                <Accordion>
                  <Card>
                    <Card.Header>
                      <Accordion.Toggle as={Button} variant="Text" eventKey="0">
                        <Form.Check
                          type="radio"
                          name="profesional"
                          id="formHorizontalRadios2"
                          label="Mariana Montero"
                          value="Mariana Moreno"
                          onChange={handleTurno}
                        />
                      </Accordion.Toggle>
                    </Card.Header>
                    <Accordion.Collapse eventKey="0">
                      <Card.Body>
                        Mariana tiene más de 10 años de experiencia y trabaja
                        con nosotros hace 3. Se destaca por su simpatia y
                        profesionalismo{" "}
                      </Card.Body>
                    </Accordion.Collapse>
                  </Card>
                </Accordion>
                {/* Confirmar */}
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

export default TurnoPeluqueria;
