import React, { Fragment, useState } from "react";
import imagen from "../../../img/logoprueba.png";
import { Navbar, Nav, Button } from "react-bootstrap";
import { Link, Redirect } from "react-router-dom";

const NavBar = () => {

  const salir = () => {
    sessionStorage.setItem('usuarioReg', '');
  }

  return (
      <Fragment>
        <div className="img-fluid d-flex justify-content-end m-0">
          <div className="p-3">
            <em className="mr-3"><b>Administrador</b></em>
            <Button onClick={salir}>Salir</Button>
          </div>
        </div>
        <div className="d-flex img-fluid mt-0 mb-3 justify-content-center">
          <img alt="logo" src={imagen} />
        </div>
        <Navbar className="d-flex justify-content-center " bg="warning">
          <Nav>
            <Link to="/admin/pedidos" className="nav-link">Pedidos</Link>
            <Link to="/admin/turnos" className="nav-link">Turnos</Link>
            <Link to="/admin/productos" className="nav-link">Productos</Link>
            <Link to="/admin/usuarios" className="nav-link">Usuarios</Link>
          </Nav>
        </Navbar>
      </Fragment>
  );
}

export default NavBar;
