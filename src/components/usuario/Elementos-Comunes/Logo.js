import React, { useState, useEffect } from "react";
import imagen from "../../../img/logoprueba.png";
import { Link } from "react-router-dom";
import { Image, Dropdown, Row, Col } from "react-bootstrap";
import "../../../css/Header.css";
import tokenAuth from "../../../config/token";
import axiosConfig from "../../../config/axios";

const Logo = () => {
  const [usuario, setUsuario] = useState({});

  const obtenerUsuario = () => {
    axiosConfig
      .get(`/api/usuarios/usuarioactual`)
      .then((res) => {
        setUsuario(res.data.usuario);
      })
      .catch((err) => console.log(err.response));
  };
  let loginLogo;
  const [isLogIn, setIsLogIn] = useState(false);
  useEffect(() => {
    const token = localStorage.getItem("token");
    const revisarSesion = () => {
      if (token) {
        tokenAuth(token);
        setIsLogIn(true);
      } else {
        setIsLogIn(false);
      }
    };
    revisarSesion();
    obtenerUsuario();
  }, []);

  const salir = () => {
    localStorage.removeItem("token");
    window.location.href = "/";
  };

  if (isLogIn) {
    loginLogo = (
      <Row className="p-3 mr-2">
        <Dropdown>
          <Dropdown.Toggle variant="light text-info" id="dropdown-custom-1">
            Mi cuenta
          </Dropdown.Toggle>
          <Dropdown.Menu>
            <Dropdown.Item disabled>
              <Row className="d-flex justify-content-center align-items-center">
                <Col
                  xs={6}
                  sm={12}
                  md={10}
                  className="d-flex justify-content-center align-items-center my-1"
                >
                  {" "}
                  <Image
                    fluid
                    className="headeruserphoto"
                    src={usuario.imagen}
                    roundedCircle
                  />
                </Col>
                <Col className="d-flex justify-content-center align-items-center mb-1">
                  <em>{usuario.nombre}</em>{" "}
                </Col>
              </Row>
            </Dropdown.Item>
            <Dropdown.Item href="/perfilusuario">Mi perfil</Dropdown.Item>
            <Dropdown.Item onClick={() => salir()}>Cerrar sesión</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </Row>
    );
  } else {
    loginLogo = (
      <div className="img-fluid d-flex justify-content-end ">
        <div className="p-3">
          <Link to="/login">
            <span className="p-2">Iniciar Sesión</span>
            <i className="fas fa-sign-in-alt fa-2x" />
          </Link>
        </div>
      </div>
    );
  }

  return (
    <header className="headerpage">
      <div className="img-fluid d-flex justify-content-end ">
        <div>{loginLogo}</div>
      </div>

      <div className="d-flex img-fluid mt-0 justify-content-center align-items-center">
        <img alt="logo" src={imagen} />
      </div>
    </header>
  );
};

export default Logo;
