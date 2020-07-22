import React, { Fragment, useState } from "react";
import { Table, Button } from "react-bootstrap";
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
      <Table responsive striped bordered hover>
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
