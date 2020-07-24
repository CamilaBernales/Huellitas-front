import React, { Fragment } from 'react';
import Cards from 'react-credit-cards';
import { Form, Row, Col } from 'react-bootstrap';
import 'react-credit-cards/es/styles-compiled.css';
import PropTypes from 'prop-types';

class PaymentForm extends React.Component {
  
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
                onInput={() => this.props.handleOnInput(this.state)}
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
                onInput={() => this.props.handleOnInput(this.state)}
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
                onInput={() => this.props.handleOnInput(this.state)}
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
                onInput={() => this.props.handleOnInput(this.state)}
              />
            </Col>
          </Row>
        </Form>
      </Fragment>
    );
  }
}

PaymentForm.propTypes = {
  handleOnInput: PropTypes.func
}

export default PaymentForm;