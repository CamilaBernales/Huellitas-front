import React from "react";
import { Link } from "react-router-dom";
import { Row, Col, Card, Container } from "react-bootstrap";
import turnoconsulta from "../../../img/turnoconsulta.jpg";
import turnopeluqueria from "../../../img/turnopeluqueria.jpg";

const Turnos = () => {
  return (
    <>
      <Container className="my-4">
        <Row className="col-12 m-auto">
          <Col>
            <Card>
              <Card.Img
                variant="top"
                alt="consulta veterinaria"
                src={turnoconsulta}
              />
              <Card.Body>
                <Card.Text>
                  <Link to={"/turno"}>
                    <input
                      type="submit"
                      className="btn btn-primary w-100"
                      value="Solicitar Turno para Consulta Médica"
                    />
                  </Link>
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>

          <Col>
            <Card>
              <Card.Img
                variant="top"
                alt="turno peluqueria"
                src={turnopeluqueria}
              />
              <Card.Body>
                <Card.Text>
                  <Link to={"/turno"}>
                    <input
                      type="submit"
                      className="btn btn-primary w-100"
                      value="Solicitar Turno para Peluquería"
                    />
                  </Link>
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Turnos;
