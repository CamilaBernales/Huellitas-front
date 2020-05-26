import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Carrito from './components/Tienda/Carrito';
import Tienda from './components/Tienda/Tienda';
import Home from './components/Home/Home';
import Login from './components/Elementos-Comunes/Login';
import Registro from './components/Registro/Registro';
import Equipo from './components//Equipo/Equipo';
import Turnosadmin from './components/Turnosadmin';

function App() {
  return (
    <div className="App">
     <Router>
       <Switch>
         <Route exact path ="/" component={Home}/>
         <Route exact path ="/tienda" component={Tienda}/>
         <Route exact path ="/servicios"/>
         <Route exact path ="/contacto"/>
         <Route exact path ="/equipo" component={Equipo} />
         <Route exact path ="/carrito" component={Carrito}/>
         <Route exact path ="/login" component={Login}/>
         <Route exact path ="/registro" component={Registro}/>
         <Route exact path ="/admin/turnos" component={Turnosadmin}/>
       </Switch>
     </Router>
    </div>
  );
}

export default App;
