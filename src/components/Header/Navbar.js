import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { Link } from "react-router-dom";

const NavBar = () => {

    return(
    
        <Navbar className="d-flex justify-content-center" bg="warning" >
            <Nav>
                <Link to="/" className="nav-link">Inicio</Link>
                <Link to="/tienda" className="nav-link">Turnos</Link>
                <Link to="/servicios" className="nav-link">Productos</Link>
                <Link to="/equipo" className="nav-link">Nuestro Equipo</Link>
                <Link to="/contacto" className="nav-link">Contacto</Link>
                <Link to="/registro" className="nav-link">Registrarse</Link>
            </Nav>
        </Navbar>
    
    );
}


export default NavBar; 