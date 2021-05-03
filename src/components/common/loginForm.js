import React, { Component } from 'react';
import Joi from 'joi-browser';
import Input from './input';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';

class LoginForm extends Component {
  state = {
    account: { username: '', password: '' },
    errors: {}
  };

  schema = {
    username: Joi.string().required().label('Username'),
    password: Joi.string().required().label('Password')
  };

  validate = () => {
    const options = { abortEarly: false };
    const { error } = Joi.validate(this.state.account, this.schema, options);

    if (!error) return null;

    const errors = {};
    error.details.map((item) => (errors[item.path[0]] = item.message));
    return errors;
  };

  validateProperty = ({ name, value }) => {
    const obj = { [name]: value };
    const schema = { [name]: this.schema[name] };
    const { error } = Joi.validate(obj, schema);

    return error ? error.details[0].message : null;
  };

  handleSubmit = (e) => {
    e.preventDefault();

    const errors = this.validate();
    this.setState({ errors: errors || {} });
    if (errors) return;
  };

  handleChange = ({ currentTarget: input }) => {
    const errors = { ...this.state.errors };
    const errorMessage = this.validateProperty(input);

    if (errorMessage) {
      errors[input.name] = errorMessage;
    } else {
      delete errors[input.name];
    }

    const account = { ...this.state.account };
    account[input.name] = input.value;
    this.setState({ account, errors });
  };

  render() {
    const { account, errors } = this.state;

    return (
      <Container>
        <h1>Login</h1>
        <Form onSubmit={this.handleSubmit}>
          <Input
            autoFocus={true}
            name="username"
            value={account.username}
            label="Username"
            type="text"
            error={errors.username}
            onChange={this.handleChange}
          />
          <Input
            autoFocus={false}
            name="password"
            value={account.password}
            label="Password"
            type="text"
            error={errors.password}
            onChange={this.handleChange}
          />
          <Button variant="primary" type="submit" disabled={this.validate()}>
            Login
          </Button>
        </Form>
      </Container>
    );
  }
}

export default LoginForm;
