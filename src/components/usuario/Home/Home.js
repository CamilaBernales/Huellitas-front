import React, { Fragment } from "react";
import Slider from "./Slider";
import Servicio from "./Servicios";
import Contacto from '../../usuario/Contacto/Contacto'

export default function Home() {
  return (
    <Fragment >
      <div className="m-auto">
        <Slider />
      </div>
      <Servicio />
      <Contacto/>
    </Fragment>
  );
}
