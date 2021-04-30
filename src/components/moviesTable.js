import React, { Component } from 'react';
import Like from './common/like';
import Button from 'react-bootstrap/Button';
import TableComp from './common/table';

class MoviesTable extends Component {
  columns = [
    { path: 'title', label: 'Title' },
    { path: 'genre.name', label: 'Genre' },
    { path: 'numberInStock', label: 'Stock' },
    { path: 'dailyRentalRate', label: 'Rate' },
    {
      key: 'like',
      content: (movie) => (
        <Like liked={movie.liked} onLike={() => this.props.onLike(movie)} />
      )
    },
    {
      key: 'delete',
      content: (movie) => (
        <Button variant="danger" onClick={() => this.props.onDelete(movie)}>
          Delete
        </Button>
      )
    }
  ];
  render() {
    const { movies, onSort, sortColumn } = this.props;

    return (
      <TableComp
        columns={this.columns}
        data={movies}
        sortColumn={sortColumn}
        onSort={onSort}
      />
    );
  }
}

export default MoviesTable;
