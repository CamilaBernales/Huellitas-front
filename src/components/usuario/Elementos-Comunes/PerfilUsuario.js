import React, { useEffect, useState } from "react";
import { Container, Form, Image, Button, Col, Row } from "react-bootstrap";
import Navbar from "../../../components/usuario/Elementos-Comunes/Navbar";
import Logo from "../../../components/usuario/Elementos-Comunes/Logo";
import "../../../css/Perfil.css";
import axiosConfig from "../../../config/axios";
const PerfilUsuario = () => {
  const [usuario, setUsuario] = useState({});
  const obtenerUsuario = () => {
    axiosConfig
      .get(`/api/usuarios/usuarioactual`)
      .then((res) => {
        setUsuario(res.data.usuario);
      })
      .catch((err) => console.log(err.response));
  };
  const editarUsuario = () => {
    axiosConfig
      .put(`/api/usuarios/updateusuario/${usuario._id}`, usuario)
      .then((res) => {
        console.log(res);
        window.location.reload(true);
      })
      .catch((err) => console.log(err.response));
  };
  const onChangeUsuarioImagen = async (e) => {
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
    setUsuario({
      ...usuario,
      [e.target.name]: e.target.value,
    });
  };
  useEffect(() => {
    obtenerUsuario();
  }, []);

  return (
    <>
      <Logo />
      <Navbar />
      <Container>
        <Row className="d-flex justify-content-center align-items-center my-3 ">
          <Col sm={12} md={8} xl={6} className="boxPerfil p-4">
            <Row className="d-flex justify-content-around align-items-center m-auto ">
              <Col xs={6} md={4} xl={4}>
                <Image
                  className="imagenPerfilUsuario img-fluid my-4"
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
                  Nombre:
                </Form.Label>
                <Form.Control
                  className="border border-primary rounded-left"
                  type="text"
                  placeholder="Ingrese su nombre"
                  name="nombre"
                  onChange={onChangeUsuario}
                  value={usuario.nombre}
                />
              </Form.Group>

              <Form.Group className="my-4" controlId="formEmail">
                <Form.Label className="justify-content-start">
                  Email:
                </Form.Label>
                <Form.Control
                  className="border border-primary rounded-left"
                  type="email"
                  placeholder="Ingrese su email"
                  name="email"
                  onChange={onChangeUsuario}
                  value={usuario.email}
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
