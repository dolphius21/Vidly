import React, { Component } from 'react';
import Container from 'react-bootstrap/Container';
import './App.css';
import Movies from './components/movies';

class App extends Component {
  render() {
    return (
      <Container>
        <Movies />
      </Container>
    );
  }
}

export default App;
