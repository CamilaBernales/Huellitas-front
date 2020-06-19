import React, { useState, useEffect } from "react";
import { Route, Redirect } from "react-router-dom";
const RutaPrivAdmin = ({ component: Component, ...props }) => {
  const [permisoValido, setPermisoValido] = useState(false);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const uservalidation = () => {
      if (
        props.respuesta.validToken === true &&
        props.respuesta.isAdmin === true
      ) {
        setPermisoValido(true);
        setLoading(false);
      } else {
        setPermisoValido(false);
        setLoading(false);
      }
    };
    uservalidation();
  }, []);
  return loading ? (
    <p>Cargando...</p>
  ) : (
    <Route
      {...props}
      render={(props) =>
        !permisoValido ? <Redirect to="/" /> : <Component {...props} />
      }
    />
  );
};
export default RutaPrivAdmin;
