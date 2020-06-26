import React, { Fragment } from "react";
import Logo from "../Elementos-Comunes/Logo";
import Navbar from "../Elementos-Comunes/Navbar";
import Slider from "./Slider";
import Servicio from "./Servicios";
import Contacto from '../../usuario/Contacto/Contacto'
import Footer from "../Elementos-Comunes/Footer";

export default function Home() {
  return (
    <Fragment>
      <Logo />
      <Navbar />
      <div className="m-auto">
        <Slider />
      </div>
      <Servicio />
      <Contacto/>
      <Footer />
    </Fragment>
  );
}
