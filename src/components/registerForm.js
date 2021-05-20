import Joi from 'joi-browser';
import FormComp from './common/form';
import Form from 'react-bootstrap/Form';
import * as userService from '../services/userService';

class RegisterForm extends FormComp {
  state = {
    data: { email: '', password: '', username: '' },
    errors: {}
  };

  schema = {
    email: Joi.string().required().email().label('Email'),
    password: Joi.string().required().min(7).label('Password'),
    username: Joi.string().required().label('Username')
  };

  doSubmit = async () => {
    try {
      await userService.register(this.state.data);
    } catch (err) {
      if (err.response && err.response.status === 400) {
        const errors = { ...this.state.errors };
        errors.username = err.response.data;
        this.setState({ errors });
      }
    }
  };

  render() {
    return (
      <div>
        <h1>Register</h1>
        <Form onSubmit={this.handleSubmit}>
          {this.renderInput('username', 'Username')}
          {this.renderInput('email', 'Email')}
          {this.renderInput('password', 'Password', 'password')}
          {this.renderButton('Register')}
        </Form>
      </div>
    );
  }
}

export default RegisterForm;
