import React from 'react'
import { Container } from 'react-bootstrap'
import Slider from './Home/Slider'
import Promociones from './Home/Promociones'

export default function Home() {
    return (
        <Container>
            <Slider/>
            <Promociones/>
        </Container>
    )
}
