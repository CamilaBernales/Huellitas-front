import React from "react";
import "../../../css/Whatsapp.css";
import { Col } from "react-bootstrap";
const Whatsapp = () => {
  return (
    <div className="float">
        <a
          href="https://api.whatsapp.com/send?phone=5199999999"
          target="_blank"
          rel="noopener noreferrer"
        >
            <Col md={4}>
              <i className="fab fa-whatsapp my-float"></i>{" "}
            </Col>
        </a>
    </div>
  );
};

export default Whatsapp;
