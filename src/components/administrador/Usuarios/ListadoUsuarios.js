import React, { useState, useEffect } from "react";
import axios from "../../../config/axios";
import { Container, Table, Row, Col } from "react-bootstrap";
import Navbaradmin from "../Elementos-Comunes/Navbaradmin";
const ListadoUsuarios = () => {
  const [usuarios, setUsuarios] = useState([]);

  const cambiarRol = (id) => {
    console.log(id);
  };

  useEffect(() => {
    const listarUsuarios = () => {
      axios
        .get("/api/usuarios/listadousuarios")
        .then((res) => {
          console.log(res);
          setUsuarios(res.data);
        })
        .catch((err) => {
          console.log(err);
        });
    };
    listarUsuarios();
  }, []);
  console.log(usuarios);
  return (
    <>
      <Navbaradmin />
      <Container className="my-5">
        <Row className="d-flex justify-content-center align-items-center text-center my-5">
          <Col sm={12} md={8} xl={10}>
            <Table responsive striped bordered hover size="sm">
              <thead>
                <tr>
                  <th>Nombre</th>
                  <th>Correo</th>
                  <th>Rol</th>
                  <th>Cambiar rol</th>
                </tr>
              </thead>
              <tbody>
                {usuarios.map((usuario, i) => (
                  <tr key={i}>
                    <td>{usuario.nombre}</td>
                    <td>{usuario.email}</td>
                    <td>{usuario.rol}</td>
                    <td>
                      <button onClick={() => cambiarRol(usuario._id)}>
                        Hacer ADMIN
                      </button>
                    </td>
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

export default ListadoUsuarios;
