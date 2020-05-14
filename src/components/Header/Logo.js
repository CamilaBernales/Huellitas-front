import React from "react";
import imagen from "../../imagen.png";
import { Link } from "react-router-dom";

const Logo = () => {
  return (
    <div>
      <div className="d-flex justify-content-end m-0">
        <div className="p-3">
          <Link to="/carrito">
            <i class="fas fa-cart-plus fa-2x"></i>
          </Link>
        </div>
        <div className="p-3">
          <Link to="/">
            <i class="fas fa-users fa-2x"></i>
          </Link>
        </div>
      </div>
      <div className="d-flex mt-0 mb-3 justify-content-center">
        <img alt="logo" src={imagen} />
      </div>
    </div>
  );
};

export default Logo;
