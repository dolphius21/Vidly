import React, { Component } from 'react';
import { Redirect, Route, Switch } from 'react-router';
import Container from 'react-bootstrap/Container';
import NavBar from './components/common/navBar';
import Movies from './components/movies';
import MovieForm from './components/movieForm';
import Customers from './components/customers';
import Rentals from './components/rentals';
import NotFound from './components/notFound';
import LoginForm from './components/common/loginForm';
import './App.css';

class App extends Component {
  render() {
    return (
      <>
        <NavBar />
        <Container>
          <Switch>
            <Route path="/login" component={LoginForm} />
            <Route path="/movies/:id" component={MovieForm} />
            <Route path="/movies" component={Movies} />
            <Route path="/customers" component={Customers} />
            <Route path="/rentals" component={Rentals} />
            <Route path="/not-found" component={NotFound} />
            <Redirect from="/" exact to="/movies" />
            <Redirect to="/not-found" />
          </Switch>
        </Container>
      </>
    );
  }
}

export default App;
