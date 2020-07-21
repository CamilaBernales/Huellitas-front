import React, { useState } from "react";
import { Col, Form, Button, Row, Container } from "react-bootstrap";
import axiosConfig from "../../../config/axios";
import TablaPedidos from "./TablaPedidos";
import "../../../css/Tienda.css"

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
      <Form.Row>
        <Col>
          <Form.Group>
            <Form.Control type="text" placeholder="Cliente / N° Pedido / Fecha / Etc" />
          </Form.Group>
        </Col>
        <Col>
          <Button className="boton-search buscar">Buscar</Button>
        </Col>
      </Form.Row>
    )
}
