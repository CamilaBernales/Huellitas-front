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
import ListadoMensajes from "./components/administrador/Mensajes/ListadoMensajes";
import Login from "./components/usuario/Registro-login/Login";
import Registro from "./components/usuario/Registro-login/Registro";
import Equipo from "./components/usuario/Equipo/Equipo";
import ModalProducto from "./components/usuario/Tienda/ModalProducto";
import Turnosadmin from "./components/administrador/Turnosadmin";
import ListadoProductos from "./components/administrador/Productos/ListadoProductos";
import FormProductos from "./components/administrador/Productos/FormProductos";
import MisTurnos from "./components/usuario/Turnos/MisTurnos";
import Turno from "./components/usuario/Turnos/Turno";
import PedidosAdmin from "./components/administrador/pedidos/PedidosAdmin";
import ListadoUsuarios from "./components/administrador/Usuarios/ListadoUsuarios";
import PerfilUsuario from "./components/usuario/Elementos-Comunes/PerfilUsuario";
import axiosConfig from "./config/axios";
import tokenAuth from "./config/token";
import Navbar from "./components/usuario/Elementos-Comunes/Navbar";
// import Footer from "./components/usuario/Elementos-Comunes/Footer";
import Whatsapp from "./components/usuario/Elementos-Comunes/Whatsapp";
import MisCompras from "./components/usuario/MisCompras/MisCompras";
import CambioContraseña from "./components/usuario/Registro-login/CambioContraseña";
import RestablecerContraseña from "./components/usuario/Registro-login/RestablecerContraseña";
function App() {
  const [loading, setLoading] = useState(true);
  const [respuesta, setRespuesta] = useState({});
  const [comprasGuardadas, setComprasGuardadas] = useState(0);
  useEffect(() => {
    const uservalidation = async () => {
      const token = localStorage.getItem("token");
      if (token) {
        tokenAuth(token);
        try {
          let res = await axiosConfig.get("/api/auth/uservalidation");
          setRespuesta(res.data);
        } catch (err) {
          console.log(err)
        }
      }
      setLoading(false);
    };
    uservalidation();
    let compras = JSON.parse(localStorage.getItem("compras"));
    if (compras !== null) {
      setComprasGuardadas(compras.length);
    }
  }, []);
  return (
    <div className="App">
      <Router>
        {/* <ImagenHome /> */}
        <Navbar
          setComprasGuardadas={setComprasGuardadas}
          comprasGuardadas={comprasGuardadas}
          respuesta={respuesta}
        />
        <Whatsapp />
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
              setComprasGuardadas={setComprasGuardadas}
              comprasGuardadas={comprasGuardadas}
              respuesta={respuesta}
            />
            <RutaPrivada
              exact
              path="/miscompras"
              component={MisCompras}
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
            <Route
              exact
              path="/tienda"
              render={(props) => (
                <Tienda {...props} setComprasGuardadas={setComprasGuardadas} />
              )}
            />
            <Route
              exact
              path="/resettingpassword/:id"
              component={RestablecerContraseña}
            />
            <Route exact path="/servicios" />
            <Route exact path="/m" component={ModalProducto} />
            <Route exact path="/equipo" component={Equipo} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/registro" component={Registro} />
            <Route exact path="/resetpassword" component={CambioContraseña} />
            <Route exact path="/perfilusuario" component={PerfilUsuario} />
          </Switch>
        ) : (
          <Switch>
            <Route exact path="/" component={Home} />
            <Route
              exact
              path="/tienda"
              render={(props) => (
                <Tienda {...props} setComprasGuardadas={setComprasGuardadas} />
              )}
            />
            <Route
              exact
              path="/resettingpassword/:id"
              component={RestablecerContraseña}
            />

            <Route exact path="/servicios" />
            <Route exact path="/m" component={ModalProducto} />
            <Route exact path="/equipo" component={Equipo} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/registro" component={Registro} />
            <Route exact path="/resetpassword" component={CambioContraseña} />
          </Switch>
        )}
        {/* <Footer /> */}
      </Router>
    </div>
  );
}

export default App;
