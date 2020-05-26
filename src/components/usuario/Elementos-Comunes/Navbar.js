import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <Navbar className="d-flex justify-content-center " bg="warning">
      <Nav>
        <Nav.Link href="/">Inicio</Nav.Link>
        <Nav.Link href="/turnos">Turnos</Nav.Link>
        <Nav.Link href="/tienda">Market</Nav.Link>
        <Nav.Link href="/equipo">Nuestro Equipo</Nav.Link>
        <Nav.Link href="/contacto">Contacto</Nav.Link>
      </Nav>
    </Navbar>
  );
};

export default NavBar;
