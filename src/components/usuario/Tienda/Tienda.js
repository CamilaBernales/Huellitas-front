import React, { Fragment, useState, useEffect } from "react";
import { Row, Container, Col, Form, Button } from "react-bootstrap";
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

  const traerProductos = () => {
    axiosConfig
      .get("/api/productos/listado")
      .then((res) => setProductos(res.data))
      .catch((err) => console.log(err));
  };
  const filtrarProductos = () => {
    axiosConfig
      .get(`/api/productos/productosfiltrados?nombre=${productosFiltrados}`)
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
        <Container>
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
              <Button onClick={filtrarProductos} type="submit">
                Buscar
              </Button>
            </Col>
          </Form.Row>
          <Row className="col-12 m-auto">
            {productos.map((producto) => (
              <Producto key={producto._id} producto={producto} />
            ))}
          </Row>
        </Container>
      </Fragment>
    </div>
  );
};

export default Tienda;
