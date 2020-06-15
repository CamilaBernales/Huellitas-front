import React, { useState, useEffect } from "react";
import { Route, Redirect } from "react-router-dom";

const RutaPrivada = ({ component: Component, ...props }) => {
  const [isLogIn, setIsLogIn] = useState(false);

  useEffect(() => {
    const revisarSesion = () => {
      const token = localStorage.getItem("token") || "";
      if (token === "") {
        setIsLogIn(false);
      } else {
        setIsLogIn(true);
      }
    };
    revisarSesion();
  }, []);

  return (
    <Route
      {...props}
      render={(props) =>
        !isLogIn ? <Redirect to="/login" /> : <Component {...props} />
      }
    />
  );
};

export default RutaPrivada;
