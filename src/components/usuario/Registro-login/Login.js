import React, { Fragment, useState } from "react";
import { Container, Form, Button, Col, Row } from "react-bootstrap";
import { Link, Redirect } from "react-router-dom";
import styles from "../../../css/Login.module.css";
import imgLogin from "../../../img/login.svg";

export default function Login() {
  
  const [ingreso, setIngreso] = useState({
    email: '',
    password: ''
  });

  const {email, password} = ingreso;

  const [redireccionar, setRedireccionar] = useState(false);
  const [admin, setAdmin] = useState(false);

  const onChangeForm = (e) => {
    setIngreso({
      ...ingreso,
      [e.target.name]: e.target.value
    });
  }

  const onSubmitForm = (e) => {
    e.preventDefault();
    if (email === '' || password === '') {
      alert('Por favor llenar todos los campos');
      return;
    }

    if (email === 'admin' && password === 'admin') {
      localStorage.setItem('usuarioReg', 'Administrador');
      setAdmin(true);
    } else {
      let usuarios;
      if (localStorage.getItem('usuarios')) {
        usuarios = JSON.parse(localStorage.getItem('usuarios'));
      } else {
        alert('El usuario no existe');
        return;
      }
      
      if (usuarios.find(usuario => (usuario.email === email) && (usuario.password === password))) {
        const usuarioReg = usuarios.find(usuario => (
          (usuario.email === email) && (usuario.password === password) 
        )).nombre;
        localStorage.setItem('usuarioReg', usuarioReg);
      } else {
        alert('La contraseña o el email son incorrectos');
        return;
      }

    }

    setRedireccionar(true);
  }

  return (
    redireccionar ?
      admin ?
        <Redirect to="/admin/turnos"/>
      :
        <Redirect to="/"/>
    :
      <Fragment>
        <Container className="m-4">
          <Row className="px-5 d-flex justify-content-center align-items-center ">
            <div className="col mx-5 img-fluid">
              <img src={imgLogin} alt="imagen login"/>
            </div>
            <Col sm={12} md={4}>
              <div className={styles.formulario}>
                <Form>
                  <h2 className="text-center mx-4 ">LOGIN</h2>
                  <Form.Group controlId="formEmail">
                    <Form.Label className="d-flex justify-content-start">
                      Email:
                    </Form.Label>
                    <Form.Control
                      type="email"
                      placeholder="Ingrese su email"
                      className="border border-warning rounded-left"
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
                      className="border border-warning rounded-left"
                      type="password"
                      placeholder="Ingrese su contraseña"
                      name="password"
                      value={password}
                      onChange={onChangeForm}
                    />
                  </Form.Group>
                  <Row>
                    <Col className="d-flex justify-content-center">
                      <Button
                        className="text-white text-uppercase font-weight-bold rounded-pill btn btn-button w-100"
                        variant="warning"
                        type="submit"
                        onClick={onSubmitForm}
                      >
                        Ingresar
                      </Button>
                    </Col>
                  </Row>
                  <Link
                    className="d-flex justify-content-start p-2"
                    to={"/registro"}
                  >
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
