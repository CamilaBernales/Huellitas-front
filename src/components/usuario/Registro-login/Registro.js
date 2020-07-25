import React, { Fragment, useState, useEffect } from "react";
import { Container, Form, Button, Col, Row, Alert } from "react-bootstrap";
// import { Redirect } from "react-router-dom";
import registroimg from "../../../img/registro.svg";
import "../../../css/Login.css";
import axiosConfig from "../../../config/axios";

export default function Registro() {
  const [usuario, setUsuario] = useState({
    nombre: "",
    email: "",
    password: "",
    telefono: "",
  });

  const { nombre, email, password, telefono } = usuario;
  const [passwordConfirm, setPasswordConfirm] = useState("");
  const [error, setError] = useState(false);
  const [msgError, setMsgError] = useState("");
  const onChangeForm = (e) => {
    setError(false);
    setUsuario({
      ...usuario,
      [e.target.name]: e.target.value,
    });
  };

  const onSubmitForm = (e) => {
    e.preventDefault();
    if (
      nombre.trim() === "" ||
      email.trim() === "" ||
      password.trim() === "" ||
      passwordConfirm.trim() === ""
    ) {
      setError(true);
      setMsgError("Los campos deben estar completos.");
      window.scrollTo(0, 200);
      return;
    } else if (password !== passwordConfirm) {
      setError(true);
      setMsgError("Las contraseñas ingresadas no coinciden");
      window.scrollTo(0, 200);
      return;
    }
    axiosConfig
      .post("/api/usuarios/registro", usuario)
      .then(() => {
        window.location.href = "/login";
      })
      .catch((error) => {
        console.log(error.response);
        window.scrollTo(0, 200);
        setError(true);
        setMsgError(error.response.data.msg);
      });
    axiosConfig.post("/api/usuarios/email", usuario);
  };
  useEffect(() => {
    window.scrollTo(0, 200);
  }, []);
  return (
    <Fragment>
      <Container className="my-5 py-3">
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
            <img src={registroimg} alt="imagen registro" />
          </Col>
          <Col sm={12} md={8} xl={4} className="col-12 mx-3 my-2">
            <Form className="formulario" onSubmit={onSubmitForm}>
              <h3 className="text-center mx-4">
                Crear una cuenta
              </h3>
              <Form.Group controlId="formName">
                <Form.Label className=" justify-content-start">
                  Nombre:
                </Form.Label>
                <Form.Control
                  className="border border-info rounded-left"
                  type="text"
                  placeholder="Ingrese su nombre"
                  name="nombre"
                  value={nombre}
                  onChange={onChangeForm}
                />
              </Form.Group>

              <Form.Group controlId="formEmail">
                <Form.Label className="justify-content-start">
                  Email:
                </Form.Label>
                <Form.Control
                  className="border border-info rounded-left"
                  type="email"
                  placeholder="Ingrese su email"
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
                  className="border border-info rounded-left"
                  type="password"
                  placeholder="Ingrese su contraseña"
                  name="password"
                  value={password}
                  onChange={onChangeForm}
                />
              </Form.Group>

              <Form.Group controlId="formConfirmPassword">
                <Form.Label className="justify-content-start">
                  Confirmar contraseña:
                </Form.Label>
                <Form.Control
                  className="border border-info rounded-left"
                  type="password"
                  placeholder="Ingrese su contraseña nuevamente"
                  name="passwordConfirm"
                  value={passwordConfirm}
                  onChange={(e) => setPasswordConfirm(e.target.value)}
                />
              </Form.Group>

              <Form.Group controlId="formLastName">
                <Form.Label className="justify-content-start">
                  Teléfono (opciona):
                </Form.Label>
                <Form.Control
                  className="border border-info rounded-left"
                  type="number"
                  placeholder="Ingrese su telefono (opcional)"
                  name="telefono"
                  value={telefono}
                  onChange={onChangeForm}
                />
              </Form.Group>

              <Row>
                <Col className="justify-content-between">
                  <Button
                    variant="info"
                    className="text-white mt-3 btn btn-button w-100"
                    type="submit"
                  >
                    Enviar
                  </Button>
                </Col>
              </Row>
            </Form>
          </Col>
        </Row>
      </Container>
    </Fragment>
  );
}
