import Button from 'react-bootstrap/Button';

const MovieForm = ({ match, history }) => {
  const handleSave = () => {
    history.push('/movies');
  };
  return (
    <>
      <h1>Movie Form {match.params.id}</h1>
      <Button onClick={handleSave}>Save</Button>
    </>
  );
};

export default MovieForm;
