import React, { useState, useEffect } from "react";
import axios from "../../../config/axios";
import { Container, Table, Row, Col, Spinner, Alert } from "react-bootstrap";
import axiosConfig from "../../../config/axios";
import Swal from "sweetalert2";
const ListadoUsuarios = () => {
  const [usuarios, setUsuarios] = useState([]);
  const [usuarioEditado, setUsuarioEditado] = useState(false);
  const [totalPages, setTotalPages] = useState(1);
  const [currentPage, setCurrentPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  const otorgarPermisos = (usuario) => {
    Swal.fire({
      title: `¿Estas seguro de otorgar permisos de administrador a ${usuario.nombre}?`,
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
          .put(`/api/usuarios/otorgarpermisos/${usuario._id}`)
          .then(() => {
            Swal.fire("La edición fue guardada con éxito!", "", "success");
            setUsuarioEditado(true);
            window.location.reload(true);
          })
          .catch(() => {
            setError(true);
            setErrorMsg("Hubo un error.");
          });
      }
    });
  };

  const quitarPermisos = (usuario) => {
    Swal.fire({
      title: `¿Estas seguro de quitar permisos de administrador a ${usuario.nombre} ?`,
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
          .put(`/api/usuarios/quitarpermisos/${usuario._id}`)
          .then(() => {
            Swal.fire("La edición fue guardada con éxito!", "", "success");
            setUsuarioEditado(true);
            window.location.reload(true);
          })
          .catch(() => {
            setError(true);
            setErrorMsg("Hubo un error.");
          });
      }
    });
  };
  const listarUsuarios = () => {
    axios
      .get(`/api/usuarios/listadousuarios?pagina=${currentPage}`)
      .then((res) => {
        setUsuarios(res.data.docs);
        setTotalPages(res.data.totalPages);
      })
      .catch(() => {
        setError(true);
        setErrorMsg("Hubo un error.");
      });
  };
  const verMas = () =>
    totalPages > currentPage &&
    !loading &&
    !error && (
      <button
        className="btn btn-info"
        onClick={() => {
          setCurrentPage(currentPage + 1);
        }}
      >
        Ver más
      </button>
    );
  const volver = () =>
    totalPages >= currentPage &&
    currentPage !== 1 &&
    !loading &&
    !error && (
      <button
        className="btn btn-info"
        onClick={() => {
          setCurrentPage(currentPage - 1);
        }}
      >
        Volver
      </button>
    );
  useEffect(() => {
    window.scrollTo(0, 200);
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      listarUsuarios();
      window.scrollTo(0, 200);
    }, 3000);
    // eslint-disable-next-line
  }, [usuarioEditado, currentPage]);
  return (
    <>
      <Container className="my-5">
        {loading && !error ? (
          <Row className="mt-4 mb-4 d-flex justify-content-center align-items-center">
            <Spinner animation="grow" variant="info" />
            <Spinner animation="grow" variant="info" />
            <Spinner animation="grow" variant="info" />
          </Row>
        ) : null}
        {!loading && usuarios.length !== 0 ? (
          <Row className="d-flex justify-content-center align-items-center text-start my-5">
            <Col sm={12} md={8} lg={10}>
              <Table striped bordered hover responsive="sm">
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
                            <button onClick={() => quitarPermisos(usuario)}>
                              Hacer usuario general
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
                            <button onClick={() => otorgarPermisos(usuario)}>
                              Hacer admin
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
        ) : (
          (!loading && usuarios.length === 0) ||
          (!loading && error && (
            <Row className="mt-4 mb-4 my-4 d-flex justify-content-center align-items-center">
              <Alert className="text-center" variant="warning">
                <h6>
                  {" "}
                  {errorMsg}{" "}
                  <span role="img" aria-label="cara triste">
                    &#128546;
                  </span>{" "}
                </h6>
              </Alert>
            </Row>
          ))
        )}
        <Row className="d-flex justify-content-center align-items-center">
          <div className="text-center my-4 mx-1">{volver()}</div>
          <div className="text-center my-4 mx-1">{verMas()}</div>
        </Row>
      </Container>
    </>
  );
};

export default ListadoUsuarios;
