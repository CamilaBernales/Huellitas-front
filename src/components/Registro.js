import React, { Fragment, useState } from 'react';
import {Container, Form, Button, Col, Row } from 'react-bootstrap';
import { Link, Redirect } from 'react-router-dom';
import Logo from './Header/Logo';
import Navbar from './Header/Navbar';
import { v4 as uuidv4 } from 'uuid';

export default function Registro() {
  const [usuario, setUsuario] = useState({
    id: '',
    nombre: '',
    apellido: '',
    email: '',
    password: ''
  });

  const [passwordConfirm, setPasswordConfirm] = useState('');

  const [redireccionar, setRedireccionar] = useState(false);

  const {nombre, apellido, email, password} = usuario;

  const onChangeForm = (e) => {
    setUsuario({
      ...usuario,
      id: uuidv4(),
      [e.target.name]: e.target.value,
    });
  }
  
  const onSubmitForm = (e) => {
    e.preventDefault();
    if (nombre === '' || apellido === '' || email === '' || password === '' || passwordConfirm === '') {
      alert('Por favor llenar todos los campos');
      return;
    }
    if (password !== passwordConfirm) {
      alert('La contraseña y la comfirmación no coinciden');
      return;
    }
    let usuarios;
    if (!localStorage.getItem('usuarios')) {
      usuarios = [usuario]; 
    } else {
      usuarios = JSON.parse(localStorage.getItem('usuarios'));
      if (usuarios.find(usuario => usuario.email === email)) {
        alert('El email ya existe');
        setUsuario({email: ''});
        return;
      }
      usuarios = [usuario, ...usuarios];
    }
    localStorage.setItem('usuarios', JSON.stringify(usuarios));
    localStorage.setItem('usuarioLogeado', JSON.stringify(nombre));
    setUsuario({
      id: '',
      nombre: '',
      apellido: '',
      email: '',
      password: ''
    });
    setPasswordConfirm('');
    alert('Usuario registrado correctamente');
    setRedireccionar(true);
  }
  
  return(
    redireccionar ?
      <Redirect to="/"/>
    :
      <Fragment>
        <Logo/>
        <Navbar/>
        <Container className="m-4">
          <Row className="justify-content-center">
            <Col sm={12} md={4}>
              <Form >
                <Form.Group controlId="formName">
                  <Form.Label className="d-flex justify-content-start">Nombre:</Form.Label>
                  <Form.Control 
                    type="text" 
                    placeholder="Ingrese su nombre"
                    name="nombre"
                    value={nombre}
                    onChange={onChangeForm}
                  />
                </Form.Group>

                <Form.Group controlId="formLastName">
                  <Form.Label className="d-flex justify-content-start">Apellido:</Form.Label>
                  <Form.Control 
                    type="text" 
                    placeholder="Ingrese su apellido"
                    name="apellido"
                    value={apellido} 
                    onChange={onChangeForm}
                  />
                </Form.Group>

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

                <Form.Group controlId="formConfirmPassword">
                  <Form.Label className="d-flex justify-content-start">Confirmar contraseña:</Form.Label>
                  <Form.Control 
                    type="password" 
                    placeholder="Ingrese su contraseña nuevamente"
                    name="passwordConfirm"
                    value={passwordConfirm} 
                    onChange={(e) => setPasswordConfirm(e.target.value)}
                  />
                </Form.Group>

                <Row >
                  <Col className="d-flex justify-content-between">
                    <Link to="/login" className="nav-link p-0">
                      Iniciar sesión
                    </Link>
                    <Button 
                      variant="primary" 
                      type="submit"
                      onClick={onSubmitForm}
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