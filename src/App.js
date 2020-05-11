import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Header/Navbar'
import Logo from './components/Header/Logo'
function App() {
  return (
    <div className="App">
      <Logo/>
     <Navbar/>
    </div>
  );
}

export default App;
