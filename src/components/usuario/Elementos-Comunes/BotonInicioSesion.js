import React, { Fragment, useState, useEffect } from "react";
// import imagen from "../../../img/logoprueba.png";
// import { Link } from "react-router-dom";
import { Image, Dropdown, Row, Col, Button } from "react-bootstrap";
import "../../../css/Header.css";
import tokenAuth from "../../../config/token";
import axiosConfig from "../../../config/axios";

const Logo = () => {
  const [usuario, setUsuario] = useState({});

  const obtenerUsuario = () => {
    axiosConfig.get(`/api/usuarios/usuarioactual`).then((res) => {
      setUsuario(res.data.usuario);
    });
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

  const inicioSesion = () => {
    window.location.href = "/login";
  };

  if (isLogIn) {
    loginLogo = (
      <Row className="p-3 mr-4">
        <Dropdown>
          <Dropdown.Toggle className="buttonIS mr-3" id="dropdown-custom-1">
            Mi cuenta
          </Dropdown.Toggle>
          <Dropdown.Menu className="dropdown-usuario">
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
                <Col className="d-flex justify-content-center align-items-center text-truncate">
                  <em className="text-truncate">{usuario.nombre}</em>{" "}
                </Col>
              </Row>
            </Dropdown.Item>
            <Dropdown.Item className="btn-IS" href="/perfilusuario">
              Mi perfil
            </Dropdown.Item>
            <Dropdown.Item className="btn-IS" onClick={() => salir()}>
              Cerrar sesión
            </Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </Row>
    );
  } else {
    loginLogo = (
      <div className="img-fluid mr-4 d-flex justify-content-end ">
        <div className="p-3">
          <Button className="buttonIS" onClick={() => inicioSesion()}>
            <span className="p-2">Iniciar Sesión</span>
          </Button>
        </div>
      </div>
    );
  }

  return (
    <Fragment>
      <div className="img-fluid d-flex justify-content-end ">
        <div>{loginLogo}</div>
      </div>
    </Fragment>
  );
};

export default Logo;
