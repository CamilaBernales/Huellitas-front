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
  const mostrar = (detallesEnvio, pedidos) => {
    setModalShow(true);
    setPedido(pedidos);
    setCompra(detallesEnvio);
  };

  return (
    <Fragment>
      <Col sm={12} md={8} lg={10}>
      <Table size="sm" striped bordered hover>
        <thead>
          <tr>
            <th className="th-admin">Fecha</th>
            <th className="th-admin">Cliente</th>
            <th className="th-admin">Direccion</th>
            <th className="th-admin">Total</th>
            <th className="th-admin">Acciones</th>
          </tr>
        </thead>
        <tbody>
          {compras.map((c) => (
            <tr key={c._id}>
              <td>{moment(c.fecha).format("DD/MM/YYYY")}</td>
              <td>
                {c.nombre ? c.nombre: c.detallesEnvio.nombre}
              </td>
              <td>{c.direccion}</td>
               <td>{c.total}</td>
              <td>
                <Button
                  size="sm"
                  
                  onClick={() => mostrar(c.detallesEnvio, c.pedido)}
                  className="ml-1 btn boton-permisos"
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
  compras: PropTypes.array,
};
