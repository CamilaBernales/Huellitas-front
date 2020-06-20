import React, { useEffect, useState } from "react";
import Logo from "../../../components/usuario/Elementos-Comunes/Logo";
import Navbar from "../../../components/usuario/Elementos-Comunes/Navbar";
import axiosConfig from "../../../config/axios";
import { Table, Button, Card, Row, Col, Container } from "react-bootstrap";
import moment from "moment";
import Swal from "sweetalert2";
import "../../../css/Turno.css";

const MisTurnos = () => {
  let fecha = new Date();
  let fechaActual = moment(fecha).format("YYYY-MM-DD");
  console.log(fechaActual);
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
      cancelButtonText: "No",
      confirmButtonText: "Sí, cancelar!",
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
      <Container>
        <Row className="d-flex justify-content-center align-items-center text-start my-3">
          <Col sm={12} md={8} xl={10}>
            <p>Tus turnos</p>
            <Table responsive striped bordered hover size="sm">
              <thead>
                <tr>
                  <th>Fecha</th>
                  <th>Hora</th>
                </tr>
              </thead>
              <tbody>
                {misTurnos.map((turno) => {
                  if (turno.fecha < fechaActual) {
                    return (
                      <tr key={turno._id}>
                        <td>{turno.fecha}</td>
                        <td>{turno.hora}</td>
                      </tr>
                    );
                  }
                })}
              </tbody>
            </Table>
          </Col>
        </Row>
        <Row className="d-flex justify-content-center align-items-center text-start my-3">
          <Col sm={12} md={8} xl={10}>
            <p>Próximo Turno</p>
            {misTurnos.map((turno) => {
              if (turno.fecha > fechaActual) {
                return (
                  <Card
                    className="my-3 font-weight-bold cardTurno"
                    // bg="info"
                    key={turno._id}
                    // text="light"
                    style={{ width: "18rem" }}
                  >
                    {/* <Card.Header> <p>Próximo Turno</p></Card.Header> */}
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
                );
              }
            })}
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default MisTurnos;
