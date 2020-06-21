import React, { useState, useEffect } from "react";
import {
  Container,
  Form,
  Col,
  Row,
  Button,
  Alert,
  Table,
} from "react-bootstrap";
import Swal from "sweetalert2";
import axiosConfig from "../../../config/axios";
import Navbaradmin from "../Elementos-Comunes/Navbaradmin";

const Productosadmin = (props) => {
  const [productos, setProductos] = useState([]);
  const [editar, setEditar] = useState(false);
  const [productoEditado, setProductoEditado] = useState({});

  const listarProductos = () => {
    axiosConfig
      .get("/api/productos/listado")
      .then((res) => setProductos(res.data))
      .catch((err) => console.log(err));
  };
  const obtenerUnProducto = (id) => {
    axiosConfig
      .get(`/api/productos/producto/${id}`)
      .then((res) => {
        setEditar(true);
        setProductoEditado(res.data.producto);
      })
      .catch((err) => console.log(err));
  };
  const onChangeProducto = (e) => {
    e.preventDefault();
    setProductoEditado({
      ...productoEditado,
      [e.target.name]: e.target.value,
    });
  };
  const actualizarProducto = () => {
    Swal.fire({
      title: "Estas seguro de que quieres guardar esta edición?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Si, editar!",
    }).then((result) => {
      if (result.value) {
        axiosConfig
          .put(`/api/productos/update/${productoEditado._id}`, productoEditado)
          .then((res) => {
            console.log(res);
            window.location.reload(true);
            Swal.fire("Editado!", "La edición se guardo con éxito.", "success");
          })
          .catch((err) => console.log(err.response));
      }
    });
  };

  useEffect(() => {
    listarProductos();
  }, []);
  return (
    <div>
      <Navbaradmin />
      <Container className="my-5">
        {editar ? (
          <Row className="d-flex justify-content-center align-items-center my-5">
            <Col sm={12} md={8} xl={10}>
              <Form>
                <Row>
                  <Col className="my-3">
                    <Form.Label>Titulo del producto</Form.Label>
                    <Form.Control
                      placeholder="Titulo del producto"
                      name="nombre"
                      maxLength="40"
                      type="text"
                      onChange={onChangeProducto}
                      value={productoEditado.nombre}
                    />
                  </Col>
                </Row>
                <Row>
                  <Col className="my-3">
                    <Form.Label>Descripción</Form.Label>
                    <Form.Control
                      placeholder="Descripción"
                      name="descripcion"
                      type="text"
                      onChange={onChangeProducto}
                      value={productoEditado.descripcion}
                    />
                  </Col>
                </Row>
                <Row>
                  <Col className="my-3">
                    <Form.Label>Precio</Form.Label>

                    <Form.Control
                      name="precio"
                      value={productoEditado.precio}
                      onChange={onChangeProducto}
                      type="number"
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
                        onChange={onChangeProducto}
                      />
                    </Form.Group>
                  </Col>
                </Row>
                <Row>
                <Col className="my-3">
                  <Form.Label>Tipo de Producto</Form.Label>
                  <Form.Group>
                    <select name="tipoproducto" onChange={onChangeProducto}>
                      <option value="" disabled defaultValue>
                        Elege el tipo de producto
                      </option>
                      <option value="alimento">Alimento</option>
                      <option value="jueguete">Jueguete</option>
                      <option value="accesorios">Accesorios</option>
                      <option value="limpieza">Productos de Limpieza</option>
                    </select>
                  </Form.Group>
                </Col>
              </Row>
                <Row>
                  <Col className="my-3">
                    <Form.Label>Disponibilidad</Form.Label>
                    <Form.Group>
                      <select name="disponibilidad" onChange={onChangeProducto}>
                        <option value="" disabled defaultValue>
                          Elegí la disponibilidad del producto
                        </option>
                        <option value="Disponible">Disponible</option>
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
                      <option value="">
                        Elegí la disponibilidad del producto
                      </option>
                      <option value="true">Sí</option>
                      <option value="false">No</option>
                    </select>
                  </Form.Group>
                </Col>
              </Row> */}
              </Form>
              <Button className="w-100" onClick={actualizarProducto}>
                Guardar
              </Button>
            </Col>
          </Row>
        ) : null}
        <Row className="d-flex justify-content-center align-items-center  text-start my-5">
          <Col sm={12} md={8} xl={10}>
            <Table responsive striped bordered hover size="sm">
              <thead>
                <tr>
                  <th>Nombre</th>
                  <th>Detalles del producto</th>
                  <th>Precio</th>
                  <th>Stock</th>
                  <th>Editar</th>
                </tr>
              </thead>
              <tbody>
                {productos.map((producto) => {
                  return (
                    <tr key={producto._id}>
                      <td>{producto.nombre}</td>
                      <td>{producto.descripcion}</td>
                      <td>{producto.precio}</td>
                      <td>{producto.disponibilidad}</td>
                      <td className="text-center">
                        <Button onClick={() => obtenerUnProducto(producto._id)}>
                          <i className="fas fa-edit" />
                        </Button>
                      </td>
                      {/* <td className="text-center">
                  <Button>
                    <i className="fas fa-trash" />
                  </Button>
                </td> */}
                    </tr>
                  );
                })}
              </tbody>
            </Table>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Productosadmin;
