import React, { useState, useEffect } from "react";
import axiosConfig from "../../../config/axios";
import { Link } from "react-router-dom";
import {
  Table,
  Container,
  Button,
  Col,
  Row,
  Alert,
  Spinner,
} from "react-bootstrap";
import ModalPedido from "../../administrador/pedidos/ModalPedido";
import Footer from "../Elementos-Comunes/Footer"
import moment from "moment";

const MisCompras = () => {
  const [error, setError] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");
  const [loading, setLoading] = useState(false);
  const [fetchCompras, setFetchCompras] = useState(true);
  const [misCompras, setMisCompras] = useState([]);
  const [pedido, setPedido] = useState([]);
  const [compra, setCompra] = useState({});
  const [modalShow, setModalShow] = React.useState(false);
  const onHide = () => {
    setModalShow(false);
  };

  const traerCompras = () => {
    axiosConfig
      .get(`/api/compra/miscompras`)
      .then((res) => {
        setMisCompras(res.data);
        setLoading(false);
        setFetchCompras(false);
      })
      .catch(() => {
        setError(true);
        setErrorMsg("Hubo un error.");
      });
  };

  const verDetalle = (pedido, compra) => {
    setModalShow(true);
    setPedido(pedido);
    setCompra(compra);
  };
  useEffect(() => {
    window.scrollTo(0, 200);
    setLoading(true);
    setTimeout(() => {
      traerCompras();
    }, 3000);
  }, []);
  return (
    <>
      <Container className="my-5 py-3">
      <Row className="px-5 my-3 d-flex justify-content-center align-items-center ">
        {error ? (
          <Alert variant="danger">
            <h6>{errorMsg}</h6>
          </Alert>
        ) : null}
      </Row>
        {loading ? (
          <Row className="mt-4 mb-4 d-flex justify-content-center align-items-center">
            <Spinner animation="grow" variant="info" />
            <Spinner animation="grow" variant="info" />
            <Spinner animation="grow" variant="info" />
          </Row>
        ) : (
          <>
            <Row className="d-flex justify-content-center align-items-center text-start my-3">
              <Col sm={12} md={8} lg={8}>
                {misCompras.length !== 0 && !fetchCompras ? (
                  <>
                    <Table striped bordered hover size="sm">
                      <thead>
                        <tr>
                          <th>Fecha</th>
                          <th>Direccion</th>
                          <th>Total</th>
                          <th>Detalle</th>
                        </tr>
                      </thead>
                      <tbody>
                        {misCompras.map((compra) => (
                          <tr key={compra._id}>
                            <td>{moment(compra.fecha).format("DD-MM-YYYY")}</td>
                            <td>{compra.direccion}</td>
                            <td>{compra.total}</td>
                            <td>
                              <Button
                                size="sm"
                                variant="success"
                                className="ml-1"
                                onClick={() =>
                                  verDetalle(compra.pedido, compra)
                                }
                              >
                                Ver detalle
                              </Button>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </Table>
                    <ModalPedido
                      pedido={pedido}
                      compra={compra}
                      modalShow={modalShow}
                      setModalShow={setModalShow}
                      onHide={onHide}
                    />
                  </>
                ) : !fetchCompras && (
                  <Row className="d-flex justify-content-center align-items-center text-start my-3">
                    <Alert className="text-center" variant="info">
                      <h6>
                        {" "}
                        Aún no tienes un historial de compras para mostrar{" "}
                        <span role="img" aria-label="cara triste">
                          &#128546;
                        </span>{" "}
                        <Link to="/tienda">
                          Mira nuestros productos{" "}
                          <span role="img" aria-label="cara triste">
                            &#128522;
                          </span>{" "}
                        </Link>{" "}
                      </h6>
                    </Alert>
                  </Row>
                )}
              </Col>
            </Row>
          </>
        )}
      </Container>
      <Footer />
    </>
  );
};

export default MisCompras;
