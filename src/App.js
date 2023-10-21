import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import LatestMovies from './components/LatestMovies';
import MovieDetailsPage from './components/MovieDetails';
import TicketBookingPage from './components/TicketBooking';

function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/">
            <LatestMovies />
          </Route>
          <Route path="/movies/:movieId">
            <MovieDetailsPage />
          </Route>
          <Route path="/booking">
            <TicketBookingPage />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
