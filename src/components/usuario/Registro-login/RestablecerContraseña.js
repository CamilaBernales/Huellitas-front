import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { Form, Row, Col, Button, Container, Alert } from "react-bootstrap";
import axiosConfig from "../../../config/axios";
import Footer from "../Elementos-Comunes/Footer"

const RestablecerContraseña = () => {
  const { id } = useParams();
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  const handlePassword = (e) => {
    setError(false);
    setPassword(e.target.value);
  };
  const restablecerContraseña = (e) => {
    e.preventDefault();
    if (password === passwordConfirm && password.length >= 6) {
      axiosConfig.put("/api/usuarios/resettingpassword", { id, password });
      setSuccess(true);
      setTimeout(() => {
        window.location.href = "/login";
      }, 2000);
    } else {
      setError(true);
      setErrorMsg(
        "Las contraseñas deben coincidir y tener minimo 6 cáracteres  "
      );
    }
  };

  return (
    <>
      <Container className="my-5 py-3">
        <Row className="px-5 my-3 d-flex justify-content-center align-items-center ">
          {error ? (
            <Alert variant="danger">
              <h6>{errorMsg}</h6>
            </Alert>
          ) : null}
        </Row>
        <Row className="px-5 d-flex justify-content-center align-items-center ">
          {success ? (
            <Alert variant="success">
              {" "}
              <h6>Contraseña cambiada con éxito</h6>
            </Alert>
          ) : (
              <Col sm={12} md={8} xl={4} className="col-12 mx-3 my-2">
                <Form className="formulario">
                  <Form.Group controlId="formPassword">
                    <Form.Label className="justify-content-start">
                      Contraseña:
                </Form.Label>
                    <Form.Control
                      className="formulariosMensaje rounded-left"
                      type="password"
                      placeholder="Ingrese su contraseña"
                      name="password"
                      value={password}
                      onChange={handlePassword}
                    />
                  </Form.Group>

                  <Form.Group controlId="formConfirmPassword">
                    <Form.Label className="justify-content-start">
                      Confirmar contraseña:
                </Form.Label>
                    <Form.Control
                      className="formulariosMensaje rounded-left"
                      type="password"
                      placeholder="Ingrese su contraseña nuevamente"
                      name="passwordConfirm"
                      value={passwordConfirm}
                      onChange={(e) => setPasswordConfirm(e.target.value)}
                    />
                  </Form.Group>
                  <Row>
                    <Col className="justify-content-center mb-3">
                      <Button
                        variant="info"
                        className="text-white btn btn-button w-100 mt-3"
                        type="submit"
                        onClick={restablecerContraseña}
                        disabled={error === true}
                      >
                        Restablecer contraseña
                  </Button>
                    </Col>
                  </Row>
                </Form>
              </Col>
            )}
        </Row>
      </Container>
      <Footer />
    </>
  );
};

export default RestablecerContraseña;
