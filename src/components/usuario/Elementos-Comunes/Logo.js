import React, { useState } from "react";
import imagen from "../../../img/logoprueba.png";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";
import "../../../css/Header.css";

const Logo = () => {
  let loginLogo;

  const [usuario, setUsuario] = useState(
    sessionStorage.getItem("usuarioReg") || ""
  );

  const salir = () => {
    sessionStorage.setItem("usuarioReg", "");
    setUsuario(sessionStorage.getItem("usuarioReg"));
  };

  if (usuario !== "admin" && usuario !== "") {
    loginLogo = (
      <div className="p-3">
        <em className="mr-3">
          <b>{usuario}</b>
        </em>
        <Button onClick={salir}>Salir</Button>
      </div>
    );
  } else {
    loginLogo = (
      <div className="img-fluid d-flex justify-content-end ">
        <div className="p-3">
          <Link to="/login">
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
