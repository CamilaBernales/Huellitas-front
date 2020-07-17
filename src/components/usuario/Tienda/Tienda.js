import React, { Fragment, useState, useEffect } from "react";
import {
  Row,
  Container,
  Col,
  Form,
  Button,
  Alert,
  Spinner,
} from "react-bootstrap";
import Producto from "./Producto";
import axiosConfig from "../../../config/axios";
import "./../../../css/Tienda.css";

const Tienda = (props) => {
  const { setComprasGuardadas } = props;
  const [productos, setProductos] = useState([]);
  const [filtrar, setFiltrar] = useState(false);
  const [productosFiltrados, setProductosFiltrados] = useState("");
  const [loading, setLoading] = useState(false);

  const OnChangeFiltrados = (e) => {
    setProductosFiltrados(e.target.value);
  };
  const [filtrarTipo, setFiltrarTipo] = useState("");
  const onChangeFiltroTipos = (e) => {
    setFiltrarTipo(e.target.value);
  };

  const traerProductos = () => {
    axiosConfig
      .get("/api/productos/listado")
      .then((res) => setProductos(res.data))
      .catch((err) => console.log(err));
  };
  const filtrarProductos = () => {
    setFiltrar(true);
    if (
      (productosFiltrados === "" && filtrarTipo !== "") ||
      (productosFiltrados !== "" && filtrarTipo === "") ||
      (productosFiltrados !== "" && filtrarTipo !== "")
    ) {
      axiosConfig
        .get(
          `/api/productos/productosfiltrados?nombre=${productosFiltrados}&&tipoproducto=${filtrarTipo}`
        )
        .then((res) => setProductos(res.data))
        .catch((err) => console.log(err));
    } else {
      traerProductos();
    }
  };
  useEffect(() => {
    window.scrollTo(0, 200);
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      traerProductos();
    }, 3000);
  }, []);

  return (
    <div>
      <Fragment>
        <Container className="my-5 py-3">
          <Form onSubmit={filtrarProductos}>
            <Row className="d-flex justify-content-around align-items-center">
              <Col sm={12} md={6} className="my-2">
                <Form.Group>
                  <Form.Control
                    onChange={OnChangeFiltrados}
                    type="text"
                    placeholder="Busca algo"
                  />
                </Form.Group>
              </Col>
              <Col sm={12} md={6} className="my-2">
                <Form.Group controlId="exampleForm.SelectCustom">
                  <Form.Control
                    as="select"
                    name="tipoproducto"
                    className="w-100"
                    onChange={onChangeFiltroTipos}
                    custom
                  >
                    <option value="" defaultValue>
                      Elige el tipo de producto
                    </option>
                    <option value="alimento">Alimentos</option>
                    <option value="jueguete">Jueguetes</option>
                    <option value="accesorios">Accesorios</option>
                    <option value="Higiene">Productos de Higiene</option>
                    <option value="">Todos los productos</option>
                  </Form.Control>
                </Form.Group>
              </Col>
            </Row>
            <Row>
              <Col className="mt-2 mb-4 d-flex justify-content-end">
                <Button onClick={filtrarProductos} className="boton-search buscar">
                  Buscar
                </Button>
              </Col>
            </Row>
          </Form>
          <Row className="mt-2 mb-4 d-flex justify-content-center align-items-center">
            {loading ? (
              <>
                <Spinner animation="grow" variant="info" />
                <Spinner animation="grow" variant="info" />
                <Spinner animation="grow" variant="info" />
              </>
            ) : null}
          </Row>
          <Row className="col-12 m-auto">
            {productos.length === 0 && loading === false && filtrar === true ? (
              <Row className="m-auto my-4">
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
            ) : (
              <>
                {productos.map((producto) => (
                  <Producto
                    key={producto._id}
                    producto={producto}
                    setComprasGuardadas={setComprasGuardadas}
                  />
                ))}
              </>
            )}
          </Row>
        </Container>
      </Fragment>
    </div>
  );
};

export default Tienda;
