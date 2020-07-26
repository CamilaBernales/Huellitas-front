import React, { useState } from "react";
import { Form, Row, Col, Button, Container, Alert } from "react-bootstrap";
import axiosConfig from "../../../config/axios";
import Footer from "../Elementos-Comunes/Footer";

const CambioContraseña = () => {
  const [email, setEmail] = useState({});
  const [sendingEmail, setSendingEmail] = useState(false);
  const [error, setError] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  const handleEmailForm = (e) => {
    setError(false);
    setEmail({
      [e.target.name]: e.target.value,
    });
  };
  const authEmail = (e) => {
    e.preventDefault();
    axiosConfig
      .post("/api/usuarios/resetpassword", email)
      .then(() => {
        enviarMail();
      })
      .catch((err) => {
        setError(true);
        setErrorMsg(err.response.data.msg);
      });
  };
  const enviarMail = () => {
    axiosConfig.post("/api/usuarios/emailresetpassword", email).then(() => {
      setSendingEmail(true);
    });
  };

  return (
    <>
      <Container className="my-5 py-5">
        {error ? (
          <Row className="px-5 my-3 d-flex justify-content-center align-items-center ">
            <Alert variant="danger">
              <h6>{errorMsg}</h6>
            </Alert>
          </Row>
        ) : null}
        <Row className=" px-5 m-auto d-flex justify-content-center align-items-center ">
          {sendingEmail ? (
            <Alert variant="info">
              {" "}
              <h6>Revisa la casilla de tu correo électronico</h6>
            </Alert>
          ) : (
              <Col sm={12} md={8} xl={4} className="col-12 mx-3 my-2">
                <Form className="formulario">
                  <Form.Group controlId="formEmail">
                    <Form.Label className=" d-flex justify-content-start">
                      Email:
                </Form.Label>
                    <Form.Control
                      type="email"
                      placeholder="Ingrese su email"
                      className="formulariosMensaje rounded-left"
                      name="email"
                      onChange={handleEmailForm}
                    />
                  </Form.Group>
                  <Row>
                    <Col className="justify-content-center mb-3">
                      <Button
                        variant="info"
                        className="text-white btn btn-button w-100 mt-3"
                        type="submit"
                        onClick={authEmail}
                        disabled={error === true}
                      >
                        Enviar
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

export default CambioContraseña;
