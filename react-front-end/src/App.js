import React from "react";
// import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Layout from "./components/layout/Layout";
import AllTripsPage from "./pages/AllTripsPage";
import NewImagePage from "./pages/NewImagePage";
import NewTripPage from "./pages/NewTripPage";
import TripDetailPage from "./pages/TripDetailPage";

// import axios from "axios";
// import "./App.css";

function App() {
  return (
    <Router>
      <Layout>
        <Switch>
          <Route path="/" exact={true}>
            <AllTripsPage />
          </Route>
          <Route path="/new-trip">
            <NewTripPage />
          </Route>
          <Route path="/trips/:tripId">
            <TripDetailPage />
          </Route>
          <Route path="/new-image/:trip_id">
            <NewImagePage />
          </Route>
        </Switch>
      </Layout>
    </Router>
  );
}

export default App;
