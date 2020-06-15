import React, { useState, useEffect } from "react";
import { Route, Redirect } from "react-router-dom";
import tokenAuth from "../../../config/token";
import axiosConfig from "../../../config/axios";
const RutaPrivAdmin = ({ component: Component, ...props }) => {
  const [isAdmin, setIsAdmin] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const uservalidation = () => {
      const token = localStorage.getItem("token");
      if (token) {
        tokenAuth(token);
      }
      axiosConfig
        .get("/api/auth/uservalidation")
        .then((res) => {
          console.log(res);
          setIsAdmin(true);
          setLoading(false);
        })
        .catch((err) => {
          console.log(err.response);
          setIsAdmin(false);
          setLoading(false);
        });
    };
    uservalidation();
  }, []);
  return loading ? (
    <p>Cargando...</p>
  ) : (
    <Route
      {...props}
      render={(props) =>
        !isAdmin ? <Redirect to="/" /> : <Component {...props} />
      }
    />
  );
};
export default RutaPrivAdmin;
