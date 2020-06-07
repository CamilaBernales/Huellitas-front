import React, { Fragment, useState } from "react";
import { Container, Form, Button, Col, Row } from "react-bootstrap";
// import { Redirect } from "react-router-dom";
import Logo from "../Elementos-Comunes/Logo";
import Navbar from "../Elementos-Comunes/Navbar";
import registroimg from "../../../img/registro.svg";
import "../../../css/Login.css";
import axiosConfig from "../../../config/axios";

export default function Registro(props) {
  const [usuario, setUsuario] = useState({
    nombre: "",
    email: "",
    password: "",
    rol: "",
  });

  const { nombre, rol, email, password } = usuario;

  // const [passwordConfirm, setPasswordConfirm] = useState("");

  // const [redireccionar, setRedireccionar] = useState(false);

  const onChangeForm = (e) => {
    setUsuario({
      ...usuario,
      // id: uuidv4(),
      [e.target.name]: e.target.value,
    });
  };

  const onSubmitForm = (e) => {
    e.preventDefault();
    if (
      nombre === "" ||
      email === "" ||
      password === "" ||
      rol === ""
      // passwordConfirm === ""
    ) {
      alert("Por favor llenar todos los campos");
      return;
    }
    // if (password !== passwordConfirm) {
    //   alert("La contraseña y la confirmación no coinciden");
    //   return;
    // }

    axiosConfig
      .post("/api/usuarios/registro", usuario)
      .then((res) => {
        console.log(res);
        props.history.push("/");
      })
      .catch((error) => {
        console.log(error);
      });
    // let usuarios;
    // if (!localStorage.getItem("usuarios")) {
    //   usuarios = [usuario];
    // } else {
    //   usuarios = JSON.parse(localStorage.getItem("usuarios"));
    //   if (usuarios.find((usuario) => usuario.email === email)) {
    //     alert("El email ya existe");
    //     setUsuario({ email: "" });
    //     return;
    //   }
    //   usuarios = [usuario, ...usuarios];
    // }
    // localStorage.setItem("usuarios", JSON.stringify(usuarios));
    // setUsuario({
    //   id: "",
    //   nombre: "",
    //   rol: "",
    //   email: "",
    //   password: "",
    // });
    // setPasswordConfirm("");
    // alert("Usuario registrado correctamente");
    // setRedireccionar(true);
  };

  return (
    <Fragment>
      <Logo />
      <Navbar />
      <Container className="m-4">
        <Row className="justify-content-center">
          <div className="col mx-5 img-fluid">
            <img src={registroimg} alt="imagen registro" />
          </div>
          <Col sm={12} md={4}>
            <div className="formulario">
              <Form onSubmit={onSubmitForm}>
                <h2 className="text-center text-uppercase mx-4">
                  Crear una cuenta
                </h2>
                <Form.Group controlId="formName">
                  <Form.Label className="d-flex justify-content-start">
                    Nombre:
                  </Form.Label>
                  <Form.Control
                    className="border border-primary rounded-left"
                    type="text"
                    placeholder="Ingrese su nombre"
                    name="nombre"
                    value={nombre}
                    onChange={onChangeForm}
                  />
                </Form.Group>

                <Form.Group controlId="formEmail">
                  <Form.Label className="d-flex justify-content-start">
                    Email:
                  </Form.Label>
                  <Form.Control
                    className="border border-primary rounded-left"
                    type="email"
                    placeholder="Ingrese su email"
                    name="email"
                    value={email}
                    onChange={onChangeForm}
                  />
                </Form.Group>

                <Form.Group controlId="formPassword">
                  <Form.Label className="d-flex justify-content-start">
                    Contraseña:
                  </Form.Label>
                  <Form.Control
                    className="border border-primary rounded-left"
                    type="password"
                    placeholder="Ingrese su contraseña"
                    name="password"
                    value={password}
                    onChange={onChangeForm}
                  />
                </Form.Group>

                {/* <Form.Group controlId="formConfirmPassword">
                  <Form.Label className="d-flex justify-content-start">
                    Confirmar contraseña:
                  </Form.Label>
                  <Form.Control
                    className="border border-primary rounded-left"
                    type="password"
                    placeholder="Ingrese su contraseña nuevamente"
                    name="passwordConfirm"
                    value={passwordConfirm}
                    onChange={(e) => setPasswordConfirm(e.target.value)}
                  />
                </Form.Group> */}

                <Form.Group controlId="formLastName">
                  <Form.Label className="d-flex justify-content-start">
                    rol:
                  </Form.Label>
                  <Form.Control
                    className="border border-primary rounded-left"
                    type="text"
                    placeholder="Ingrese su rol"
                    name="rol"
                    value={rol}
                    onChange={onChangeForm}
                  />
                </Form.Group>

                <Row>
                  <Col className="d-flex justify-content-between">
                    <Button
                      className="text-white text-uppercase font-weight-bold rounded-pill btn btnauth btn-button w-100"
                      type="submit"
                    >
                      Enviar
                    </Button>
                  </Col>
                </Row>
              </Form>
            </div>
          </Col>
        </Row>
      </Container>
    </Fragment>
  );
}
