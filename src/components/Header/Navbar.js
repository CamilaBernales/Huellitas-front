import React from 'react'
import { Navbar, Nav } from 'react-bootstrap';

const NavBar = () => {

    return(
    
        <Navbar bg="light" variant="light">
        <Nav className="mr-auto">
        <Nav.Link href="/">Inicio</Nav.Link>
        <Nav.Link href="/tienda">Turnos</Nav.Link>
        <Nav.Link href="/servicios">Productos</Nav.Link>
        <Nav.Link href="/equipo">Nuestro Equipo</Nav.Link>
        <Nav.Link href="/contacto">Contacto</Nav.Link>
        </Nav>
        <Nav className="ml-auto">
            <Nav.Link href="/compras">carrito</Nav.Link>
            <Nav.Link href="/login">Ingresar</Nav.Link>
        </Nav>
    </Navbar>
    
    )
}


export default NavBar; 