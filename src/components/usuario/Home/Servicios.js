import React, { Fragment } from "react";
import { Container, Button, Col, Row } from "react-bootstrap";
import "../../../css/Servicios.css";
import { Link } from "react-router-dom";

const Servicio = () => {
  return (
    <Fragment>
      <Container className="my-5 py-3">
        <Row className="d-flex justify-content-around align-items-center">
          <div className="cardServicios">
            <Col>
              <div className="info">
                <span className="icon">
                  <i className="my-3 fas fa-star fa-2x justify-content-center"></i>
                </span>
                <h4 className="font-weight-bold">15 años de experiencia</h4>
                <p>
                  HUELLITAS te ofrece uno de los mejores servicios de la zona,
                  con una gran relación calidad-precio, lo que nos convierte en
                  uno de los referentes más competitivos del mercado.
                </p>
              </div>
            </Col>
          </div>
          <div className="cardServicios">
            <Col>
              <div className="info">
                <span className="icon">
                  <i className="my-3 fas fa-heart fa-2x justify-content-center"></i>
                </span>
                <h4 className="font-weight-bold">Servicios Veterinarios</h4>
                <p>
                  {" "}
                  HUELLITAS cuenta con una gran variedad de servicios médicos
                  veterinarios de la mejor calidad que garantizan así el
                  completo bienestar de tu mascota.
                </p>
              </div>
            </Col>
          </div>
          <div className="cardServicios">
            <Col>
              <div className="info">
                <span className="icon">
                  <i className="my-3 fas fa-user-md fa-2x justify-content-center"></i>
                </span>
                <h4 className="font-weight-bold">Personal Cualificado</h4>
                <p>
                  Nuestro centro está apoyado en un personal altamente
                  cualificado, ético comprometido con la excelencia en la
                  calidad del servicio y una inmejorable atención personal.
                </p>
              </div>
            </Col>
          </div>
        </Row>

        <Row className="d-flex justify-content-around align-items-center">
          <div className="cardServicios">
            <Col>
              <div className="info">
                <span className="icon">
                  <i className="fas fa-shopping-cart fa-2x my-3 justify-content-center"></i>
                </span>
                <h4 className="font-weight-bold">Tienda Especializada</h4>
                <p>
                  Disponemos de una amplia variedad de artículos, alimentos,
                  medicinas y otros implementos necesarios para el cuidado de tu
                  mascota
                </p>
              </div>
            </Col>
          </div>
          <div className="cardServicios">
            <Col>
              <div className="info">
                <span className="icon">
                  <i className="fas my-3 fa-shower fa-2x d-flex justify-content-center bg-gradient-warning"></i>
                </span>
                <h4 className="font-weight-bold">Peluquería</h4>
                <p>
                  Ademas ofrecemos Servicios para el cuidado, aseo y incluso
                  para darle un nuevo Look a tu mascota.
                </p>
              </div>
            </Col>
          </div>
          <div className="cardServicios">
            <div className="info">
              <span className="icon">
                <i className="my-3 far fa-clock fa-2x d-flex justify-content-center bg-gradient-warning"></i>
              </span>
              <h4 className="font-weight-bold">24hs</h4>
              <p>
                Todos los días, entre las 9 y las 21 hs. funcionan la
                atención y los consultorios de manera habitual. A partir de las
               21 hs., y durante toda la noche, tenemos Servicio de
                Guardia.
              </p>
            </div>
          </div>
        </Row>
      </Container>

      {/* <div className="m-4 servicios">
        <Row className="d-flex justify-content-around align-items-center">
          <Col>
            <i class="fas fa-7x fa-ambulance img-fluid  d-flex justify-content-center"></i>
          </Col>
          <Col>
            <p>Atención las 24h</p>
          </Col>
        </Row>
        <Row className="d-flex justify-content-around align-items-center">
          <Col>
            <p>Recibimos todas las formas de pago</p>
          </Col>
          <Col>
            <img
              src={formaspago}
              alt="tarjetas de crédito"
              className="img-fluid"
  
              />
          </Col>
        </Row>
      </div> */}
    </Fragment>
  );
};

export default Servicio;
