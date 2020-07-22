import React, { Fragment, useState } from "react";
import { Table, Button, Col } from "react-bootstrap";
import ModalPedido from "./ModalPedido";
import moment from "moment";
import PropTypes from "prop-types";

export default function TablaPedidos({ compras }) {
  const [modalShow, setModalShow] = React.useState(false);
  const onHide = () => {
    setModalShow(false);
  };

  const [pedido, setPedido] = useState([]);

  const [compra, setCompra] = useState({});
  const mostrar = (c, p) => {
    setModalShow(true);
    setPedido(p);
    setCompra(c);
  };

  return (
    <Fragment>
      <Col sm={12} md={8} lg={10}>
      <Table size="sm" striped bordered hover>
        <thead>
          <tr>
            <th>Fecha</th>
            <th>Cliente</th>
            <th>Direccion</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {compras.map((c) => (
            <tr key={c._id}>
              <td>{moment(c.fecha).format("DD/MM/YYYY")}</td>
              <td>
                {c.nombre} {c.apellido}
              </td>
              <td>{c.direccion}</td>
              <td>
                <Button
                  size="sm"
                  variant="success"
                  onClick={() => mostrar(c, c.pedido)}
                  className="ml-1"
                >
                  Detalle
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
      </Col>
      <ModalPedido
        pedido={pedido}
        compra={compra}
        modalShow={modalShow}
        setModalShow={setModalShow}
        onHide={onHide}
      />
    </Fragment>
  );
}
TablaPedidos.propTypes = {
  compras: PropTypes.object,
};
