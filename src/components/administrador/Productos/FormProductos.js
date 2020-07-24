import React, { useState } from "react";
import {
  Container,
  Form,
  Col,
  Row,
  Button,
  Alert,
  Image,
} from "react-bootstrap";
import Swal from "sweetalert2";
import axiosConfig from "../../../config/axios";
import imgDefault from "../../../img/default-producto.gif";
function FormProductos() {
  const [nuevoProducto, setNuevoProducto] = useState({
    nombre: "",
    descripcion: "",
    precio: "100",
    disponibilidad: "",
    imagen: imgDefault,
    tipoproducto: "",
  });
  const [error, setError] = useState(false);
  const [msgError, setMsgError] = useState("");

  const onChangeProducto = (e) => {
    setError(false);
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
      nuevoProducto.imagen !== null &&
      nuevoProducto.tipoproducto.trim() !== ""
    ) {
      axiosConfig
        .post("/api/productos/altaproducto", nuevoProducto)
        .then(() => {
          Swal.fire({
            position: "center",
            icon: "success",
            title: "El producto fue guardado con éxito.",
            showConfirmButton: false,
            timer: 1500,
          });
          setTimeout(() => {
            window.location.reload(true);
          }, 2000);
        })
        .catch((err) => {
          // console.log(err.response);
          window.scrollTo(0, 200);
          setError(true);
          setMsgError(err.response.data.msg);
        });
    } else {
      window.scrollTo(0, 200);
      setError(true);
      setMsgError("Los campos deben estar completos.");
    }
  };
  const onChangeImagenProducto = async (e) => {
    setError(false);
    if (e.target.files[0]) {
      if (e.target.files[0].size > 4194304) {
        // 5242880 = 5MB
        // 4194304 = 4MB
        setError(true);
        setMsgError("La imágen es demasiado grande.");
        window.scrollTo(0, 200);

        e.target.value = null;
        setNuevoProducto({
          ...nuevoProducto,
          imagen: null,
        });

        return;
      }
      let reader = new FileReader();
      reader.readAsDataURL(e.target.files[0]);
      reader.onloadend = () => {
        setNuevoProducto({
          ...nuevoProducto,
          imagen: reader.result,
        });
      };
    } else {
      setNuevoProducto({
        ...nuevoProducto,
        imagen: null,
      });
    }
  };

  return (
    <div>
      <Container className="my-5">
        <Row className="d-flex justify-content-center align-items-center">
          <Col sm={12} md={8} xl={6}>
            {error ? (
              <Alert
                className="p-3 text-center w-100 text-uppercase font-weight-bold my-3"
                variant="danger"
              >
                {msgError}
              </Alert>
            ) : null}
            <Form onSubmit={guardarProducto}>
              <Row>
                <Col className="my-3">
                  <Form.Label>Titulo del producto</Form.Label>
                  <Form.Control
                    required
                    placeholder="Titulo del producto"
                    name="nombre"
                    maxLength="40"
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
                    maxLength="200"
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
                    min="100"
                    defaultValue={nuevoProducto.precio}
                  />
                </Col>
              </Row>
              <Row className="d-flex justify-content-around align-items-center m-auto ">
                <Col sm={12} xs={6} md={6}>
                  <Image
                    fluid
                    className="img-fluid my-4"
                    src={nuevoProducto.imagen}
                    thumbnail
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
                      onChange={onChangeImagenProducto}
                      className="w-100"
                    />
                  </Form.Group>
                </Col>
              </Row>
              <Row>
                <Col className="my-3">
                  <Form.Label>Tipo de Producto</Form.Label>
                  <Form.Group>
                    <Form.Control
                      as="select"
                      name="tipoproducto"
                      className="w-100"
                      custom
                      onChange={onChangeProducto}
                    >
                      <option value="" defaultValue>
                        Elige el tipo de producto
                      </option>
                      <option value="alimento">Alimento</option>
                      <option value="jueguete">Jueguete</option>
                      <option value="accesorios">Accesorios</option>
                      <option value="Higiene">Productos de Higiene</option>
                    </Form.Control>
                  </Form.Group>
                </Col>
              </Row>
              <Row>
                <Col className="my-3">
                  <Form.Label>Disponibilidad</Form.Label>
                  <Form.Group>
                    <Form.Control
                      as="select"
                      className="w-100"
                      custom
                      name="disponibilidad"
                      onChange={onChangeProducto}
                    >
                      <option value="" defaultValue>
                        Elige la disponibilidad de producto
                      </option>
                      <option value="Disponible">Disponible</option>
                      <option value="No Disponible">No Disponible</option>
                    </Form.Control>
                  </Form.Group>
                </Col>
              </Row>
            </Form>
            <Button
              disabled={error === true}
              className="w-100"
              onClick={guardarProducto}
            >
              Guardar
            </Button>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default FormProductos;
