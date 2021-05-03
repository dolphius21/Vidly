import Joi from 'joi-browser';
import FormComp from './common/form';
import Form from 'react-bootstrap/Form';

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

  doSubmit = () => {
    // Call the server
    console.log('Submitted');
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
