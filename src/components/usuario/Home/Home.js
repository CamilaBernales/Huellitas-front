import React, { Fragment } from 'react';
import Logo from '../Elementos-Comunes/Logo';
import Navbar from '../Elementos-Comunes/Navbar';
import Slider from './Slider'
import Promociones from './Promociones'
import Servicio from './Servicios'
import Footer from '../Elementos-Comunes/Footer'
import {Container} from 'react-bootstrap'

export default function Home() {
  return (
    <Fragment>
      <Logo/>
      <Navbar/>
      <div className="m-auto">
        <Slider/>
      </div>
      <Container>
        <Servicio/>
        <Promociones/>
      </Container>
      <Footer/>
    </Fragment>
  );
}
