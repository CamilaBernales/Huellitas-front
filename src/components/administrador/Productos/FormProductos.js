import React, { useState } from "react";
import { Container, Form, Col, Row, Button, Alert } from "react-bootstrap";
import Swal from "sweetalert2";
import Navbaradmin from '../Elementos-Comunes/Navbaradmin'
import axiosConfig from "../../../config/axios";
function FormProductos() {
  const [nuevoProducto, setNuevoProducto] = useState({
    nombre: "",
    descripcion: "",
    precio: "",
    disponibilidad: "Disponible",
    imagen: null,
    espromo: false,
  });
  const [error, setError] = useState(false);
  const [msgError, setMsgError] = useState("");

  const onChangeProducto = (e) => {
    e.preventDefault();
    setNuevoProducto({
      ...nuevoProducto,
      [e.target.name]: e.target.value,
    });
  };
  const guardarProducto = () => {
    if (
      nuevoProducto.nombre.trim() !== "" &&
      nuevoProducto.descripcion.trim() !== "" &&
      nuevoProducto.precio !== null &&
      nuevoProducto.imagen !== null
    ) {
      axiosConfig
        .post("/api/productos/altaproducto", nuevoProducto)
        .then((res) => {
          Swal.fire({
            position: "center",
            icon: "success",
            title: "El producto fue guardado con éxito.",
            showConfirmButton: false,
            timer: 1500,
          });
          console.log(res);
        })
        .catch((err) => {
          console.log(err.response);
        });
    } else {
      setError(true);
      setMsgError("Los campos deben estar completos.");
    }
  };
  return (
    <div>
      <Navbaradmin/>
      <Container>
        {error ? (
          <Alert
            className="p-3 text-center text-uppercase font-weight-bold"
            variant="danger"
          >
            {msgError}
          </Alert>
        ) : null}
        <Row className="d-flex justify-content-center align-items-center">
          <Col sm={12} md={8} xl={6}>
            <Form>
              <Row>
                <Col className="my-3">
                  <Form.Label>Titulo del producto</Form.Label>
                  <Form.Control
                    required
                    placeholder="Titulo del producto"
                    name="nombre"
                    maxlength="40"
                    type="text"
                    onChange={onChangeProducto}
                  />
                </Col>
              </Row>
              <Row>
                <Col className="my-3">
                  <Form.Label>Descripción</Form.Label>
                  <Form.Control
                    required
                    placeholder="Descripcion"
                    name="descripcion"
                    type="text"
                    onChange={onChangeProducto}
                  />
                </Col>
              </Row>
              <Row>
                <Col className="my-3">
                  <Form.Label>Precio</Form.Label>
                  <Form.Control
                    required
                    placeholder="precio"
                    name="precio"
                    type="number"
                    onChange={onChangeProducto}
                  />
                </Col>
              </Row>
              <Row>
                <Col className="my-3">
                  <Form.Group controlId="imagen">
                    <Form.Label>Imagen</Form.Label>
                    <Form.File
                      id="imagen"
                      name="imagen"
                      accept="image/*"
                      randomizeFilename
                      onChange={onChangeProducto}
                    />
                  </Form.Group>
                </Col>
              </Row>
              <Row>
                <Col className="my-3">
                  <Form.Label>Disponibilidad</Form.Label>
                  <Form.Group>
                    <select name="disponibilidad" onChange={onChangeProducto}>
                      <option value="" selected>
                        Elegí la disponibilidad del producto
                      </option>
                      <option value="Disponible"> Disponible</option>
                      <option value="No Disponible">No Disponible</option>
                    </select>
                  </Form.Group>
                </Col>
              </Row>
              {/* <Row>
                <Col className="my-3">
                  <Form.Label>En Promo</Form.Label>
                  <Form.Group>
                    <select name="espromo" onChange={onChangeProducto}>
                      <option value="">En Promoción?</option>
                      <option value="true">Sí</option>
                      <option value="false">No</option>
                    </sele6ct>
                  </Form.Group>
                </Col>
              </Row> */}
            </Form>
            <Button className="w-100" onClick={guardarProducto}>
              Guardar
            </Button>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default FormProductos;
