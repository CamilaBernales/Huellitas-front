import React, { useState, useEffect } from "react";
import { Route, Redirect } from "react-router-dom";

const RutaPrivada = ({ component: Component, ...props }) => {
  const [isLogIn, setIsLogIn] = useState(localStorage.getItem("token") || "");

  const revisarSesion = () => {
    if (isLogIn === "") {
      setIsLogIn(false);
    } else {
      setIsLogIn(true);
    }
  };

  useEffect(() => {
    revisarSesion();
    //eslint-disable-next-line
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
