import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Layout from './components/layout/Layout';
import AllTripsPage from './pages/AllTripsPage';
import NewTripPage from './pages/NewTripPage';
import TripDetailPage from './pages/TripDetailPage';

// import React from "react";
// import axios from "axios";
// import "./App.css";

function App() {
  return (
    <Router>
      <Layout>
        <Switch>
          <Route path='/' exact={true}>
            <AllTripsPage />
          </Route>
          <Route path='/new-trip'>
            <NewTripPage />
          </Route>
          <Route path='/trip/:tripId'>
            <TripDetailPage />
          </Route>
        </Switch>
      </Layout>
    </Router>
  );
}

export default App;