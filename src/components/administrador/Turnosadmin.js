import React, { useEffect, useState } from "react";
import {
  Container,
  Table,
  Row,
  Col,
  Form,
  Button,
  Alert,
  Spinner,
} from "react-bootstrap";
import axiosConfig from "../../config/axios";
import moment from "moment";
import "../../css/Turno.css"

const Turnosadmin = () => {
  const [turnos, setTurnos] = useState([]);
  const [filtro, setFiltro] = useState("");
  const [loading, setLoading] = useState(false);
  const [filtrando, setFiltrando] = useState(true);
  const [totalPages, setTotalPages] = useState(1);
  const [currentPage, setCurrentPage] = useState(1);
  const [error, setError] = useState(false);

  const traerTurnos = () => {
    axiosConfig
      .get(`/api/turnos/listadoturnos?pagina=${currentPage}`)
      .then((res) => {
        setTurnos(res.data.docs);
        setTotalPages(res.data.totalPages);
      })
      .catch(() => {
        setError(true);
        loading(false);
      });
  };
  const onChangeFiltroTurnos = (e) => {
    setFiltro(e.target.value);
  };
  const filtrarTurnos = () => {
    if (filtro !== "") {
      axiosConfig
        .get(
          `/api/turnos/turnosfiltrados?fecha=${filtro}&&pagina=${currentPage}`
        )
        .then((res) => {
          setTurnos(res.data.docs);
          setTotalPages(res.data.totalPages);
          setFiltrando(false);
        })
        .catch(() => {
          setFiltrando(false);
          setError(true);
          loading(false);
        });
    } else {
      setCurrentPage(1);
      traerTurnos();
    }
  };
  const verMas = () =>
    totalPages > currentPage &&
    turnos.length !== 0 &&
    !loading && (
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
    currentPage !== null &&
    turnos.length !== 0 &&
    !loading && (
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
      traerTurnos();
    }, 3000);
    // eslint-disable-next-line
  }, [currentPage]);
  return (
    <>
      <Container className="m-auto">
      <Row className="d-flex justify-content-center align-items-center">
        <h3>Listado de Turnos</h3>
      </Row>
        <Form>
          <Row className="d-flex justify-content-center my-3">
            <Col sm={12} md={6} className="my-2">
              <Form.Group controlId="exampleForm.SelectCustom">
                <Form.Control
                  onChange={onChangeFiltroTurnos}
                  as="select"
                  name="fecha"
                  className="w-100"
                  custom
                >
                  <option value="" defaultValue>
                    Filtrar turnos por fecha
                  </option>
                  <option value="hoy">Hoy</option>
                  <option value="proximasemana">Próxima Semana</option>
                  <option value="">Todos los turnos</option>
                </Form.Control>
              </Form.Group>
            </Col>
            <Col sm={12} md={4} className="my-2">
              <Button onClick={filtrarTurnos} className="boton-search-admin buscar-admin">
                Buscar
              </Button>
            </Col>
          </Row>
        </Form>
        {loading ? (
          <Row className="mt-4 mb-4  my-4  d-flex justify-content-center align-items-center">
            <Spinner animation="grow" variant="info" />
            <Spinner animation="grow" variant="info" />
            <Spinner animation="grow" variant="info" />
          </Row>
        ) : null}
        {loading && error ? (
          <Row className="mt-4 mb-4 my-4 d-flex justify-content-center align-items-center">
            <Alert className="text-center" variant="danger">
              <h6>Hubo un error</h6>
            </Alert>
          </Row>
        ) : null}
        {turnos.length === 0 && !filtrando ? (
          <Row className="mt-4 mb-4 my-4 d-flex justify-content-center align-items-center">
            <Alert className="text-center" variant="warning">
              <h6>
                {" "}
                No hay resultados para mostrate{" "}
                <span role="img" aria-label="cara triste">
                  &#128546;
                </span>{" "}
              </h6>
            </Alert>
          </Row>
        ) : null}
        <Row className="d-flex justify-content-center align-items-center text-start my-3">
          {turnos.length !== 0 && !loading ? (
            <Col sm={12} md={8} lg={10}>
              <Table size="sm" striped bordered hover>
                <thead>
                  <tr>
                    <th className="th-admin">Nombre Mascota</th>
                    <th className="th-admin">Fecha</th>
                    <th className="th-admin">Hora</th>
                    <th className="th-admin">Contacto</th>
                  </tr>
                </thead>
                <tbody>
                  {turnos.map((turno) => (
                    <tr key={turno._id}>
                      <td>{turno.nombremascota}</td>
                      <td>{moment(turno.fecha).format("DD-MM-YYYY")}</td>
                      <td>{turno.hora}</td>
                      <td>{turno.telefono}</td>
                    </tr>
                  ))}
                </tbody>
              </Table>
            </Col>
          ) : null}
        </Row>
        <Row className="d-flex justify-content-center align-items-center">
          <div className="text-center my-4 mx-1">{volver()}</div>
          <div className="text-center my-4 mx-1">{verMas()}</div>
        </Row>
      </Container>
    </>
  );
};

export default Turnosadmin;
