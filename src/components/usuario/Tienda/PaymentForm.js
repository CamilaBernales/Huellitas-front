import React, { Fragment } from 'react';
import Cards from 'react-credit-cards';
import { Form } from 'react-bootstrap';
import 'react-credit-cards/es/styles-compiled.css';

export default class PaymentForm extends React.Component {
  constructor(props) {
    super(props);
    this.handleInputFocus = this.handleInputFocus.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleInputFocus = (e) => {
    
    this.props.handleInputFocus(e.target.name);
  }
  
  handleInputChange = (e) => {
    
    this.props.handleInputChange({[e.target.name]: e.target.vale});
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
        	<Form.Control
            maxLength="16"
            className="m-3"
            type="tel"
            name="number"
            placeholder="Número de Tarjeta"
            
            onChange={this.handleInputChange}
            onFocus={this.handleInputFocus}
          />
          <Form.Control
            className="m-3"
            type="text"
            name="name"
            maxLength="25"
            placeholder="Nombre"
            
            onChange={this.handleInputChange}
            onFocus={this.handleInputFocus}
          />
          <Form.Control
            className="m-3"
            type="tel"
            name="expiry"
            maxLength="4"
            placeholder="Vencimiento"
            
            onChange={this.handleInputChange}
            onFocus={this.handleInputFocus}
          />
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
        </Form>
      </Fragment>
    );
  }
}