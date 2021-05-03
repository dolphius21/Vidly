import Joi from 'joi-browser';
import FormComp from './common/form';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';

class LoginForm extends FormComp {
  state = {
    data: { username: '', password: '' },
    errors: {}
  };

  schema = {
    username: Joi.string().required().label('Username'),
    password: Joi.string().required().label('Password')
  };

  doSubmit = () => {
    // Call the server
    console.log('Submitted');
  };

  render() {
    return (
      <Container>
        <h1>Login</h1>
        <Form onSubmit={this.handleSubmit}>
          {this.renderInput('username', 'Username')}
          {this.renderInput('password', 'Password', 'password')}
          {this.renderButton('Login')}
        </Form>
      </Container>
    );
  }
}

export default LoginForm;
