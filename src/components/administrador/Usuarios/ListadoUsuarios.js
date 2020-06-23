import React, { useState, useEffect } from "react";
import axios from "../../../config/axios";
import { Container, Table, Row, Col } from "react-bootstrap";
import Navbaradmin from "../Elementos-Comunes/Navbaradmin";
import axiosConfig from "../../../config/axios";
import Swal from "sweetalert2";
const ListadoUsuarios = () => {
  const [usuarios, setUsuarios] = useState([]);
  const [usuario, setUsuario] = useState({});
  const [usuarioEditado, setUsuarioEditado] = useState(false);

  const otorgarPermisos = (id) => {
    axiosConfig
      .get(`/api/usuarios/obtenerusuario/${id}`)
      .then((res) => {
        setUsuario(res.data.usuario);
      })
      .catch((err) => console.log(err));
    Swal.fire({
      title: `¿Estas seguro de convertir al usuario ${usuario.nombre} en administrador?`,
      text: "No podrás revertir esta acción.",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      cancelButtonText: "Cancelar",
      confirmButtonText: "Confirmar",
    }).then((result) => {
      if (result.value) {
        axiosConfig
          .put(`/api/usuarios/quitaerpermisos/${id}`)
          .then((res) => {
            // console.log(res)
            Swal.fire("La edición fue guardada con éxito!", "", "success");
            setUsuarioEditado(true);
          })
          .catch((res) => console.log(res.response));
      }
    });
  };

  const quitarPermisos = (id) => {
    axiosConfig
      .get(`/api/usuarios/obtenerusuario/${id}`)
      .then((res) => {
        setUsuario(res.data.usuario);
      })
      .catch((err) => console.log(err));
    Swal.fire({
      title: `¿Estas seguro de convertir al usuario ${usuario.nombre} en usuario?`,
      text: "No podrás revertir esta acción.",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      cancelButtonText: "Cancelar",
      confirmButtonText: "Confirmar",
    }).then((result) => {
      if (result.value) {
        axiosConfig
          .put(`/api/usuarios/quitarpermisos/${id}`)
          .then((res) => {
            // console.log(res)
            Swal.fire("La edición fue guardada con éxito!", "", "success");
            setUsuarioEditado(true);
          })
          .catch((res) => console.log(res.response));
      }
    });
  };
  const listarUsuarios = () => {
    axios
      .get("/api/usuarios/listadousuarios")
      .then((res) => {
        setUsuarios(res.data);
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  useEffect(() => {
    listarUsuarios();
  }, [usuarioEditado]);
  return (
    <>
      <Navbaradmin />
      <Container className="my-5">
        {/* {loading ? <p>Obtniendo...</p> : null} */}
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
                {usuarios.map((usuario) => {
                  if (usuario.rol === "admin") {
                    return (
                      <tr key={usuario._id}>
                        <td>{usuario.nombre}</td>
                        <td>{usuario.email}</td>
                        <td>{usuario.rol}</td>
                        <td>
                          <button onClick={() => quitarPermisos(usuario._id)}>
                            Quitar Permisos
                          </button>
                        </td>
                      </tr>
                    );
                  } else {
                    return (
                      <tr key={usuario._id}>
                        <td>{usuario.nombre}</td>
                        <td>{usuario.email}</td>
                        <td>{usuario.rol}</td>
                        <td>
                          <button onClick={() => otorgarPermisos(usuario._id)}>
                            Otorgar Permisos
                          </button>
                        </td>
                      </tr>
                    );
                  }
                })}
              </tbody>
            </Table>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default ListadoUsuarios;
