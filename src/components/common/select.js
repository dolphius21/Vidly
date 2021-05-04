import Form from 'react-bootstrap/Form';

const Select = ({ name, label, options, error, ...rest }) => {
  return (
    <Form.Group>
      <Form.Label>{label}</Form.Label>
      <Form.Control as="select" name={name} id={name} {...rest}>
        <option>Select Genre</option>
        {options.map((option) => {
          return (
            <option key={option._id} value={option._id}>
              {option.name}
            </option>
          );
        })}
      </Form.Control>
      {error && <div className="alert alert-danger">{error}</div>}
    </Form.Group>
  );
};

export default Select;
