import React from 'react'
import { Navbar, Nav, NavDropdown } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function NavbarAdmin() {
    return (
        <Navbar className="navbar navlink" collapseOnSelect expand="lg">
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Brand href="/">Huellitas <h5>Admin</h5></Navbar.Brand>
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className=" navlink mx-auto ">
                <Link to="/admin/pedidos" className="nav-link btn-navbar-admin">
                  Pedidos
                </Link>
                <NavDropdown title="Turnos" id="basic-nav-dropdown" className="btn-navbar-admin">
                  <NavDropdown.Item href="/admin/turnos">
                    Listado de turnos
                  </NavDropdown.Item>
                </NavDropdown>
                <NavDropdown title="Productos" id="basic-nav-dropdown" className="btn-navbar-admin">
                  <NavDropdown.Item href="/admin/altaproducto">
                    Alta de Producto
                  </NavDropdown.Item>
                  <NavDropdown.Item href="/admin/productos">
                    Listado de Productos
                  </NavDropdown.Item>
                </NavDropdown>
                <Link to="/admin/listadousuarios" className="nav-link btn-navbar-admin">
                  Usuarios
                </Link>
                <Link to="/admin/listadomensajes" className="nav-link btn-navbar-admin">
                  Mensajes
                </Link>
              </Nav>
            </Navbar.Collapse>
      </Navbar>            
    )
}
