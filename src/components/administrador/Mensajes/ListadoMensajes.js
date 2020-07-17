import React, { useState, useEffect } from "react";
import axios from "../../../config/axios";
import { Container, Table, Row, Col, Button, Spinner } from "react-bootstrap";
const ListadoMensajes = () => {
  const [mensajes, setMensajes] = useState([]);
  const [loading, setLoading] = useState(false);
  const listarMensajes = () => {
    axios
      .get("/api/mensajes/listadomensajes")
      .then((res) => {
        setMensajes(res.data);
      })
      .catch((err) => {
        // console.log(err);
      });
  };
  useEffect(() => {
    window.scrollTo(0, 200);
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      listarMensajes();
    }, 3000);
  }, []);
  return (
    <>
      <Container className="my-5">
        {/* {loading ? <p>Obtniendo...</p> : null} */}
        {!loading ? (
          <Row className="d-flex justify-content-center align-items-center text-start my-5">
            <Col sm={12} md={8} xl={10}>
              <Table responsive striped bordered hover size="sm">
                <thead>
                  <tr>
                    <th>Nombre</th>
                    <th>Correo</th>
                    <th>Mensaje</th>
                    <th>Fecha</th>
                    <th>Responder</th>
                  </tr>
                </thead>
                <tbody>
                  {mensajes.map((mensaje) => {
                    return (
                      <tr key={mensaje._id}>
                        <td>{mensaje.nombre}</td>
                        <td>{mensaje.email}</td>
                        <td>{mensaje.mensaje}</td>
                        <td>{mensaje.created_at}</td>
                        <td className="text-center">
                          <Button variant="info">
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
        ) : (
          <Row className="mt-4 mb-4  my-4  d-flex justify-content-center align-items-center">
            <Spinner animation="grow" variant="info" />
            <Spinner animation="grow" variant="info" />
            <Spinner animation="grow" variant="info" />
          </Row>
        )}
      </Container>
    </>
  );
};

export default ListadoMensajes;
