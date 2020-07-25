import React, { Fragment } from 'react';
import Cards from 'react-credit-cards';
import { Form, Row, Col } from 'react-bootstrap';
import 'react-credit-cards/es/styles-compiled.css';

class PaymentForm extends React.Component {

  handleInputFocus = (e) => {
    this.props.setDatosTarjeta({ 
      ...this.props.datosTarjeta,
      focus: e.target.name });
  }
  
  handleInputChange = (e) => {
    const { name, value } = e.target;
    this.props.setDatosTarjeta({ 
      ...this.props.datosTarjeta,
      [name]: value });
  }
  
  render() {
    
    return (
      <Fragment>
        <Cards
          cvc={this.props.datosTarjeta.cvc}
          expiry={this.props.datosTarjeta.expiry}
          focused={this.props.datosTarjeta.focus}
          name={this.props.datosTarjeta.name}
          number={this.props.datosTarjeta.number}
        />
        <Form>
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
              />
            </Col>
          </Row>
          <Row>
            <Col>
              <Form.Control
                className="m-3"
                type="tel"
                name="expiry"
                maxLength="4"
                placeholder="Vencimiento"
                onChange={this.handleInputChange}
                onFocus={this.handleInputFocus}
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
              />
            </Col>
          </Row>
        </Form>
      </Fragment>
    );
  }
}

export default PaymentForm;