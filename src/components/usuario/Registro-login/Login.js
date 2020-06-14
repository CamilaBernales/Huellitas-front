import React, { Fragment, useState } from "react";
import { Container, Form, Button, Col, Row, Alert } from "react-bootstrap";
import { Link } from "react-router-dom";
import "../../../css/Login.css";
import imgLogin from "../../../img/login.svg";
import Logo from "../Elementos-Comunes/Logo";
import Navbar from "../Elementos-Comunes/Navbar";
import axiosConfig from "../../../config/axios";

export default function Login(props) {
  const [ingreso, setIngreso] = useState({
    email: "",
    password: "",
  });

  const { email, password } = ingreso;
  const [error, setError] = useState(false);
  const [msgError, setMsgError] = useState("");
  // const [redireccionar, setRedireccionar] = useState(false);
  // const [admin, setAdmin] = useState(false);

  const onChangeForm = (e) => {
    setIngreso({
      ...ingreso,
      [e.target.name]: e.target.value,
    });
  };

  const onSubmitForm = (e) => {
    e.preventDefault();
    if (email === "" || password === "") {
      alert("Por favor llenar todos los campos");
      return;
    }
    axiosConfig
      .post("/api/auth/login", ingreso)
      .then((res) => {
        console.log(ingreso);
        if (ingreso.email === "admin@correo.com") {
          sessionStorage.setItem("usuarioReg", "Administrador");
          props.history.push("/admin/turnos");
        } else {
          sessionStorage.setItem("usuarioReg", "Usuario");
          props.history.push("/");
        }
        localStorage.setItem("token", res.data.token);
        console.log(res);
      })
      .catch((err) => {
        console.log(err.response.data.msg);
        setError(true);
        setMsgError(err.response.data.msg);
      });

    // if (email === 'admin' && password === 'admin') {
    //   sessionStorage.setItem('usuarioReg', 'Administrador');
    //   setAdmin(true);
    // } else {
    //   let usuarios;
    //   if (localStorage.getItem('usuarios')) {
    //     usuarios = JSON.parse(localStorage.getItem('usuarios'));
    //   } else {
    //     alert('El usuario no existe');
    //     return;
    //   }
    // }

    //   if (usuarios.find(usuario => (usuario.email === email) && (usuario.password === password))) {
    //     const usuarioReg = usuarios.find(usuario => (
    //       (usuario.email === email) && (usuario.password === password)
    //     )).nombre;
    //     sessionStorage.setItem('usuarioReg', usuarioReg);
    //   } else {
    //     alert('La contraseña o el email son incorrectos');
    //     return;
    //   }
  };

  return (
    <Fragment>
      <Logo />
      <Navbar />
      <Container className="my-4">
        {error ? (
          <Alert
            className="p-3 text-center text-uppercase font-weight-bold"
            variant="danger"
          >
            {msgError}
          </Alert>
        ) : null}
        <Row className="px-5 d-flex justify-content-center align-items-center ">
          <Col sm={12} md={8} xl={6} className="col-12 mx-3 my-2">
            <img src={imgLogin} className="img-fluid" alt="imagen login" />
          </Col>
          <Col sm={12} md={8} xl={4} className="col-12 mx-3 my-2">
            <div className="formulario">
              <Form onSubmit={onSubmitForm}>
                <h2 className="text-center mx-4 ">LOGIN</h2>
                <Form.Group controlId="formEmail">
                  <Form.Label className=" d-flex justify-content-start">
                    Email:
                  </Form.Label>
                  <Form.Control
                    type="email"
                    placeholder="Ingrese su email"
                    className="border border-primary rounded-left"
                    name="email"
                    value={email}
                    onChange={onChangeForm}
                  />
                </Form.Group>
                <Form.Group controlId="formPassword">
                  <Form.Label className="justify-content-start">
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
                <Row>
                  <Col className="justify-content-center">
                    <Button
                      className="text-white text-uppercase font-weight-bold btnauth rounded-pill btn btn-button w-100"
                      type="submit"
                    >
                      Ingresar
                    </Button>
                  </Col>
                </Row>
                <Link className="justify-content-start p-2" to={"/registro"}>
                  No tienes una cuenta? Registrate!
                </Link>
              </Form>
            </div>
          </Col>
        </Row>
      </Container>
    </Fragment>
  );
}
