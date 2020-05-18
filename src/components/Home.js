import React, { Fragment } from 'react'
import {Container} from 'react-bootstrap'
import Slider from './Home/Slider'
import Promociones from './Home/Promociones'
import Logo from './Header/Logo';
import Navbar from './Header/Navbar';

export default function Home() {
    return (
        <Fragment>
            <Logo/>
            <Navbar/>
            <Slider/>
            <Promociones/>
        </Fragment>
    )
} 