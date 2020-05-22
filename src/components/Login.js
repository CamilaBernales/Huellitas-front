import React, { Fragment, useState } from 'react';
import {Container, Form, Button, Col, Row } from 'react-bootstrap';
import { Link, Redirect } from 'react-router-dom';

export default function Login() {
  
  const [ingreso, setIngreso] = useState({
    email: '',
    password: ''
  });

  const {email, password} = ingreso;

  const [redireccionar, setRedireccionar] = useState(false);

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
      setRedireccionar(true);
    } else {
      alert('La contraseña o el email son incorrectos');
      return;
    }
  }

  return (
    redireccionar ?
      <Redirect to="/"/>
    :
      <Fragment>
        <Container className="m-4">
          <Row className="justify-content-center">
            <Col sm={12} md={4}>
              <Form >
                <Form.Group controlId="formEmail">
                  <Form.Label className="d-flex justify-content-start">Email:</Form.Label>
                  <Form.Control 
                    type="email"
                    placeholder="Ingrese su email"
                    name="email"
                    value={email}
                    onChange={onChangeForm}
                  />
                </Form.Group>

                <Form.Group controlId="formPassword">
                  <Form.Label className="d-flex justify-content-start">Contraseña:</Form.Label>
                  <Form.Control 
                    type="password" 
                    placeholder="Ingrese su contraseña"
                    name="password"
                    value={password}
                    onChange={onChangeForm}
                  />
                </Form.Group>

                <Row>
                  <Col className="d-flex justify-content-between">
                    <Link to="/registro" className="nav-link p-0">
                      Registrarse
                    </Link>
                    <Button 
                      variant="primary" 
                      type="submit"
                      onClick={onSubmitForm}
                    >
                      Ingresar
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