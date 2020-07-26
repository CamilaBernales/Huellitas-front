import React, { Fragment } from "react";
import Cards from "react-credit-cards";
import { Form, Row, Col } from "react-bootstrap";
import "react-credit-cards/es/styles-compiled.css";
// import './mercadoPagoIntegracion'
class PaymentForm extends React.Component {
  handleInputFocus = (e) => {
    this.props.setDatosTarjeta({
      ...this.props.datosTarjeta,
      focus: e.target.name,
    });
  };

  handleInputChange = (e) => {
    const { name, value } = e.target;
    this.props.setDatosTarjeta({
      ...this.props.datosTarjeta,
      [name]: value,
    });
  };

  render() {
    const { installmentRef, formRef, suma, datosTarjeta } = this.props;

    return (
      <Fragment>
        <Cards
          cvc={datosTarjeta.cvc}
          expiry={datosTarjeta.month + datosTarjeta.expiry}
          focused={datosTarjeta.focus}
          name={datosTarjeta.name}
          number={datosTarjeta.number}
        />
        <Form ref={formRef} id="pay" name="pay">
          <Row>
            <input
              readOnly
              className="d-none"
              name="transaction_amount"
              id="transaction_amount"
              value={suma}
            ></input>
            <input
              readOnly
              className="d-none"
              value="DNI"
              id="docType"
              data-checkout="docType"
            ></input>
            <Col>
              <Form.Control
                className="m-3"
                type="text"
                name="dni"
                maxLength="8"
                placeholder="D.N.I"
                onChange={this.handleInputChange}
                onFocus={this.handleInputFocus}
                id="docNumber"
                data-checkout="docNumber"
              />
            </Col>
          </Row>

          <Row>
            <Col>
              <Form.Control
                maxLength="16"
                className="m-3"
                type="tel"
                name="number"
                placeholder="Número de Tarjeta"
                onChange={this.handleInputChange}
                onFocus={this.handleInputFocus}
                data-checkout="cardNumber"
                id="cardNumber"
              />
            </Col>
          </Row>
          <Row>
            <Col>
              <Form.Control
                className="m-3"
                type="text"
                name="name"
                maxLength="25"
                placeholder="Nombre"
                onChange={this.handleInputChange}
                onFocus={this.handleInputFocus}
                id="cardholderName"
                data-checkout="cardholderName"
              />
            </Col>
          </Row>
          <Row>
            <Col>
              <Form.Control
                className="m-3"
                type="tel"
                name="month"
                maxLength="2"
                placeholder="Vencimiento mes"
                onChange={this.handleInputChange}
                onFocus={this.handleInputFocus}
                data-checkout="cardExpirationMonth"
                id="cardExpirationMonth"
              />
            </Col>
            <Col>
              <Form.Control
                className="m-3"
                type="tel"
                name="expiry"
                maxLength="2"
                placeholder="Vencimiento año"
                onChange={this.handleInputChange}
                onFocus={this.handleInputFocus}
                data-checkout="cardExpirationYear"
                id="cardExpirationYear"
              />
            </Col>
            <Col>
              <Form.Control
                className="m-3"
                type="tel"
                name="cvc"
                minLength="3"
                maxLength="4"
                placeholder="CVC"
                onChange={this.handleInputChange}
                onFocus={this.handleInputFocus}
                id="securityCode"
                data-checkout="securityCode"
              />
            </Col>
          </Row>
          <Row>
            <Col>
              <Form.Control
                className="m-3"
                placeholder="cuotas"
                onChange={this.handleInputChange}
                onFocus={this.handleInputFocus}
                as="select"
                id="installments"
                name="installments"
                defaultValue={datosTarjeta.installments}
                ref={installmentRef}
              />
            </Col>
          </Row>
        </Form>
      </Fragment>
    );
  }
}

export default PaymentForm;
