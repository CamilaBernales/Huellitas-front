import React from "react";
import imagen from "../../imagen.png";
import { Link } from "react-router-dom";

const Logo = () => {

  return (
    <div>
      <div className=" img-fluid 
      d-flex justify-content-end m-0">
        <div className="p-3">
          <Link to="/carrito">
            <i className="fas fa-cart-plus fa-2x"></i>
          </Link>
        </div>
        <div className="p-3">
          <Link to="/login">
            <i className="fas fa-users fa-2x"></i>
          </Link>
        </div>
      </div>
      <div className="d-flex img-fluid mt-0 mb-3 justify-content-center">
        <img alt="logo" src={imagen} />
      </div>
    </div>
  );
};

export default Logo;
