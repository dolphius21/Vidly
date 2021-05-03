import Alert from 'react-bootstrap/Alert';
import Form from 'react-bootstrap/Form';

const Input = ({ name, label, value, type, autoFocus, error, onChange }) => {
  return (
    <Form.Group controlId={name}>
      <Form.Label>{label}</Form.Label>
      <Form.Control
        autoFocus={autoFocus}
        value={value}
        onChange={onChange}
        name={name}
        type={type}
        placeholder={`Enter ${name}`}
      />
      {error && <Alert variant="danger">{error}</Alert>}
    </Form.Group>
  );
};

export default Input;
