import React, { Fragment } from 'react';
import Logo from './Header/Logo';
import Navbar from './Header/Navbar';

export default function Home() {
  return (
    <Fragment>
      <Logo/>
      <Navbar/>
    </Fragment>
  );
}