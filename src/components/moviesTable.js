import React, { Component } from 'react';
import Like from './common/like';
import TableHeader from './common/tableHeader';
import TableBody from './common/tableBody';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';

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
      <Table responsive>
        <TableHeader
          columns={this.columns}
          sortColumn={sortColumn}
          onSort={onSort}
        />
        <TableBody data={movies} columns={this.columns} />
      </Table>
    );
  }
}

export default MoviesTable;
