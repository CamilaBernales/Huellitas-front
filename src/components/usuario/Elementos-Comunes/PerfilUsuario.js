import React from "react";
import { Container, Form, Button, Col, Row } from "react-bootstrap";

const PerfilUsuario = () => {
  return (
    <>
      <Container>
        <Form>
          <h2 className="text-center text-uppercase mx-4">Mi Perfil</h2>
          <Form.Group controlId="formName">
            <Form.Label className=" justify-content-start">Nombre:</Form.Label>
            <Form.Control
              className="border border-primary rounded-left"
              type="text"
              placeholder="Ingrese su nombre"
              name="nombre"
            />
          </Form.Group>

          <Form.Group controlId="formEmail">
            <Form.Label className="justify-content-start">Email:</Form.Label>
            <Form.Control
              className="border border-primary rounded-left"
              type="email"
              placeholder="Ingrese su email"
              name="email"
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
            />
          </Form.Group>

          {/* <Form.Group controlId="formConfirmPassword">
                  <Form.Label className="justify-content-start">
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
            <Form.Label className="justify-content-start">rol:</Form.Label>
            <Form.Control
              className="border border-primary rounded-left"
              type="text"
              placeholder="Ingrese su rol"
              name="rol"
            />
          </Form.Group>
        </Form>
      </Container>
    </>
  );
};

export default PerfilUsuario;
