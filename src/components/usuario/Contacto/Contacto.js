import React, { Fragment, useState } from "react";
import FormContacto from "./FormMensaje";

export default function Contacto() {
  const [consulta, setConsulta] = useState([]);

  return (
    <Fragment>
      <FormContacto
        id="contacto "
        consulta={consulta}
        setConsulta={setConsulta}
      />
      <iframe
        className="w-100"
        title="Casa central"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d113927.15309576441!2d-65.29263395675282!3d-26.832841656760422!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94223792d6c56903%3A0xf88d5b92b5c56527!2sSan%20Miguel%20de%20Tucum%C3%A1n%2C%20Tucum%C3%A1n!5e0!3m2!1ses!2sar!4v1593121999911!5m2!1ses!2sar"
        width="800"
        height="600"
        frameBorder="0"
        allowFullScreen=""
        aria-hidden="false"
        tabIndex="0"
      ></iframe>
    </Fragment>
  );
}
