import React, { useEffect, useState } from "react";
import {
  Container,
  Form,
  Image,
  Button,
  Col,
  Row,
  Alert,
} from "react-bootstrap";
import "../../../css/Perfil.css";
import axiosConfig from "../../../config/axios";

const PerfilUsuario = () => {
  const [usuario, setUsuario] = useState({});
  const [error, setError] = useState(false);
  const [msgError, setMsgError] = useState("");
  const [edicionExitosa, setEdicionExitosa] = useState(false);
  const obtenerUsuario = () => {
    axiosConfig
      .get(`/api/usuarios/usuarioactual`)
      .then((res) => {
        setUsuario(res.data.usuario);
      })
  };
  const editarUsuario = () => {
    if (usuario.nombre.trim() !== "") {
      axiosConfig
        .put(`/api/usuarios/updateusuario/${usuario._id}`, usuario)
        .then(() => {
          setEdicionExitosa(true);
          window.scrollTo(0, 200);
          setTimeout(() => {
            window.location.reload(true);
          }, 1000);
        })
        .catch((err) => {
          if(err.request.status === 413){
            setError(true)
            setMsgError('Imagen demasiado grande.')
            window.scrollTo(0, 200);
            return;
          }
          setError(true);
          setMsgError(err.response.data.msg);
          window.scrollTo(0, 200);
        });
    } else {
      setError(true);
      setMsgError("Complete todos los campos.");
      window.scrollTo(0, 200);
    }
  };
  const onChangeUsuarioImagen = async (e) => {
    setError(false);
    if (e.target.files[0]) {
      if (e.target.files[0].size > 4194304) {
        // 5242880 = 5MB
        // 4194304 = 4MB
        
        e.target.value = null;
        setUsuario({
          ...usuario,
          imagen: null,
        });
        
        return;
      }
      let reader = new FileReader();
      reader.readAsDataURL(e.target.files[0]);
      reader.onloadend = () => {
        setUsuario({
          ...usuario,
          imagen: reader.result,
        });
      };
    } else {
      setUsuario({
        ...usuario,
        imagen: null,
      });
    }
  };
  const onChangeUsuario = (e) => {
    e.preventDefault();
    setError(false);
    setUsuario({
      ...usuario,
      [e.target.name]: e.target.value,
    });
  };
  useEffect(() => {
    obtenerUsuario();
    window.scrollTo(0, 300);
  }, []);

  return (
    <>
      <Container className="my-5 py-3 perfilUsuario">
        {error ? (
          <Alert
            className="p-3 text-center text-uppercase font-weight-bold"
            variant="danger"
          >
            {msgError}
          </Alert>
        ) : null}
        {edicionExitosa ? (
          <Alert
            className="p-3 text-center text-uppercase font-weight-bold"
            variant="success"
          >
            Edición guardada con éxito.{" "}
            <span role="img" aria-label="cara feliz">
              &#128513;
            </span>{" "}
          </Alert>
        ) : null}
        <Row className="d-flex justify-content-center align-items-center my-5 ">
          <Col sm={12} md={8} xl={6} className="boxPerfil p-4">
            <Row className="d-flex justify-content-around align-items-center m-auto ">
              <Col sm={12} xs={6} md={6} lg={4}>
                <Image
                  fluid
                  className="imagenPerfilUsuario img-fluid my-4 text-overflow"
                  src={usuario.imagen}
                  roundedCircle
                />
              </Col>
            </Row>
            <Form>
              <Form.Group className="my-4" controlId="imagen">
                <Form.Label>Foto de perfil</Form.Label>
                <Form.File
                  id="imagen"
                  name="imagen"
                  accept="image/*"
                  onChange={onChangeUsuarioImagen}
                />
              </Form.Group>
              <Form.Group className="my-4" controlId="formName">
                <Form.Label className="justify-content-start">
                  Nombre y Apellido:
                </Form.Label>
                <Form.Control
                  className="border border-primary rounded-left"
                  type="text"
                  placeholder="Ingrese su nombre y apellido"
                  name="nombre"
                  onChange={onChangeUsuario}
                  defaultValue={usuario.nombre}
                  maxLength="40"
                />
              </Form.Group>
              <Form.Group className="my-4" controlId="formTelefono">
                <Form.Label className="justify-content-start">
                  Teléfono (opcional):
                </Form.Label>
                <Form.Control
                  className="border border-primary rounded-left"
                  type="number"
                  placeholder="Ingrese su número de telefono"
                  name="telefono"
                  onChange={onChangeUsuario}
                  defaultValue={usuario.telefono}
                  maxLength="14"

                />
              </Form.Group>
            </Form>
            <Button
              className="w-100 my-3 botonEditarUsuario text-uppercase"
              onClick={() => editarUsuario()}
            >
              Guardar
            </Button>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default PerfilUsuario;
