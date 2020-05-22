import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from './components/Footer'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Carrito from './components/Carrito';
import Tienda from './components/Tienda';
import Home from './components/Home';
import Login from './components/Login';
import Registro from './components/Registro';
import Equipo from './components/Equipo';

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
       </Switch>
       <Footer/>
     </Router>
    </div>
  );
}

export default App;
