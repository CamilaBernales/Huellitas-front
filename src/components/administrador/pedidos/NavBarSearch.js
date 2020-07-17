import React, { useState } from "react";
import { Col, Form, Button, Row, Container } from "react-bootstrap";
import axiosConfig from "../../../config/axios";
import TablaPedidos from "./TablaPedidos";

export default function NavBarSearch() {
  const [compras, setCompras] = useState([]);
  const [fechaFiltro, setFechaFiltro] = useState("");

  const handleFechaFiltro = (e) => {
    setFechaFiltro(e.target.value);
  };
  const filtrarPedidos = () => {
    console.log("hola")
    axiosConfig
      .get(`/api/compra/filtrocompras?fecha=${fechaFiltro}`)
      .then((res) => console.log(res))
      .catch((err) => console.log(err.response));
  };
  return (
    <Container>

    </Container>
  );
}
