import React from "react";
import imagen from "../../imagen.png";
import { Link } from "react-router-dom";

const Logo = () => {
  return (
      <div>
      <div className="d-flex justify-content-end">
        <div className="p-4">
              <Link to="/carrito">
          <i className="fas fa-cart-plus fa-3x">
          </i>
              </Link>
        </div>
      <div className="p-4">
          <Link to="/">
        <i className="fas fa-users fa-3x"></i>
          </Link>
      </div>
      </div>
      <div className="mb-3">
        <img alt="logo" src={imagen} />
      </div>
    </div>
  );
};

export default Logo;
