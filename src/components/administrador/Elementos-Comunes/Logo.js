import React, {useState} from "react";
import imagen from "../../../img/logoprueba.png";
import {Link} from "react-router-dom";
import {Button} from "react-bootstrap";
import "../../../css/Header.css";

const Logo = () => {

    let loginLogo;

    const rol = sessionStorage.getItem('rol')
    const usuario = sessionStorage.getItem('usuario')

    const salir = () => {
        localStorage.clear();
        sessionStorage.clear()
        window
            .location
            .reload(true)
    };

    if (rol === "usuario") {
        loginLogo = (
            <div className="img-fluid d-flex justify-content-end ">
                <div className="p-3 ml-5">
                    <Link to="/carrito">
                        <span className="p-2">(0)</span>
                        <i className="fas fa-cart-plus fa-2x"/>
                    </Link>
                </div>
                <div className="p-3">
                    <em className="mr-3">
                        <b>{usuario}</b>
                    </em>
                    <Button onClick={salir}>Salir</Button>
                </div>
            </div>
        );
        
    } else if (rol === 'admin') {
        loginLogo = (
            <div className="img-fluid d-flex justify-content-end ">
                
                <div className="p-3">
                    <em className="mr-3">
                        <b>{usuario}</b>
                    </em>
                    <Button onClick={salir}>Salir</Button>
                </div>
            </div>
        );
    } else {
        loginLogo = (
            <div className="img-fluid d-flex justify-content-end ">
                <div className="p-3">
                    <Link to="/login">
                        <span className="p-2">Iniciar Sesión</span>
                        <i className="fas fa-sign-in-alt fa-2x"/>
                    </Link>
                </div>
            </div>
        );
    }

    return (
        <header >
                <div>{loginLogo}</div>
            <div
                className="d-flex img-fluid mt-0 justify-content-center align-items-center">
                <img alt="logo" src={imagen}/>
            </div>
        </header>
    );
};

export default Logo;
