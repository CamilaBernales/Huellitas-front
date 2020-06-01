import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Carrito from './components/usuario/Tienda/Carrito';
import Tienda from './components/usuario/Tienda/Tienda';
import Home from './components/usuario/Home/Home';
import Login from './components/usuario/Registro-login/Login';
import Registro from './components/usuario/Registro-login/Registro';
import Equipo from './components/usuario/Equipo/Equipo';
import ModalProducto from './components/usuario/Tienda/ModalProducto';
import Turnosadmin from './components/administrador/Turnosadmin';
import Productosadmin from './components/administrador/Productosadmin';
import Turnos from './components/usuario/Turnos/Turnos';
import TurnoConsulta from './components/usuario/Turnos/TurnoConsulta';
import TurnoPeluqueria from './components/usuario/Turnos/TurnoPeluqueria';


function App() {

  return (
    <div className="App">
     <Router>
       <Switch>
        <Route exact path ="/" component={Home}/>
        <Route exact path ="/tienda" component={Tienda}/>
        <Route exact path ="/servicios"/>
        <Route exact path ="/contacto"/>
        <Route exact path ="/m" component={ModalProducto} />
        <Route exact path ="/equipo" component={Equipo} />
        <Route exact path ="/carrito" component={Carrito}/>
        <Route exact path ="/login" component={Login}/>
        <Route exact path ="/registro" component={Registro}/>
        <Route exact path ="/turnos" component={Turnos}/>
        <Route exact path ="/turnoConsulta" component={TurnoConsulta}/>
        <Route exact path ="/turnoPeluqueria" component={TurnoPeluqueria}/>

        {/* rutas admin */}
        <Route exact path ="/admin/productos" component={Productosadmin}/> 
        <Route exact path ="/admin/turnos" component={Turnosadmin}/>
       </Switch>
     </Router>
    </div>
  );
}

export default App;
