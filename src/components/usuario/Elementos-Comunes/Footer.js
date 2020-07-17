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
              <Link className="linkfooter" to="#">
                Medios de Pago
              </Link>
            </Col>
            <Col sm={12} md={4} className="my-2">
              <Link className="linkfooter" to="#">
                Terminos y Condiciones de Uso
              </Link>
            </Col>
            <Col sm={12} md={4} className="my-2">
              <Link className="linkfooter" to="#">
                Sampling
              </Link>
            </Col>
          </Col>
          <Col sm={12} md={4} className="my-2">
            <h4 className="ml-3">Redes sociales</h4>
            <Link className="mx-2" to="wwww.instagram.com">
              <i className="fab fa-instagram fa-2x"></i>
            </Link>
            <Link className="mx-2" to="wwww.facebook.com">
              <i className="fab fa-facebook-square fa-2x"></i>
            </Link>
            <Link target="_blank"className="mx-2" to="http://wwww.twitter.com">
              <i className="fab fa-twitter-square fa-2x"></i>
            </Link>
            <a
              href={"mailto:Huellitas@example.com"}
              className="mx-2"
            >
              <i className="fab far fa-envelope fa-2x"></i>
            </a>
          </Col>
        </Row>
        <hr />
        <Row className="d-flex justify-content-left ml-2">
          <h6>&copy; 2020 Huellitas. Todos los derechos reservados</h6>
        </Row>
      </Jumbotron>
    </Fragment>
  );
}

export default Footer;
