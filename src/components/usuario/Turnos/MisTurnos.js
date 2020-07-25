import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axiosConfig from "../../../config/axios";
import {
  Table,
  Button,
  Card,
  Row,
  Col,
  Container,
  Alert,
  Spinner,
} from "react-bootstrap";
import moment from "moment";
import Swal from "sweetalert2";
import "../../../css/Turno.css";

const MisTurnos = () => {
  const [historial, setHistorial] = useState(false);
  const [loading, setLoading] = useState(false);
  const [fetchTurnos, setFetchTurnos] = useState(true);
  const [misTurnosPasados, setmisTurnosPasados] = useState([]);
  const [misTurnosProximos, setmisTurnosProximos] = useState([]);

  const listarMisTurnos = () => {
    axiosConfig
      .get(`/api/turnos/listadoturno`)
      .then((res) => {
        setmisTurnosProximos(res.data.turnosProximos);
        setmisTurnosPasados(res.data.turnosPasados);
        setFetchTurnos(false);
      })
      .catch((err) => {
        setFetchTurnos(false);
      });
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
    setLoading(true);
    window.scrollTo(0, 200);
    setTimeout(() => {
      setLoading(false);
      listarMisTurnos();
    }, 3000);
  }, []);
  return (
    <>
      <Container className="my-5 py-3">
        {loading ? (
          <Row className="mt-4 mb-4 d-flex justify-content-center align-items-center">
            <Spinner animation="grow" variant="info" />
            <Spinner animation="grow" variant="info" />
            <Spinner animation="grow" variant="info" />
          </Row>
        ) : (
          <>
            <strong>
              <em>Tus próximos turnos</em>
            </strong>
            <Row className="d-flex justify-content-center align-items-center text-start my-3">
              {misTurnosProximos.length === 0 && !fetchTurnos && !loading ? (
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
              ) : (!loading && !fetchTurnos) &&(
                <>
                  {misTurnosProximos.map((turno) => (
                    <Col
                      key={turno._id}
                      sm={12}
                      md={8}
                      xl={4}
                      className="d-flex justify-content-center my-3"
                    >
                      <Card
                        className="font-weight-bold cardTurno"
                        style={{ width: "18rem" }}
                      >
                        <Card.Body className="mx-auto">
                          <Row>
                            {" "}
                            Fecha: {moment(turno.fecha).format("DD/MM/YYYY")}
                          </Row>
                          <Row> Hora: {turno.hora}</Row>
                        </Card.Body>
                        <Card.Footer>
                          <Button
                            className="btn boton-card w-100  justify-content-center align-items-center font-weight-bold"
                            onClick={() => cancelarTurno(turno._id)}
                          >
                            cancelar turno {"   "}
                            <i className="fas fa-trash" />
                          </Button>
                        </Card.Footer>
                      </Card>
                    </Col>
                  ))}
                </>
              )}
            </Row>

            {historial ? (
              <>
                <strong>
                  <em>
                    {" "}
                    <Link
                      to="#"
                      className="text-dark"
                      onClick={() => setHistorial(false)}
                    >
                      Ocultar historial
                      {" "}
                      <i class="fas fa-arrow-up"></i>
                    </Link>
                  </em>
                </strong>
                <p>
                  <em>Tus turnos anteriores</em>
                </p>
                <Row className="d-flex justify-content-center align-items-center text-start my-3">
                  {misTurnosPasados.length === 0 && !fetchTurnos  && !loading ? (
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
                  ) : (!loading && !fetchTurnos) && (
                    <Col sm={12} md={8} lg={8}>
                      <Table striped bordered hover>
                        <thead>
                          <tr>
                            <th>Fecha</th>
                            <th>Hora</th>
                            <th>Motivo</th>
                          </tr>
                        </thead>
                        <tbody>
                          {misTurnosPasados.map((turno) => (
                            <tr key={turno._id}>
                              <td>
                                {moment(turno.fecha).format("DD/MM/YYYY")}
                              </td>
                              <td>{turno.hora}</td>
                              <td>{turno.resumen}</td>
                            </tr>
                          ))}
                        </tbody>
                      </Table>
                    </Col>
                  )}
                </Row>
              </>
            ) : (
              <strong>
                <em>
                  {" "}
                  <Link
                    to="#"
                    className="text-dark"
                    onClick={() => setHistorial(true)}
                  >
                    Historial de turnos{" "}
                    <i class="fas fa-arrow-down"></i>

                  </Link>
                </em>
              </strong>
            )}
          </>
        )}
      </Container>
    </>
  );
};

export default MisTurnos;
