import React from "react";
import "../../../css/Whatsapp.css";
import { Button, Row, Col } from "react-bootstrap";
const Whatsapp = () => {
  return (
    <div className="whatsapp">
      <Button md={4}  className="wpb text-black">
        <a
          href="https://api.whatsapp.com/send?phone=5199999999"
          target="_blank"
          rel="noopener noreferrer"
          className="text-dark"
        >
          <Row className="d-flex justify-content-center align-items-center m-0 m-auto ">
            <Col md={4}>
              <i className="fab fa-whatsapp fa-2x wpimg"></i>{" "}
            </Col>
            <Col md={8}>
              <p className="p-0 m-auto">Contactanos</p>
            </Col>
          </Row>
        </a>
      </Button>
    </div>
  );
};

export default Whatsapp;
