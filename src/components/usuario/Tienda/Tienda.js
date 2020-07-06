import React, { Fragment, useState, useEffect } from "react";
import { Row, Container, Col, Form, Button, Alert } from "react-bootstrap";
import Producto from "./Producto";
import axiosConfig from "../../../config/axios";
import Logo from "../Elementos-Comunes/Logo";
import Navbar from "../Elementos-Comunes/Navbar";

const Tienda = () => {
  const [productos, setProductos] = useState([]);
  const [productosFiltrados, setProductosFiltrados] = useState("");
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
    axiosConfig
      .get(
        `/api/productos/productosfiltrados?nombre=${productosFiltrados}&&tipoproducto=${filtrarTipo}`
      )
      .then((res) => setProductos(res.data))
      .catch((err) => console.log(err));
  };
  useEffect(() => {
    traerProductos();
    // filtrarProductos()
  }, []);
  return (
    <div>
      <Fragment>
        <Logo />
        <Navbar />
        <Container className="my-5 py-3">
          <Form.Row onSubmit={filtrarProductos}>
            <Col>
              <Form.Group>
                <Form.Control
                  onChange={OnChangeFiltrados}
                  type="text"
                  placeholder="Busca algo"
                />
              </Form.Group>
            </Col>
            <Col>
              <Form>
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
                    <option value="alimento">Alimento</option>
                    <option value="jueguete">Jueguete</option>
                    <option value="accesorios">Accesorios</option>
                    <option value="Higiene">Productos de Higiene</option>
                  </Form.Control>
                </Form.Group>
              </Form>
            </Col>
            <Col>
              <Button onClick={filtrarProductos} type="submit">
                Buscar
              </Button>
            </Col>
          </Form.Row>
          <Row className="col-12 m-auto">
            {productos.length === 0 ? (
              <Row className="d-flex justify-content-center align-items-center">
                <Alert className="text-center" variant="warning">
                  <h6>
                    {" "}
                    No hay resultados para tu búsqueda{" "}
                    <span role="img" aria-label="cara triste">
                      &#128546;
                    </span>{" "}
                  </h6>
                </Alert>
              </Row>
            ) : (
              <>
                {productos.map((producto) => (
                  <Producto key={producto._id} producto={producto} />
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
