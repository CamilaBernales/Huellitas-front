import React, { useState, useEffect } from "react";
import { Navbar, Nav, NavDropdown } from "react-bootstrap";
import { Link, NavLink } from "react-router-dom";
import "../../../css/Navbar.css";
import "../../../css/NavbarAdmin.css"
import tokenAuth from "../../../config/token";
import PreCarrito from "./PreCarrito";
import BotonInicioSesion from "./BotonInicioSesion";
import PropTypes from "prop-types";
import ImagenHome from "./ImagenHome"
// import Footer from "./Footer"

const NavBar = ({ comprasGuardadas, setComprasGuardadas, respuesta }) => {
  const [isLogIn, setIsLogIn] = useState(false);
  const [modalShow, setModalShow] = React.useState(false);
  const onHide = () => {
    setModalShow(false);
  };

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
    <>
      {!respuesta.isAdmin ? (
        //NAVBAR DE USUARIO
        <>
          <ImagenHome />
          <Navbar className="navbar navlink" collapseOnSelect expand="lg">
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Brand href="/">Huellitas</Navbar.Brand>
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="navlink m-auto ">
                <NavLink
                  activeclassname="selected"
                  className="btn-navbar"
                  exact
                  to="/"
                >
                  Inicio
                </NavLink>
                {isLogIn ? (
                  <NavDropdown
                    className="btn-navbar"
                    title="Turnos"
                    id="basic-nav-dropdown"
                    activeclassname="selected"
                  >
                    <NavLink
                      className="dropdown-item"
                      activeclassname="selected"
                      exact
                      to="/turno"
                    >
                      Solicitar Turno
                    </NavLink>
                    <NavLink
                      className="dropdown-item"
                      activeclassname="selected"
                      exact
                      to="/misturnos"
                    >
                      Mis Turnos
                    </NavLink>
                  </NavDropdown>
                ) : (
                  <NavLink
                    activeclassname="selected"
                    className="btn-navbar"
                    exact
                    to="/login"
                  >
                    Turnos
                  </NavLink>
                )}
                <NavLink
                  activeclassname="selected"
                  className="btn-navbar"
                  exact
                  to="/tienda"
                >
                  Tienda
                </NavLink>
                {isLogIn ? (
                  <NavLink
                    activeclassname="selected"
                    className="btn-navbar"
                    exact
                    to="/miscompras"
                  >
                    Tus Compras
                  </NavLink>
                ) : null}
                <NavLink
                  activeclassname="selected"
                  className="btn-navbar"
                  exact
                  to="/equipo"
                >
                  Nuestro Equipo
                </NavLink>
              </Nav>
            </Navbar.Collapse>
            <Navbar.Brand onClick={() => setModalShow(true)}>
              {" "}
              <i className="fas fa-cart-plus fa-1x" />
              <span>{comprasGuardadas}</span>
            </Navbar.Brand>
            <BotonInicioSesion />
          </Navbar>
        </>
      ) : (
        //NAVBAR DEL ADMIN
          <>
            <Navbar className="navbar-admin navlink" collapseOnSelect expand="lg">
              <Navbar.Toggle aria-controls="responsive-navbar-nav" />
              {/* <NavbarAdmin /> */}
              <Navbar.Brand href="/">Huellitas <h5>Admin</h5></Navbar.Brand>
              <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className=" navlink mx-auto ">
                  <Link to="/admin/pedidos" className="nav-link btn-navbar-admin">
                    Pedidos
                </Link>
                  <NavDropdown title="Turnos" id="basic-nav-dropdown" className="btn-navbar-admin">
                    <NavDropdown.Item className="btn-navbar-admin" href="/admin/turnos">
                      Listado de turnos
                  </NavDropdown.Item>
                  </NavDropdown>
                  <NavDropdown title="Productos" id="basic-nav-dropdown" className="btn-navbar-admin">
                    <NavDropdown.Item className="btn-navbar-admin" href="/admin/altaproducto">
                      Alta de Producto
                  </NavDropdown.Item>
                    <NavDropdown.Item className="btn-navbar-admin" href="/admin/productos">
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
              <BotonInicioSesion />
            </Navbar>
          </>
        )}
        <PreCarrito
          modalShow={modalShow}
          setModalShow={setModalShow}
          onHide={onHide}
          setComprasGuardadas={setComprasGuardadas}
          comprasGuardadas={comprasGuardadas}
          isLogIn={isLogIn}
        />
    </>
  );
};
NavBar.propTypes = {
  setComprasGuardadas: PropTypes.func,
  comprasGuardadas: PropTypes.number,
  respuesta: PropTypes.object,
};
export default NavBar;
