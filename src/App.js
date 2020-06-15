import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./css/Producto.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import RutaPrivada from "./components/usuario/RutaPrivada/RutaPrivada";
import RutaPrivAdmin from "./components/administrador/RutaPrivada/RutaPrivAdmin";
import Carrito from "./components/usuario/Tienda/Carrito";
import Tienda from "./components/usuario/Tienda/Tienda";
import Home from "./components/usuario/Home/Home";
import Login from "./components/usuario/Registro-login/Login";
import Registro from "./components/usuario/Registro-login/Registro";
import Equipo from "./components/usuario/Equipo/Equipo";
import ModalProducto from "./components/usuario/Tienda/ModalProducto";
import Turnosadmin from "./components/administrador/Turnosadmin";
import Productosadmin from "./components/administrador/Productosadmin";
import Turnos from "./components/usuario/Turnos/Turnos";
import Turno from "./components/usuario/Turnos/Turno";
import PedidosAdmin from "./components/administrador/pedidos/PedidosAdmin";
function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          {/* Rutas privadas */}
          <RutaPrivada exact path="/turno" component={Turno} />
          <RutaPrivada exact path="/carrito" component={Carrito} />
          {/* no privadas */}
          <Route exact path="/" component={Home} />
          <Route exact path="/tienda" component={Tienda} />
          <Route exact path="/servicios" />
          <Route exact path="/contacto" />
          <Route exact path="/m" component={ModalProducto} />
          <Route exact path="/equipo" component={Equipo} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/registro" component={Registro} />
          <Route exact path="/turnos" component={Turnos} />
          {/* rutas privadas admin */}

          <RutaPrivAdmin exact path="/admin/turnos" component={Turnosadmin} />
          <RutaPrivAdmin exact path="/admin/pedidos" component={PedidosAdmin} />
          <RutaPrivAdmin
            exact
            path="/admin/productos"
            component={Productosadmin}
          />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
