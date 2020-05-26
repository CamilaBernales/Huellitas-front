import React, { Fragment } from "react";
import { Container, Button, Col, Row } from "react-bootstrap";
<<<<<<< HEAD:src/components/Home/Servicios.js
import GatoHome from "../../img/gatoHome.svg";
import formaspago from "../../img/formaspago.png";
import styles from "../../css/Servicios.module.css";
=======
import GatoHome from "../../../img/gatoHome.svg";
import formaspago from "../../../img/formaspago.png";
import styles from "../../../css/Servicios.module.css";
>>>>>>> ce6fc7eaf4963fe153fc39b34a2d55301b8da79b:src/components/usuario/Home/Servicios.js
import { Link } from "react-router-dom";

const Servicio = () => {
  return (
    <Fragment>
      <Container className="my-4 py-4">
        <Row className="d-flex justify-content-center">
          <Col className="m-3 p-3">
            <div className={styles.info}>
              <span className={styles.icon}>
                <i className="fas fa-star fa-3x d-flex justify-content-center"></i>
              </span>
              <h4 className=" text-warning font-weight-bold my-3">
                15 años de experiencia
              </h4>
              <p>
                HUELLITAS te ofrece uno de los mejores servicios de la zona, con
                una gran relación calidad-precio, lo que nos convierte en uno de
                los referentes más competitivos del mercado.
              </p>
            </div>
          </Col>
          <Col className="m-3 p-3">
            <div className={styles.info}>
              <span className={styles.icon}>
                <i className="fas fa-heart fa-3x  d-flex justify-content-center"></i>
              </span>
              <h4 className="text-warning font-weight-bold my-3">
                Servicios Veterinarios
              </h4>
              <p>
                {" "}
                HUELLITAS cuenta con una gran variedad de servicios médicos
                veterinarios de la mejor calidad que garantizan así el completo
                bienestar de tu mascota.
              </p>
            </div>
          </Col>
          <Col className="m-3 p-3">
            <div className={styles.info}>
              <span className={styles.icon}>
                <i className="fas fa-user-md fa-3x  d-flex justify-content-center"></i>
              </span>
              <h4 className="text-warning font-weight-bold my-3">
                Personal Cualificado
              </h4>
              <p>
                Nuestro centro está apoyado en un personal altamente
                cualificado, ético comprometido con la excelencia en la calidad
                del servicio y una inmejorable atención personal.
              </p>
            </div>
          </Col>
        </Row>

        <Row>
          <Col className="m-3 p-3">
            <div className={styles.info}>
              <span className={styles.icon}>
                <i className="fas fa-shopping-cart fa-3x  d-flex justify-content-center"></i>
              </span>
              <h4 className="text-warning font-weight-bold my-3">
                Tienda Especializada
              </h4>
              <p>
                Disponemos de una amplia variedad de artículos, alimentos,
                medicinas y otros implementos necesarios para el cuidado de tu
                mascota
              </p>
            </div>
          </Col>
          <Col className="m-3 p-3">
            <div className={styles.info}>
              <span className={styles.icon}>
                <i className="fas fa-shower fa-3x d-flex justify-content-center bg-gradient-warning"></i>
              </span>
              <h4 className=" text-warning font-weight-bold my-3">
                Peluquería
              </h4>
              <p>
                Ademas ofrecemos Servicios para el cuidado, aseo y incluso para
                darle un nuevo Look a tu mascota.
              </p>
            </div>
          </Col>
          <Col className="m-3 p-3">
            <div className=" d-flex justify-content-center">
              <div className="img-fluid ">
                <img
                  className={styles.imagen}
                  src={GatoHome}
                  alt="imagen de gato "
                />
              </div>
            </div>
            <div className=" my-3 d-flex justify-content-center">
              <Button variant="light" className={styles.info}>
                <Link className="text-secondary" to="/turnos">
                  Quiero un turno!
                </Link>
              </Button>
            </div>
          </Col>
        </Row>
      </Container>
      <div className="m-4 ">
        <div className={styles.equipo}>
          <div className="text-center my-5">
            <h4>
              HUELLITAS BRINDA UN EQUIPO HUMANO ALTAMENTE CUALIFICADO PARA
              OFRECER EL MAS ALTO BIENESTAR A SUS PACIENTES
            </h4>
            <Button className="mt-3" variant="light">
              <Link className="text-secondary" to="/equipo">
                Conocenos!
              </Link>
            </Button>
          </div>
        </div>
      </div>

      <Container className="m-4 p-5">
        <div className={styles.servicios}>
          <Row>
            <Col className="d-flex justify-content-center align-items-center">
              <h3>Recibimos todas las formas de pago</h3>
            </Col>
            <Col>
              <img
                src={formaspago}
                alt="tarjetas de crédito"
                className="img-fluid"
              />
            </Col>
          </Row>
        </div>
      </Container>
    </Fragment>
  );
};

export default Servicio;
