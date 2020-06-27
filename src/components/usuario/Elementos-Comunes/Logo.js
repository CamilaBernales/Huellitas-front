import React, { useState, useEffect } from "react";
import imagen from "../../../img/logoprueba.png";
import { Link } from "react-router-dom";
import { Button, Dropdown, Row } from "react-bootstrap";
import "../../../css/Header.css";
import tokenAuth from "../../../config/token";

const Logo = () => {
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
  }, []);

  const salir = () => {
    localStorage.removeItem("token");
    window.location.href = "/";
  };

  if (isLogIn) {
    loginLogo = (
      <Row className="p-3 mr-2">
        <Dropdown>
          <Dropdown.Toggle id="dropdown-custom-1">Mi cuenta</Dropdown.Toggle>
          <Dropdown.Menu>
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
        <div className="p-3 ml-5">
          <Link to="/carrito">
            <span className="p-2">(0)</span>
            <i className="fas fa-cart-plus fa-2x" />
          </Link>
        </div>
        <div>{loginLogo}</div>
      </div>

      <div className="d-flex img-fluid mt-0 justify-content-center align-items-center">
        <img alt="logo" src={imagen} />
      </div>
    </header>
  );
};

export default Logo;
