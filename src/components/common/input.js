import Alert from 'react-bootstrap/Alert';
import Form from 'react-bootstrap/Form';

const Input = ({ name, label, error, ...rest }) => {
  return (
    <Form.Group>
      <Form.Label>{label}</Form.Label>
      <Form.Control {...rest} name={name} placeholder={`Enter ${name}`} />
      {error && <Alert variant="danger">{error}</Alert>}
    </Form.Group>
  );
};

export default Input;
