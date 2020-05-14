import React, { useState } from "react";
import { Container, Table } from "react-bootstrap";
const Carrito = () => {

    const [cantidadProducto, setCantidadProducto] = useState(1);
    

  return (
    <Container>
      <Table responsive>
        <thead>
          <tr>
            <th>#</th>
            <th>Nombre Producto</th>
            <th>Cantidad</th>
            <th>Descuento</th>
            <th>Total</th>
            <th>Eliminar</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>Table cell</td>
            <td>Table cell</td>
            <td>Table cell</td>
            <td>Table cell</td>
            <td>Table cell</td>
            <td>Table cell</td>
          </tr>
          <tr>
            <td>2</td>
            <td>Table cell</td>
            <td>Table cell</td>
            <td>Table cell</td>
            <td>Table cell</td>
            <td>Table cell</td>
            <td>Table cell</td>
          </tr>
          <tr>
            <td>3</td>
            <td>Table cell</td>
            <td>Table cell</td>
            <td>Table cell</td>
            <td>Table cell</td>
            <td>Table cell</td>
            <td>Table cell</td>
          </tr>
        </tbody>
      </Table>
    </Container>
  );
};

export default Carrito;
