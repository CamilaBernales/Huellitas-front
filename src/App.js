import React, { useEffect, useState } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "./css/Producto.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import RutaPrivada from "./components/usuario/RutaPrivada/RutaPrivada";
import RutaPrivAdmin from "./components/administrador/RutaPrivada/RutaPrivAdmin";
import Carrito from "./components/usuario/Tienda/Carrito";
import Tienda from "./components/usuario/Tienda/Tienda";
import Home from "./components/usuario/Home/Home";
import Contacto from "./components/usuario/Contacto/Contacto";
import ListadoMensajes from "./components/administrador/Mensajes/ListadoMensajes";
import Login from "./components/usuario/Registro-login/Login";
import Registro from "./components/usuario/Registro-login/Registro";
import Equipo from "./components/usuario/Equipo/Equipo";
import ModalProducto from "./components/usuario/Tienda/ModalProducto";
import Turnosadmin from "./components/administrador/Turnosadmin";
import ListadoProductos from "./components/administrador/Productos/ListadoProductos";
import FormProductos from "./components/administrador/Productos/FormProductos";
import Turnos from "./components/usuario/Turnos/Turnos";
import MisTurnos from "./components/usuario/Turnos/MisTurnos";
import Turno from "./components/usuario/Turnos/Turno";
import PedidosAdmin from "./components/administrador/pedidos/PedidosAdmin";
import ListadoUsuarios from "./components/administrador/Usuarios/ListadoUsuarios";
import PerfilUsuario from "./components/usuario/Elementos-Comunes/PerfilUsuario";
import axiosConfig from "./config/axios";
import tokenAuth from "./config/token";
import Footer from "./components/usuario/Elementos-Comunes/Footer";
function App() {
  const [loading, setLoading] = useState(true);
  const [respuesta, setRespuesta] = useState({});
  useEffect(() => {
    const uservalidation = async () => {
      const token = localStorage.getItem("token");
      if (token) {
        tokenAuth(token);
        try {
          let res = await axiosConfig.get("/api/auth/uservalidation");
          // console.log(res.data);
          setRespuesta(res.data);
        } catch (err) {
          // console.log(err.response.data);
        }
      }
      setLoading(false);
    };
    uservalidation();
  }, []);
  return (
    <div className="App">
      <Router>
        {!loading ? (
          <Switch>
            <RutaPrivAdmin
              exact
              path="/admin/turnos"
              respuesta={respuesta}
              component={Turnosadmin}
            />
            <RutaPrivAdmin
              exact
              path="/admin/pedidos"
              component={PedidosAdmin}
              respuesta={respuesta}
            />
            <RutaPrivAdmin
              exact
              path="/admin/productos"
              component={ListadoProductos}
              respuesta={respuesta}
            />
            <RutaPrivAdmin
              exact
              path="/admin/altaproducto"
              component={FormProductos}
              respuesta={respuesta}
            />
            <RutaPrivAdmin
              exact
              path="/admin/listadousuarios"
              component={ListadoUsuarios}
              respuesta={respuesta}
            />
            <RutaPrivAdmin
              exact
              path="/admin/listadomensajes"
              component={ListadoMensajes}
              respuesta={respuesta}
            />
            <RutaPrivada
              exact
              path="/turno"
              component={Turno}
              respuesta={respuesta}
            />
            <RutaPrivada
              exact
              path="/carrito"
              component={Carrito}
              respuesta={respuesta}
            />
            <RutaPrivada
              exact
              path="/misturnos"
              component={MisTurnos}
              respuesta={respuesta}
            />
            <RutaPrivada
              exact
              path="/perfilusuario"
              component={PerfilUsuario}
              respuesta={respuesta}
            />
            <Route exact path="/" component={Home} />
            <Route exact path="/tienda" component={Tienda} />
            <Route exact path="/servicios" />
            <Route exact path="/m" component={ModalProducto} />
            <Route exact path="/equipo" component={Equipo} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/registro" component={Registro} />
            <Route exact path="/turnos" component={Turnos} />
            <Route exact path="/perfilusuario" component={PerfilUsuario} />
          </Switch>
        ) : (
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/tienda" component={Tienda} />
            <Route exact path="/servicios" />
            <Route exact path="/m" component={ModalProducto} />
            <Route exact path="/equipo" component={Equipo} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/registro" component={Registro} />
            <Route exact path="/turnos" component={Turnos} />
          </Switch>
        )}
        <Footer />
      </Router>
    </div>
  );
}

export default App;
