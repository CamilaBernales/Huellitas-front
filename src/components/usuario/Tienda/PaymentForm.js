import React, { Fragment } from 'react';
import Cards from 'react-credit-cards';
import { Form } from 'react-bootstrap';
import 'react-credit-cards/es/styles-compiled.css';

export default class PaymentForm extends React.Component {
  state = {
    cvc: '',
    expiry: '',
    focus: '',
    name: '',
    number: '',
  };

  handleInputFocus = (e) => {
    this.setState({ focus: e.target.name });
  }
  
  handleInputChange = (e) => {
    const { name, value } = e.target;
    
    this.setState({ [name]: value });
  }
  
  render() {
    return (
      <Fragment>
        <Cards
          cvc={this.state.cvc}
          expiry={this.state.expiry}
          focused={this.state.focus}
          name={this.state.name}
          number={this.state.number}
        />
        <Form>
        	<Form.Control
            className="m-3"
            type="tel"
            name="number"
            placeholder="Número de Tarjeta"
            onChange={this.handleInputChange}
            onFocus={this.handleInputFocus}
          />
          <Form.Control
            className="m-3"
            type="tel"
            name="name"
            placeholder="Nombre"
            onChange={this.handleInputChange}
            onFocus={this.handleInputFocus}
          />
          <Form.Control
            className="m-3"
            type="tel"
            name="expiry"
            placeholder="Vencimiento"
            onChange={this.handleInputChange}
            onFocus={this.handleInputFocus}
          />
          <Form.Control
            className="m-3"
            type="tel"
            name="cvc"
            placeholder="CVC"
            onChange={this.handleInputChange}
            onFocus={this.handleInputFocus}
          />
        </Form>
      </Fragment>
    );
  }
}