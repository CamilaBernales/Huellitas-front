import React, { useState, useEffect } from "react";
import { Route, Redirect } from "react-router-dom";
const RutaPrivada = ({ component: Component, ...props }) => {
  console.log(props);
  const [permisoValido, setPermisoValido] = useState(false);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const uservalidation = () => {
      if (props.respuesta.validToken === true) {
        setPermisoValido(true);
        setLoading(false);
      } else {
        setPermisoValido(false);
        setLoading(false);
      }
    };
    uservalidation();
    // eslint-disable-next-line 
  }, []);
  return loading ? (
    <p>Cargando...</p>
  ) : (
    <Route
      {...props}
      render={(routeProps) =>
       { console.log(routeProps);
         return !permisoValido ? <Redirect to="/login" /> : <Component {...routeProps} {...props} />}
      }
    />
  );
};
export default RutaPrivada;
