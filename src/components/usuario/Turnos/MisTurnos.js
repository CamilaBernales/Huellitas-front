import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../../../components/usuario/Elementos-Comunes/Logo";
import Navbar from "../../../components/usuario/Elementos-Comunes/Navbar";
import axiosConfig from "../../../config/axios";
import {
  Table,
  Button,
  Card,
  Row,
  Col,
  Container,
  Alert,
} from "react-bootstrap";
import moment from "moment";
import Swal from "sweetalert2";
import "../../../css/Turno.css";

const MisTurnos = () => {
  const [historial, setHistorial] = useState(false);
  let fecha = new Date();
  let fechaActual = moment(fecha).format("YYYY-MM-DD");
  const [misTurnos, setMisTurnos] = useState([]);

  const listarMisTurnos = () => {
    axiosConfig
      .get(`/api/turnos/listadoturno`)
      .then((res) => setMisTurnos(res.data.turnos))

      .catch((err) => console.log(err.response));
  };
  const cancelarTurno = (id) => {
    Swal.fire({
      title: "Estas seguro de que quieres cancelar este turno?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      cancelButtonText: "Cancelar",
      confirmButtonText: "Confirmar",
    }).then((result) => {
      if (result.value) {
        axiosConfig
          .delete(`api/turnos/delete/${id}`)
          .then((res) => {
            console.log(res);
            Swal.fire(
              "Cancelado!",
              "El turno fue cancelado con éxito.",
              "success"
            );
            listarMisTurnos();
          })
          .catch((err) => console.log(err.response));
      }
    });
  };
  useEffect(() => {
    listarMisTurnos();
  }, []);
  return (
    <>
      <Logo />
      <Navbar />
      <Container className="my-5 py-3">
        <em>
          <p>Tus próximos turnos</p>
        </em>
        <Row className="d-flex justify-content-center align-items-center text-start my-3">
          {misTurnos.length === 0 ? (
            <>
              <Alert className="text-center" variant="info">
                <h6>
                  {" "}
                  No tienes ningún turno próximamente{" "}
                  <span role="img" aria-label="cara triste">
                    &#128546;
                  </span>{" "}
                  <Link to="/turno">
                    Solicita un turno{" "}
                    <span role="img" aria-label="cara triste">
                      &#128522;
                    </span>{" "}
                  </Link>{" "}
                </h6>
              </Alert>
            </>
          ) : (
            <>
              {misTurnos.map((turno) => {
                if (turno.fecha > fechaActual) {
                  return (
                    <Col
                      sm={12}
                      md={8}
                      xl={4}
                      className="d-flex justify-content-center my-3"
                    >
                      <Card
                        className="font-weight-bold cardTurno"
                        key={turno._id}
                        style={{ width: "18rem" }}
                      >
                        <Card.Body>
                          <Row> Fecha: {turno.fecha}</Row>
                          <Row> Hora: {turno.hora}</Row>
                        </Card.Body>
                        <Card.Footer>
                          <Button
                            className="btn btn-primary w-100  justify-content-center align-items-center font-weight-bold"
                            onClick={() => cancelarTurno(turno._id)}
                          >
                            cancelar turno {"   "}
                            <i className="fas fa-trash" />
                          </Button>
                        </Card.Footer>
                      </Card>
                    </Col>
                  );
                } else {
                  return (
                    <>
                      <Col>
                        <Alert className="text-center" variant="info">
                          <h6>
                            {" "}
                            No tienes ningún turno próximamente{" "}
                            <span role="img" aria-label="cara triste">
                              &#128546;
                            </span>{" "}
                            <Link to="/turno">
                              Solicita un turno{" "}
                              <span role="img" aria-label="cara triste">
                                &#128522;
                              </span>{" "}
                            </Link>{" "}
                          </h6>
                        </Alert>
                      </Col>
                    </>
                  );
                }
              })}
            </>
          )}
        </Row>

        {historial ? (
          <>
            <strong>
              <em>
                {" "}
                <Link onClick={() => setHistorial(false)}>
                  Ocultar historial
                </Link>
              </em>
            </strong>
            <p>
              <em>Tus turnos</em>
            </p>
            <Row className="d-flex justify-content-center align-items-center text-start my-3">
              {misTurnos.length === 0 ? (
                <>
                  <Alert className="text-center" variant="info">
                    <h6>
                      {" "}
                      Aún no tienes un historial para mostrar{" "}
                      <span role="img" aria-label="cara triste">
                        &#128546;
                      </span>{" "}
                      <Link to="/turno">
                        Solicita un turno{" "}
                        <span role="img" aria-label="cara triste">
                          &#128522;
                        </span>{" "}
                      </Link>{" "}
                    </h6>
                  </Alert>
                </>
              ) : (
                <>
                  <Col sm={12} md={6} xl={10}>
                    {misTurnos.map((turno) => {
                      if (turno.fecha < fechaActual) {
                        return (
                          <>
                            <Table responsive striped bordered hover size="sm">
                              <thead>
                                <tr>
                                  <th>Fecha</th>
                                  <th>Hora</th>
                                  <th>Motivo</th>
                                </tr>
                              </thead>
                              <tbody>
                                <tr key={turno._id}>
                                  <td>{turno.fecha}</td>
                                  <td>{turno.hora}</td>
                                  <td>{turno.resumen}</td>
                                </tr>
                              </tbody>
                            </Table>
                          </>
                        );
                      } else {
                        return (
                          <>
                            <Alert className="text-center" variant="info">
                              <h6>
                                {" "}
                                Aún no tienes un historial para mostrar{" "}
                                <span role="img" aria-label="cara triste">
                                  &#128546;
                                </span>{" "}
                                <Link to="/turno">
                                  Solicita un turno{" "}
                                  <span role="img" aria-label="cara triste">
                                    &#128522;
                                  </span>{" "}
                                </Link>{" "}
                              </h6>
                            </Alert>
                          </>
                        );
                      }
                    })}
                  </Col>
                </>
              )}
            </Row>
          </>
        ) : (
          <strong>
            <em>
              {" "}
              <Link onClick={() => setHistorial(true)}>
                Historial de turnos
              </Link>
            </em>
          </strong>
        )}
      </Container>
    </>
  );
};

export default MisTurnos;
