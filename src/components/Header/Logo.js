import React, { useState } from "react";
import imagen from "../../imagen.png";
import { Link } from "react-router-dom";
import { Button } from 'react-bootstrap';

const Logo = () => {
  let loginLogo;
  
  const [usuario, setUsuario] = useState(localStorage.getItem('usuarioReg') || '');

  const salir = () => {
    localStorage.setItem('usuarioReg', '');
    setUsuario(localStorage.getItem('usuarioReg'));
  }

  if (usuario !== 'admin' && usuario !== '') {
    loginLogo = 
      <div className="p-3">
        <em className="mr-3"><b>{usuario}</b></em>
        <Button onClick={salir}>Salir</Button>
      </div>;
  } else {
    loginLogo = 
      <div className="p-3">
        <Link to="/login">
          <i className="fas fa-sign-in-alt fa-2x"/>
        </Link>
      </div>;
  }
  
  return (
    <div>
      <div className="img-fluid d-flex justify-content-end m-0">
        <div className="p-3">
          <Link to="/carrito">
            <i className="fas fa-cart-plus fa-2x"/>
          </Link>
        </div>
        <div>
          {loginLogo}
        </div>
      </div>
      
      <div className="d-flex img-fluid mt-0 mb-3 justify-content-center">
      <img alt="logo" src={imagen} />
      </div>
    </div>
  );
};

export default Logo;
