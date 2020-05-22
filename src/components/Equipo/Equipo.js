import React,{Fragment} from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import Logo from "./Header/Logo";
import Navbar from "./Header/Navbar";

const Equipo = () => {
  let equipo = [
    {
      nombre: "Dra. Ines Gonzales",
      cargo: "Médica Veterinaria",
      informacion:
        "Egresada de la Universidad de Buenos Aires, especializada en clínica de pequeños animales.",
    },
    {
      nombre: "Dra. Beatriz Silva",
      cargo: "Médica Veterinaria",
      informacion:
        "Egresada de la Universidad de Tucumán, especializada en clínica y kinesiología de pequeños animales.",
    },
    {
      nombre: "Dra. Martina Hernandez",
      cargo: "Médica Veterinaria",
      informacion:
        "Egresado de la UNT, especializado en clínica de pequeños animales y en medicina felina, con 30 años de experiencia clínica y criador de felinos exóticos y persas",
    },
    {
      nombre: "Dr. Jose Jarazo",
      cargo: "Médico Veterinaria",
      informacion:
        " Egresado de la universidad del Salvador, especializado en clínica de pequeños animales y en cirugía de tejidos blandos traumatizados en el Royal Veterinary Collegue de la Universidad de Londres.",
    },
    {
      nombre: "Dr. Geronimo Bazan",
      cargo: "Médico Veterinario",
      informacion:
        "Veterinario egresado de la U.B.A en 1995 (22 años de experiencia). Se desempeña en áreas de cirugía, anestesiología y cardiología. Conferencista internacional.",
    },
    {
      nombre: "Mariana Montero",
      cargo: "Peluquera canina",
      informacion: "Le encantan todos los animales",
    },
    {
      nombre: "Josefina Cipriani",
      cargo: "Peluquera felina",
      informacion: "Fanatica de todos los animales",
    },
    {
      nombre: "Hernan Cipriani",
      cargo: "Atención al público",
      informacion: "Estudiante de Medicina Veterinaria en la UNT",
    },
    {
      nombre: "Martin Guardia",
      cargo: "Atención al público",
      informacion:
        "Encargado de mostrador y atención al publico, amante de las mascotas",
    },
  ];

  return (
    <Fragment>
        <Logo />
        <Navbar />
    <Container>
      <Row className=" col-12 m-auto">
        {equipo.map((persona) => (
            <Col sm={12} md={4} className="d-flex justify-content-center p-3 ">
            <Card style={{ width: '18rem', high:'18rem' }} className="text-center">
            <Card.Img variant="top" src="http://lorempixel.com/g/400/400/" />
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
