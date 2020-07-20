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

const Turnosadmin = () => {
  const [turnos, setTurnos] = useState([]);
  const [filtro, setFiltro] = useState("");
  const [loading, setLoading] = useState(false);
  const [filtrando, setFiltrando] = useState(true);
  const [totalPages, setTotalPages] = useState(1);
  const [currentPage, setCurrentPage] = useState(1);

  const traerTurnos = () => {
    axiosConfig
      .get(`/api/turnos/listadoturnos?pagina=${currentPage}`)
      .then((res) => {
        setTurnos(res.data.docs);
        setTotalPages(res.data.totalPages);
        setCurrentPage(res.data.page);
      })
      .catch(() => loading(false));
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
          setCurrentPage(res.data.page);
          setFiltrando(false);
        })
        .catch(() => setFiltrando(false));
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
      <Container className="my-5">
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
                  <option value="todos">Todos los turnos</option>
                </Form.Control>
              </Form.Group>
            </Col>
            <Col sm={12} md={4} className="my-2">
              <Button onClick={filtrarTurnos} className="boton">
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
                    <tr key={turno._id}>
                      <td>{turno.nombremascota}</td>
                      <td>{turno.fecha}</td>
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
