import React, { Fragment, useState } from "react";
import imagen from "../../../img/logoprueba.png";
import { Navbar, Nav, Button, NavDropdown } from "react-bootstrap";
import { Link, Redirect } from "react-router-dom";

const NavBar = () => {

  const salir = () => {

    localStorage.clear()
    window.location.reload(true);
    
  };

  return (
    <Fragment>
      <div className="img-fluid d-flex justify-content-end m-0">
        <div className="p-3">
          <em className="mr-3">
            <b>Administrador</b>
          </em>
          <Button onClick={salir}>Salir</Button>
        </div>
      </div>
      <div className="d-flex img-fluid mt-0 mb-3 justify-content-center">
        <img alt="logo" src={imagen} />
      </div>
      <Navbar className="navbar" collapseOnSelect expand="lg">
        <Navbar.Brand href="/">Huellitas</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className=" navlink ml-auto ">
            <Nav.Link href="/admin/turnos">Inicio</Nav.Link>
            <Link to="/admin/pedidos" className="nav-link">
              Pedidos
            </Link>
            <NavDropdown title="Turnos" id="basic-nav-dropdown">
              <NavDropdown.Item href="/admin/turnos">
                Listado de turnos
              </NavDropdown.Item>
              <NavDropdown.Item href="/turno">Crear un turno</NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="Productos" id="basic-nav-dropdown">
              <NavDropdown.Item href="/admin/altaproducto">
                Alta de Producto
              </NavDropdown.Item>
              <NavDropdown.Item href="/admin/productos">
                Listado de Productos
              </NavDropdown.Item>
            </NavDropdown>
            <Link to="/admin/listadousuarios" className="nav-link">
              Usuarios
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      {/* <Navbar className="d-flex justify-content-center " bg="warning">
          <Nav>
            <Link to="/admin/pedidos" className="nav-link">Pedidos</Link>
            <Link to="/admin/turnos" className="nav-link">Turnos</Link>
            <Link to="/admin/productos" className="nav-link">Productos</Link>
            <Link to="/admin/listadousuarios" className="nav-link">Usuarios</Link>
          </Nav>
        </Navbar> */}
    </Fragment>
  );
};

export default NavBar;
