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
import Swal from "sweetalert2";
import Logo from "../Elementos-Comunes/Logo";
import Navbar from "../Elementos-Comunes/Navbar";
import tokenAuth from "../../../config/token";
import axiosConfig from "../../../config/axios";

const Turno = () => {
  const [nuevoTurno, setNuevoTurno] = useState({
    nombremascota: "",
    edad: "",
    raza: "",
    particularidades: "",
    fecha: "",
    hora: "",
    profesional: "",
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
          // const index = horarios.findIndex(
          //   (dianodisp) => dianodisp === nuevoTurno.hora
          // );
          // if (index) {
          //   console.log(index);
          //   horarios.splice(index, 1);
          //   console.log(horarios);
          //   setHorarios([...horarios, horarios]);
          // }
        })
        .catch((err) => {
          console.log(err.response);
        });
    } else {
      setError(true);
    }
  };

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
              {/* <input
                type="time"
                name="hora"
                className="m-3 w-50"
                onChange={handleTurno}
              /> */}
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
                          label="Beatriz Silva (Clínica)"
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
                          label="Ines Gonzales (Clínica)"
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
                          label="Martina Hernandez (Clínica)"
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
                          label="José Jarazo (Clínica)"
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
                          label="Gerónimo Bazán (Clínica)"
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
              </Col>
            </Row>
            <Row className="my-3">
              <Col>
                <Accordion>
                  <Card>
                    <Card.Header>
                      <Accordion.Toggle as={Button} variant="Text" eventKey="0">
                        <Form.Check
                          type="radio"
                          id="formHorizontalRadios2"
                          label="Josefina Cipriani (Peluquería)"
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
                          label="Mariana Montero (Peluquería)"
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
