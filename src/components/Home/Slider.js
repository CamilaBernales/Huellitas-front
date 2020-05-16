import React from 'react'
import {Container, Carousel} from 'react-bootstrap'

export default function Slider() {
    return (
        <Container className="mt-3 mb-5">
            <Carousel>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="http://lorempixel.com/800/400/animals/2?text=First slide&bg=373940"
                        alt="First slide"/>
                    <Carousel.Caption>
                        <h3>First slide label</h3>
                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="http://lorempixel.com/800/400/animals/?text=Second slide&bg=282c34"
                        alt="Third slide"/>

                    <Carousel.Caption>
                        <h3>Second slide label</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="http://lorempixel.com/800/400/animals/1?text=Third slide&bg=20232a"
                        alt="Third slide"/>

                    <Carousel.Caption>
                        <h3>Third slide label</h3>
                        <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </Container>
    )
}
