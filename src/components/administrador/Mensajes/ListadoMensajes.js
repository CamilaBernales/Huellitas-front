import React, { useState, useEffect } from "react";
import axios from "../../../config/axios";
import { Container, Table, Row, Col, Button } from "react-bootstrap";
import Navbaradmin from "../../administrador/Elementos-Comunes/Navbaradmin";
import axiosConfig from "../../../config/axios";
import Swal from "sweetalert2";
const ListadoMensajes = () => {
  const [mensajes, setMensajes] = useState([]);
  const [usuarioEditado, setUsuarioEditado] = useState(false);

  const listarMensajes = () => {
    axios
      .get("/api/mensajes/listadomensajes")
      .then((res) => {
        setMensajes(res.data);
        console.log(res.data);
      })
      .catch((err) => {
        // console.log(err);
      });
  };
  useEffect(() => {
    listarMensajes();
  }, []);
  return (
    <>
      <Navbaradmin />
      <Container className="my-5">
        {/* {loading ? <p>Obtniendo...</p> : null} */}
        <Row className="d-flex justify-content-center align-items-center text-start my-5">
          <Col sm={12} md={8} xl={10}>
            <Table responsive striped bordered hover size="sm">
              <thead>
                <tr>
                  <th>Camila</th>
                  <th>Correo</th>
                  <th>Mensaje</th>
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
                      <td className="text-center">
                        <Button>
                          <a
                            href={`mailto:${mensaje.email}?subject=Equipo%20Veterinaria%20Huellitas`}
                            className="mx-2"
                          >
                            <i className="fab far fa-envelope fa-2x"></i>
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
      </Container>
    </>
  );
};

export default ListadoMensajes;
