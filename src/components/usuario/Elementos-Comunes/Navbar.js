import React, { useState, useEffect } from "react";
import { Navbar, Nav, NavDropdown } from "react-bootstrap";
import "../../../css/Navbar.css";
const NavBar = () => {
  const [isLogIn, setIsLogIn] = useState(false);

  const revisarSesion = () => {
    const isLoggin = localStorage.getItem("token") || "";
    console.log(isLoggin);
    if (isLoggin === "") {
      setIsLogIn(false);
    } else {
      setIsLogIn(true);
    }
  };

  useEffect(() => {
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
