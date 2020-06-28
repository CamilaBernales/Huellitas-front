import React, { Fragment } from "react";
import { Row, Col, Jumbotron } from "react-bootstrap";
import { Link } from "react-router-dom";
import "../../../css/Footer.css";

function Footer() {
  return (
    <Fragment>
      <Jumbotron className="footer">
        <Row className="d-flex justify-content-center">
          <Col sm={12} md={4} className="my-2">
            <h4 className="ml-3">Información</h4>
            <Col sm={12} md={4} className="my-2">
              <Link className="linkfooter" to="/contacto">
                Contacto
              </Link>
            </Col>
            <Col sm={12} md={4} className="my-2">
              <Link className="linkfooter" to="/equipo">
                Nuestro Equipo
              </Link>
            </Col>
          </Col>
          <Col sm={12} md={4} className="my-2">
            <h4 className="ml-3">Guias</h4>
            <Col sm={12} md={4} className="my-2">
              <Link className="linkfooter">Medios de Pago</Link>
            </Col>
            <Col sm={12} md={4} className="my-2">
              <Link className="linkfooter">Terminos y Condiciones de Uso</Link>
            </Col>
            <Col sm={12} md={4} className="my-2">
              <Link className="linkfooter">Sampling</Link>
            </Col>
          </Col>
          <Col sm={12} md={4} className="my-2">
            <h4 className="ml-3">Redes sociales</h4>
            <Link className="mx-2">
              <i className="fab fa-instagram fa-2x"></i>
            </Link>
            <Link className="mx-2">
              <i className="fab fa-facebook-square fa-2x"></i>
            </Link>
            <Link className="mx-2">
              <i className="fab fa-twitter-square fa-2x"></i>
            </Link>

            <Link
              target="_blank"
              href="mailto:camilabernales09@gmail.com?Subject=Aqui%20el%20asunto%20del%20mail"
              className="mx-2"
            >
              <i class="fab far fa-envelope fa-2x"></i>
            </Link>
          </Col>
        </Row>
        <hr />
        <Row className="d-flex justify-content-center align-self-center ">
          <h6>&copy; 2020 Huellitas. Todos los derechos reservados</h6>
        </Row>
      </Jumbotron>
    </Fragment>
  );
}

export default Footer;
