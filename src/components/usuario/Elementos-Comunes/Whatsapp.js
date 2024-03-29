import React from "react";
import "../../../css/Whatsapp.css";
import { Col } from "react-bootstrap";
const Whatsapp = () => {
  return (
    <div className="float">
        <a
          href="https://api.whatsapp.com/send?phone=+5493815745912"
          target="_blank"
          rel="noopener noreferrer"
        >
            <Col md={4}>
              <i className="fab fa-whatsapp my-float ml-1"></i>{" "}
            </Col>
        </a>
    </div>
  );
};

export default Whatsapp;
