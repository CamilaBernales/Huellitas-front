import React, { Fragment } from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import Logo from "../Elementos-Comunes/Logo";
import Navbar from "../Elementos-Comunes/Navbar";


export let equipo = [
  {
    id: 1,
    nombre: "Dra. Ines Gonzales",
    cargo: "Médica Veterinaria",
    imagen: "images/doctora2.jpg",
    informacion:
      "Egresada de la Universidad de Buenos Aires, especializada en clínica de pequeños animales.",
  },
  {
    id: 2,
    nombre: "Dra. Beatriz Silva",
    cargo: "Médica Veterinaria",
    imagen: "images/doctora1.jpg",
    informacion:
      "Egresada de la Universidad de Tucumán, especializada en clínica y kinesiología de pequeños animales.",
  },
  {
    id: 3,
    nombre: "Dra. Martina Hernandez",
    cargo: "Médica Veterinaria",
    imagen: "images/doctora3.jpg",
    informacion:
      "Egresada de la UNT, especializa en clínica de pequeños animales y en medicina felina, con 30 años de experiencia clínica y criador de felinos exóticos y persas",
  },
  {
    id: 4,
    nombre: "Dr. José Jarazo",
    cargo: "Médico Veterinaria",
    imagen: "images/doctor3.jpg",
    informacion:
      " Egresado de la universidad del Salvador, especializado en clínica de pequeños animales y en cirugía de tejidos blandos traumatizados en el Royal Veterinary Collegue de la Universidad de Londres.",
  },
  {
    id: 5,
    nombre: "Dr. Gerónimo Bazán",
    cargo: "Médico Veterinario",
    imagen: "images/doctor2.jpg",
    informacion:
      "Veterinario egresado de la U.B.A en 1995 (22 años de experiencia). Se desempeña en áreas de cirugía, anestesiología y cardiología. Conferencista internacional.",
  },
  {
    id: 6,
    nombre: "Mariana Montero",
    cargo: "Peluquería",
    imagen: "images/equipo1.jpg",
    informacion: "Le encantan todos los animales",
  },
  {
    id: 7,
    nombre: "Josefina Cipriani",
    cargo: "Peluquería",
    imagen: "images/equipo4.jpg",
    informacion: "Fanatica de todos los animales",
  },
  {
    id: 8,
    nombre: "Hernán Cipriani",
    cargo: "Atención al público",
    imagen: "images/equipo3.jpg",
    informacion: "Estudiante de Medicina Veterinaria en la UNT",
  },
  {
    id: 9,
    nombre: "Martina Guardia",
    cargo: "Atención al público",
    imagen: "images/equipo2.jpg",
    informacion:
      "Encargada de mostrador y atención al publico, amante de las mascotas",
  },
];



const Equipo = () => {

  return (
    <Fragment>
      <Logo />
      <Navbar />
      <Container>
        <Row className=" col-12 m-auto">
          {equipo.map((persona) => (
            <Col sm={12} md={4} className="d-flex justify-content-center p-3 ">
              <Card
                style={{ width: "18rem", high: "18rem" }}
                className="text-center"
              >
                <Card.Img
                  alt="equipo de trabajo"
                  variant="top"
                  src={persona.imagen}
                />
                <Card.Body>
                  <Card.Title>{persona.nombre}</Card.Title>
                  <Card.Text>
                    <h4>{persona.cargo}</h4>
                    {persona.informacion}
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </Fragment>
  );
};

export default Equipo;
