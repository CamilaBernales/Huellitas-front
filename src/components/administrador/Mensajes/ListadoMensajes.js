import React, { useState, useEffect } from "react";
import axios from "../../../config/axios";
import {
  Container,
  Table,
  Row,
  Col,
  Button,
  Spinner,
  Alert,
} from "react-bootstrap";
import moment from "moment";
import "../../../css/Tabla.css";

const ListadoMensajes = () => {
  const [mensajes, setMensajes] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");
  const listarMensajes = () => {
    axios
      .get("/api/mensajes/listadomensajes")
      .then((res) => {
        setMensajes(res.data);
      })
      .catch(() => {
        setError(true);
        setErrorMsg("Hubo un error.");
      });
  };
  useEffect(() => {
    window.scrollTo(0, 0);
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      listarMensajes();
    }, 3000);
    // eslint-disable-next-line
  }, []);
  return (
    <>
      <Container className="mb-auto">
      <Row className="d-flex justify-content-center align-items-center">
        <h3 className="h3-admin">Listado de Mensajes</h3>
      </Row>
        {loading ? (
          <Row className="mt-4 mb-4  my-4  d-flex justify-content-center align-items-center">
            <Spinner animation="grow" variant="info" />
            <Spinner animation="grow" variant="info" />
            <Spinner animation="grow" variant="info" />
          </Row>
        ) : null}
        {error ? (
          <Row className="mt-4 mb-4 my-4 d-flex justify-content-center align-items-center">
            <Alert className="text-center" variant="danger">
              <h6>{errorMsg}</h6>
            </Alert>
          </Row>
        ) : null}
        {!loading && mensajes.length !== 0 ? (
          <Row className="d-flex justify-content-center align-items-center text-start my-5">
            <Col sm={12} md={8} lg={8}>
              <Table striped bordered hover responsive="sm">
                <thead>
                  <tr>
                    <th className="th-admin">Nombre</th>
                    <th className="th-admin">Correo</th>
                    <th className="th-admin">Mensaje</th>
                    <th className="th-admin">Fecha</th>
                    <th className="th-admin">Responder</th>
                  </tr>
                </thead>
                <tbody>
                  {mensajes.map((mensaje) => {
                    return (
                      <tr key={mensaje._id}>
                        <td>{mensaje.nombre}</td>
                        <td>{mensaje.email}</td>
                        <td>{mensaje.mensaje}</td>
                        <td>
                          {moment(mensaje.created_at).format("DD-MM-YYYY")}
                        </td>
                        <td className="text-center">
                          <Button variant="info" className="boton-email">
                            <a
                              href={`mailto:${mensaje.email}?subject=Equipo%20Veterinaria%20Huellitas`}
                              className="mx-2"
                            >
                              <i className="fab far fa-envelope fa-1x "></i>
                            </a>
                          </Button>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </Table>
            </Col>
          </Row>
        ) : null }
      </Container>
    </>
  );
};

export default ListadoMensajes;
