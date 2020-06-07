import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import "../../../css/Navbar.css";
const NavBar = () => {
  return (
    <Navbar className="navbar" collapseOnSelect expand="lg">
      <Navbar.Brand href="/">Huellitas</Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="nav ml-auto ">
          <Nav.Link href="/">Inicio</Nav.Link>
          <Nav.Link href="/turnos">Turnos</Nav.Link>
          <Nav.Link href="/tienda">Market</Nav.Link>
          <Nav.Link href="/equipo">Nuestro Equipo</Nav.Link>
          <Nav.Link href="/contacto">Contacto</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavBar;
