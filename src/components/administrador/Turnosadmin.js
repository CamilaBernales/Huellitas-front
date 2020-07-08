import React, { useEffect, useState } from "react";
import { Container, Table, Row, Col } from "react-bootstrap";
import axiosConfig from "../../config/axios";

const Turnosadmin = () => {
  const [turnos, setTurnos] = useState([]);
  useEffect(() => {
    axiosConfig
      .get("/api/turnos/listadoturnos")
      .then((res) => setTurnos(res.data))
      .catch((err) => console.log(err.response));
  }, []);
  return (
    <>
      <Container className="my-5">
        <Row className="d-flex justify-content-center align-items-center text-start my-5">
          <Col sm={12} md={8} xl={10}>
            <Table responsive striped bordered hover size="sm">
              <thead>
                <tr>
                  <th>Nombre Mascota</th>
                  <th>Fecha</th>
                  <th>Hora</th>
                  <th>Contacto</th>
                </tr>
              </thead>
              <tbody>
                {turnos.map((turno) => (
                  <tr>
                    <td>{turno.nombremascota}</td>
                    <td>{turno.fecha}</td>
                    <td>{turno.hora}</td>
                    <td>{turno.contacto}</td>
                  </tr>
                ))}
              </tbody>
            </Table>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Turnosadmin;
