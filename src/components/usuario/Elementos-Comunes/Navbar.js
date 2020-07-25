import React, { useState, useEffect } from "react";
import { Navbar, Nav, NavDropdown, Col } from "react-bootstrap";
import { NavLink  } from "react-router-dom";
import "../../../css/Navbar.css";
import "../../../css/NavbarAdmin.css"
import tokenAuth from "../../../config/token";
import PreCarrito from "./PreCarrito";
import BotonInicioSesion from "./BotonInicioSesion";
import PropTypes from "prop-types";
import NavbarAdmin from "../../administrador/Elementos-Comunes/NavbarAdmin"
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
        <>
          <ImagenHome />
          <Navbar className="navbar navlink" collapseOnSelect expand="lg">
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Brand href="/">Huellitas</Navbar.Brand>
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="navlink m-auto ">
                <NavLink  activeClassName="selected" className="btn-navbar" exact to="/">
                  Inicio
                </NavLink >
                {isLogIn ? (
                  <NavDropdown
                    className="btn-navbar"
                    title="Turnos"
                    id="basic-nav-dropdown"
                    activeClassName="selected"
z                  >
                    <NavLink className="dropdown-item" activeClassName="selected" exact to="/turno">
                      Solicitar Turno
                    </NavLink>
                    <NavLink  className="dropdown-item" activeClassName="selected" exact to="/misturnos">
                      Mis Turnos
                    </NavLink>
                  </NavDropdown>
                ) : (
                  <NavLink activeClassName="selected" className="btn-navbar" exact to="/login">
                    Turnos
                  </NavLink>
                )}
                <NavLink activeClassName="selected" className="btn-navbar" exact to="/tienda">
                  Tienda
                </NavLink>
                {isLogIn ? (
                  <NavLink activeClassName="selected" className="btn-navbar" exact to="/miscompras">
                    Tus Compras
                  </NavLink>
                ) : null}
                <NavLink activeClassName="selected" className="btn-navbar" exact to="/equipo">
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
          <>
            <Navbar className="navbar navlink" collapseOnSelect expand="lg">
              <Navbar.Toggle aria-controls="responsive-navbar-nav" />
              <NavbarAdmin />
              <BotonInicioSesion />
            </Navbar>
          </>
        )}
      <Col>
        <PreCarrito
          modalShow={modalShow}
          setModalShow={setModalShow}
          onHide={onHide}
          setComprasGuardadas={setComprasGuardadas}
          comprasGuardadas={comprasGuardadas}
          isLogIn={isLogIn}
        />
      </Col>
    </>
  );
};
NavBar.propTypes = {
  setComprasGuardadas: PropTypes.func,
  comprasGuardadas: PropTypes.number,
  respuesta: PropTypes.object
};
export default NavBar;
