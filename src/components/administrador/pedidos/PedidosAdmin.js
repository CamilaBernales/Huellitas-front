import React, { Fragment, useState, useEffect } from "react";
import { Container, Row, Col, Form, Button, Spinner } from "react-bootstrap";
import TablaPedidos from "./TablaPedidos";
import axiosConfig from "../../../config/axios";

export default function PedidosAdmin() {
  const [loading, setLoading] = useState(true);
  const [compras, setCompras] = useState([]);
  // const [fechaFiltro, setFechaFiltro] = useState("");
  const [clienteFiltro, setClienteFiltro] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  // const handleFechaFiltro = (e) => {
  //   setFechaFiltro(e.target.value);
  // };

  const handleClienteFiltro = (e) => {
    setClienteFiltro(e.target.value);
  };
  const filtrarPedidos = () => {
    axiosConfig
      .get(
        `/api/compra/filtrocompras?nombre=${clienteFiltro}&&pagina=${currentPage}`
      )
      .then((res) => {
        setCompras(res.data.docs);
        setTotalPages(res.data.totalPages);
        setCurrentPage(res.data.page);
      })
      .catch((err) => console.log(err.response));
  };
  const listarPedidos = () => {
    axiosConfig
      .get("/api/compra/listado")
      .then((res) => setCompras(res.data))
      .catch((err) => console.log(err.response));
  };

  const verMas = () =>
    totalPages > currentPage &&
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
    setTimeout(() => {
      setLoading(false);
      listarPedidos();
    }, 3000);
  }, [currentPage]);

  return (
    <Fragment>
      <Container className="d-flex flex-column justify-center py-3">
        {!loading ? (
          <>
            <Form.Row>
              <Col sm={12} md={6}>
                <Form.Group>
                  <Form.Control
                    type="text"
                    placeholder="Nombre del cliente"
                    onChange={handleClienteFiltro}
                  />
                </Form.Group>
              </Col>
              <Col sm={12} md={4}>
                <Form.Group controlId="exampleForm.SelectCustom">
                  <Form.Control
                    as="select"
                    name="tipoproducto"
                    className="w-100"
                    custom
                    // onChange={handleFechaFiltro}
                  >
                    <option value="" defaultValue>
                      Buscar pedidos por fecha
                    </option>
                    <option value="hoy">Hoy</option>
                    <option value="proximasemana">Próxima semana</option>
                    <option value="">Todos los pedidos</option>
                  </Form.Control>
                </Form.Group>
              </Col>
              <Col className="mb-3 d-flex justify-content-end ">
                <Button onClick={filtrarPedidos} variant="outline-info">
                  Buscar
                </Button>
              </Col>
            </Form.Row>
            <Row>
              <TablaPedidos compras={compras} />
            </Row>
          </>
        ) : (
          <Row className="mt-4 mb-4 d-flex justify-content-center align-items-center">
            <Spinner animation="grow" variant="info" />
            <Spinner animation="grow" variant="info" />
            <Spinner animation="grow" variant="info" />
          </Row>
        )}
        <Row className="d-flex justify-content-center align-items-center">
          <div className="text-center my-4 mx-1">{volver()}</div>
          <div className="text-center my-4 mx-1">{verMas()}</div>
        </Row>
      </Container>
    </Fragment>
  );
}
