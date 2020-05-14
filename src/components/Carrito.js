import React from "react";
import { Container, Table, Button } from "react-bootstrap";


const Carrito = () => {
    

  return (
    <Container className="mt-5 mb-5">
      <Table responsive>
        <thead>
          <tr>
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
          </tr>
          <tr>
            <td>2</td>
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

          </tr>
        </tbody>
      </Table>
      <Button className="btn btn-success mt-3 w-100  text-uppercase font-weight-bold" >Comprar!</Button>
    </Container>
  );
};

export default Carrito;
