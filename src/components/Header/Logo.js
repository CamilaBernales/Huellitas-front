import React from "react";
import imagen from "../../imagen.png";
import { Link } from "react-router-dom";

const Logo = () => {
  
  return (
    <div>
      <div className="d-flex justify-content-end">
        <div className="p-4">
          <Link to="/carrito">
            <i className="fas fa-cart-plus fa-3x"/>
          </Link>
        </div>
        <div className="p-4">
          <Link to="/Login">
            <i className="fas fa-sign-in-alt fa-3x"/>
          </Link>
        </div>
      </div>
      <div className="mb-3">
        <img alt="logo" src={imagen}/>
      </div>
    </div>
  );
};

export default Logo;
