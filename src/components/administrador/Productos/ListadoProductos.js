import React, { useState, useEffect } from "react";
import {
  Container,
  Form,
  Col,
  Row,
  Button,
  Alert,
  Table,
  Image,
  Spinner,
} from "react-bootstrap";
import Swal from "sweetalert2";
import axiosConfig from "../../../config/axios";
import "../../../css/ListadoUsuarios.css";

const Productosadmin = () => {
  const [loading, setLoading] = useState(true);
  const [productos, setProductos] = useState([]);
  const [editar, setEditar] = useState(false);
  const [productoEditado, setProductoEditado] = useState({});
  const [error, setError] = useState(false);
  const [msgError, setMsgError] = useState("");
  const [totalPages, setTotalPages] = useState(1);
  const [currentPage, setCurrentPage] = useState(1);

  const listarProductos = () => {
    axiosConfig
      .get(`/api/productos/listado?pagina=${currentPage}`)
      .then((res) => {
        setProductos(res.data.docs);
        setTotalPages(res.data.totalPages);
      })
      .catch((err) => {
        setError(true);
        setMsgError(err.response.data.msg);
      });
  };
  const obtenerUnProducto = (id) => {
    axiosConfig
      .get(`/api/productos/producto/${id}`)
      .then((res) => {
        setEditar(true);
        setProductoEditado(res.data.producto);
        window.scrollTo(0, 0);
      })
      .catch((err) => {
        setError(true);
        setMsgError(err.response.data.msg);
      });
  };
  const onChangeProducto = (e) => {
    setError(false);
    setProductoEditado({
      ...productoEditado,
      [e.target.name]: e.target.value,
    });
  };

  const onChangeImagen = async (e) => {
    setError(false);
    if (e.target.files[0]) {
      if (e.target.files[0].size > 4194304) {
        // 5242880 = 5MB
        // 4194304 = 4MB
        setError(true);
        setMsgError("La imagen es demasiado grande.");
        window.scrollTo(0, 0);
        e.target.value = null;
        setProductoEditado({
          ...productoEditado,
          imagen: null,
        });
        return;
      }
      let reader = new FileReader();
      reader.readAsDataURL(e.target.files[0]);
      reader.onloadend = () => {
        setProductoEditado({
          ...productoEditado,
          imagen: reader.result,
        });
      };
    } else {
      setProductoEditado({
        ...productoEditado,
        imagen: null,
      });
    }
  };
  const actualizarProducto = () => {
    if(productoEditado.precio.length > 4){
      setError(true);
      setMsgError("Precio no válido.");
      window.scrollTo(0, 0);
      return;
    }
    if (
      productoEditado.nombre !== "" &&
      productoEditado.tipoproducto !== "" &&
      productoEditado.descripcion.trim() !== "" &&
      productoEditado.disponibilidad !== "" &&
      productoEditado.precio !== "" &&
      productoEditado.imagen !== ""
    ) {
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
            .put(
              `/api/productos/update/${productoEditado._id}`,
              productoEditado
            )
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
              if (err.request.status === 413) {
                setError(true);
                setMsgError("Imagen demasiado grande.");
                window.scrollTo(0, 0);
                return;
              }
              setError(true);
              setMsgError(err.response.data.msg);
              window.scrollTo(0, 0);
              return;
            });
        }
      });
    } else {
      setError(true);
      setMsgError("Todos los campos deben ser completados.");
      window.scrollTo(0, 0);
      return;
    }
  };
  const eliminarUnProducto = (id) => {
    Swal.fire({
      title: "Estas seguro de que quieres elminar este producto?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Sí, eliminar!",
    }).then((result) => {
      if (result.value) {
        axiosConfig
          .delete(`api/productos/delete/${id}`)
          .then(() => {
            Swal.fire({
              position: "center",
              icon: "success",
              title: "El producto fue eliminado con éxito.",
              showConfirmButton: false,
              timer: 1500,
            });
            setTimeout(() => {
              window.location.reload(true);
            }, 2000);
          })
          .catch((err) => {
            setError(true);
            setMsgError(err.response.data.msg);
            window.scrollTo(0, 0);
            return;
          });
      }
    });
  };
  const verMas = () =>
    totalPages > currentPage &&
    !error &&
    !loading && (
      <button
        className="btn btn-info"
        onClick={() => {
          setCurrentPage(currentPage + 1);
        }}
      >
        Ver más
      </button>
    );
  const volver = () =>
    totalPages >= currentPage &&
    !error &&
    currentPage !== 1 &&
    !loading && (
      <button
        className="btn btn-info"
        onClick={() => {
          setCurrentPage(currentPage - 1);
        }}
      >
        Volver
      </button>
    );

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setEditar(false);
      listarProductos();
      window.scrollTo(0, 0);
    }, 2000);
    // eslint-disable-next-line
  }, [currentPage]);
  return (
    <>
      <Container className="mb-auto">
        <Row className="d-flex justify-content-center align-items-center">
          <h3 className="h3-admin">Listado de Productos</h3>
        </Row>
        {loading && !error ? (
          <Row className="my-4 d-flex justify-content-center align-items-center">
            <Spinner animation="grow" variant="info" />
            <Spinner animation="grow" variant="info" />
            <Spinner animation="grow" variant="info" />
          </Row>
        ) : null}
        {error ? (
          <Row className="mt-4 mb-4 my-4 d-flex justify-content-center align-items-center">
            <Alert className="text-center" variant="danger">
              <h6> {msgError} </h6>
            </Alert>
          </Row>
        ) : null}
        {editar && !loading ? (
          <Row className="d-flex justify-content-center align-items-center text-start my-5">
            <Col sm={12} md={8} xl={6}>
              <Form>
                <Row>
                  <Col className="my-3">
                    <Form.Label>Titulo del producto</Form.Label>
                    <Form.Control
                      placeholder="Titulo del producto"
                      name="nombre"
                      onChange={onChangeProducto}
                      defaultValue={productoEditado.nombre}
                    />
                  </Col>
                </Row>
                <Row>
                  <Col className="my-3">
                    <Form.Label>Descripción</Form.Label>
                    <Form.Control
                      placeholder="Descripción"
                      name="descripcion"
                      onChange={onChangeProducto}
                      defaultValue={productoEditado.descripcion}
                      maxLength="200"
                    />
                  </Col>
                </Row>
                <Row>
                  <Col className="my-3">
                    <Form.Label>Precio</Form.Label>
                    <Form.Control
                      name="precio"
                      defaultValue={productoEditado.precio}
                      onChange={onChangeProducto}
                      type="number"
                      min="100"
                      max="9999"
                    />
                  </Col>
                </Row>
                <Row className="d-flex justify-content-around align-items-center m-auto ">
                  <Col sm={12} xs={6} md={6}>
                    <Image
                      fluid
                      className="img-fluid my-4"
                      src={productoEditado.imagen}
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
                        onChange={onChangeImagen}
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
                        <option value="alimento">Alimentos</option>
                        <option value="jueguete">Jueguetes</option>
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
              <Row className="d-flex justify-content-end align-items-end">
                <Button
                  className="boton-permisos"
                  size="lg"
                  onClick={actualizarProducto}
                  disabled={error === true}
                >
                  Guardar
                </Button>
              </Row>
            </Col>
          </Row>
        ) : null}
        {!loading && productos.length !== 0 ? (
          <Row className="d-flex justify-content-center align-items-center text-start my-5">
            <Col sm={12} md={8} lg={10}>
              <Table striped bordered hover responsive="sm">
                <thead>
                  <tr>
                    <th className="th-admin">Nombre</th>
                    <th className="th-admin">Detalles del producto</th>
                    <th className="th-admin">Precio</th>
                    <th className="th-admin">Stock</th>
                    <th className="th-admin">Producto</th>
                    <th className="th-admin">Editar</th>
                    <th className="th-admin">Eliminar</th>
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
                        <td>{producto.tipoproducto}</td>
                        <td className="text-center">
                          <Button
                            className="boton-permisos"
                            onClick={() => obtenerUnProducto(producto._id)}
                          >
                            <i className="fas fa-edit" />
                          </Button>
                        </td>
                        <td className="text-center">
                          <Button
                            className="boton-permisos"
                            onClick={() => eliminarUnProducto(producto._id)}
                          >
                            <i className="fas fa-trash" />
                          </Button>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </Table>
            </Col>
          </Row>
        ) : null}

        <Row className="d-flex justify-content-center align-items-center">
          <div className="text-center my-4 mx-1">{volver()}</div>
          <div className="text-center my-4 mx-1">{verMas()}</div>
        </Row>
      </Container>
    </>
  );
};

export default Productosadmin;
