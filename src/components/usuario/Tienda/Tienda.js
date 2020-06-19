import React, { Fragment, useState, useEffect } from "react";
import { Row, Container } from "react-bootstrap";
import Producto from "./Producto";
import axiosConfig from "../../../config/axios";
import Logo from "../Elementos-Comunes/Logo";
import Navbar from "../Elementos-Comunes/Navbar";
const Tienda = () => {
  const [productos, setProductos] = useState([]);

  const traerProductos = () => {
    axiosConfig
      .get("/api/productos/listado")
      .then((res) => setProductos(res.data))
      .catch((err) => console.log(err));
  };
  useEffect(() => {
    traerProductos();
  }, []);
  return (
    <div>
      <Fragment>
        <Logo/>
        <Navbar/>
        <Container>
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
