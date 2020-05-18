import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Carrito from './components/Carrito';
import Tienda from './components/Tienda';
import Home from './components/Home';
<<<<<<< HEAD
=======
import Login from './components/Header/Login';
>>>>>>> 757085ae0d8695b0f6387caf6eb7d5ad24a976eb


function App() {
  return (
    <div className="App">
     <Router>
       <Switch>
         <Route exact path ="/" component={Home}/>
         <Route exact path ="/tienda" component={Tienda}/>
         <Route exact path ="/servicios"/>
         <Route exact path ="/contacto"/>
         <Route exact path ="/equipo"/>
         <Route exact path ="/carrito" component={Carrito}/>
         <Route exact path ="/Login" component={Login}/>
       </Switch>
     </Router>
    </div>
  );
}

export default App;
