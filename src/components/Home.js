import React, { Fragment } from 'react';
import Logo from './Header/Logo';
import Navbar from './Header/Navbar';
import Slider from './Home/Slider'
import Promociones from './Home/Promociones'
import Footer from './Footer'
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
        <Promociones/>
      </Container>
      <Footer/>
    </Fragment>
  );
}
