import React,{ Fragment, useState } from 'react'
import FormContacto from './FormMensaje'
import Navbar from '../Elementos-Comunes/Navbar'
import Logo from '../Elementos-Comunes/Logo'
import Footer from '../Elementos-Comunes/Footer'

export default function Contacto() {

    const [consulta, setConsulta] = useState([])

    return (
        <Fragment>
            <Logo />
            <Navbar />
            <FormContacto consulta={consulta} setConsulta={setConsulta} />
            <Footer />
        </Fragment>
    )
}
