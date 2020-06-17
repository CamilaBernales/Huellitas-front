import React, { useState, useEffect } from "react";
import { Navbar, Nav, NavDropdown } from "react-bootstrap";
import "../../../css/Navbar.css";
import tokenAuth from "../../../config/token";
const NavBar = () => {
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

  return (
    <Navbar className="navbar" collapseOnSelect expand="lg">
      <Navbar.Brand href="/">Huellitas</Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className=" navlink ml-auto ">
          <Nav.Link href="/">Inicio</Nav.Link>
          {isLogIn ? (
            <NavDropdown title="Turnos" id="basic-nav-dropdown">
              <NavDropdown.Item href="/turno">Solicitar Turno</NavDropdown.Item>
              <NavDropdown.Item href="/">Mis Turnos</NavDropdown.Item>
            </NavDropdown>
          ) : (
            <Nav.Link href="/login">Turnos</Nav.Link>
          )}
          <Nav.Link href="/tienda">Market</Nav.Link>
          <Nav.Link href="/equipo">Nuestro Equipo</Nav.Link>
          <Nav.Link href="/contacto">Contacto</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavBar;
