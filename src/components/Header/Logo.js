import React from "react";
import imagen from "../../imagen.png";

const Logo = () => {
  return (
    <div>
      <div className="d-flex justify-content-end">
        <div className="p-4">
          <i class="fas fa-cart-plus fa-3x"></i>
        </div>
      <div className="p-4">
        <i class="fas fa-users fa-3x"></i>
      </div>
      </div>
      <div className="mb-3">
        <img alt="logo" src={imagen} />
      </div>
    </div>
  );
};

export default Logo;
