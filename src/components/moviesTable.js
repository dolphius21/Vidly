import Like from './common/like';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';

const MoviesTable = (props) => {
  const { movies, onDelete, onLike } = props;

  return (
    <Table responsive>
      <thead>
        <tr>
          <th colSpan="2">Title</th>
          <th>Genre</th>
          <th>Stock</th>
          <th>Rate</th>
          <th />
          <th />
        </tr>
      </thead>
      <tbody>
        {movies.map((movie) => (
          <tr key={movie._id}>
            <td colSpan="2">{movie.title}</td>
            <td>{movie.genre.name}</td>
            <td>{movie.numberInStock}</td>
            <td>{movie.dailyRentalRate}</td>
            <td>
              <Like liked={movie.liked} onLike={() => onLike(movie)} />
            </td>
            <td>
              <Button variant="danger" onClick={() => onDelete(movie)}>
                Delete
              </Button>
            </td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
};

export default MoviesTable;
