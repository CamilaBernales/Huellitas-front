import React, { Fragment, useState } from "react";
import { Form, Container, Button, Col, Row, Alert } from "react-bootstrap";
import axiosConfig from "../../../config/axios";
import Swal from "sweetalert2";
import "../../../css/Mensaje.css";

export default function FormMensaje() {
  //Defino el state
  const [consulta, setConsulta] = useState({
    nombre: "",
    email: "",
    mensaje: "",
  });
  const [error, setError] = useState(false);
  const [msgError, setMsgError] = useState("");

  //Extraigo la consulta
  const { nombre, email, mensaje } = consulta;

  //Cuando hay cambios en el formulario
  const onChangeConsulta = (e) => {
    setError(false);
    setConsulta({
      ...consulta,
      [e.target.name]: e.target.value,
    });
  };

  //Cuando quiero mandar el mensaje
  const onSubmitConsulta = (e) => {
    e.preventDefault();

    //Validar campos
    if (
      consulta.nombre.trim() !== "" &&
      consulta.email.trim() !== "" &&
      consulta.mensaje.trim() !== ""
    ) {
      //Agrego el mensaje en la BD
      axiosConfig
        .post("/api/mensajes/", consulta)
        .then((res) => {
          Swal.fire({
            position: "center",
            icon: "success",
            title: "El mensaje fue enviado con éxito.",
            showConfirmButton: false,
            timer: 1500,
          });
          //Reseteo el formulario
          setConsulta({
            nombre: "",
            email: "",
            mensaje: "",
          });
        })
        .catch(() => {
          setError(true);
          setMsgError(
            "Hubo un error al intentar enviar tu mensaje. Asegurate de ingresar un email válido"
          );
        });
    } else {
      setError(true);
      setMsgError("Los campos deben estar completos.");
    }
  };

  return (
    <Fragment>
      <Container className="px-5 my-4">
        {error ? (
          <Alert
            className="p-3 text-center text-uppercase font-weight-bold"
            variant="danger"
          >
            {msgError}
          </Alert>
        ) : null}
        <h3 className="text-center py-3 ">Contactanos</h3>
        <p className="text-center  text-secondary">
          <b>Ubicación:</b> San Miguel de Tucumán. Provincia de Tucumán. Argentina
        </p>
          <p className="text-center text-secondary">
          <b>Telefonos:</b> +54 9 381094-4312 | +54 984609234
          </p>
        <Form onSubmit={onSubmitConsulta}>
          <Row className="d-flex justify-content-around align-items-center">
            <Col sm={12} md={6} className="my-2">
              <Form.Group controlId="formName">
                <Form.Control
                  placeholder="Nombre"
                  className="formulariosMensaje border border-info"
                  type="name"
                  name="nombre"
                  value={nombre}
                  onChange={onChangeConsulta}
                />
              </Form.Group>
            </Col>
            <Col sm={12} md={6} className="my-2">
              <Form.Group controlId="formEmail">
                <Form.Control
                  placeholder="Email"
                  className="formulariosMensaje border border-info"
                  rows="3"
                  type="email"
                  name="email"
                  value={email}
                  onChange={onChangeConsulta}
                />
              </Form.Group>
            </Col>
          </Row>
          <Row>
            <Col className="my-2">
              <Form.Group
                controlId="exampleForm.ControlTextarea1"
                className="w-100"
              >
                <Form.Control
                  placeholder="Mensaje"
                  className="formulariosMensaje border border-info"
                  as="textarea"
                  rows="3"
                  name="mensaje"
                  value={mensaje}
                  onChange={onChangeConsulta}
                  maxLength="250"
                />
              </Form.Group>
            </Col>
          </Row>
          <Row>
            <Col className="my-2 d-flex justify-content-end">
              <Button size="md" variant="outline-info" className="btn-mensaje" type="submit">
                Enviar
              </Button>
            </Col>
          </Row>
        </Form>
      </Container>
    </Fragment>
  );
}
