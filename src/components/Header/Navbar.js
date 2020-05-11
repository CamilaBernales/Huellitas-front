import React from 'react'
import { Navbar, Nav } from 'react-bootstrap';

const NavBar = () => {

    return(
    
        <Navbar bg="light" variant="light">
        <Nav className="mr-auto">
        <Nav.Link href="#home">Inicio</Nav.Link>
        <Nav.Link href="#features">Turnos</Nav.Link>
        <Nav.Link href="#pricing">Productos</Nav.Link>
        <Nav.Link href="#pricing">Nuestro Equipo</Nav.Link>
        <Nav.Link href="#pricing">Contacto</Nav.Link>
        </Nav>
        <Nav className="ml-auto">
            <Nav.Link href="#!">carrito</Nav.Link>
            <Nav.Link href="#!">Ingresar</Nav.Link>
        </Nav>
    </Navbar>
    
    )
}


export default NavBar; 