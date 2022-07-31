import React from 'react';
import ReactDOM from 'react-dom';
import { Route, Switch } from 'react-router-dom';

import Layout from './components/layout/Layout';
import AllTripsPage from './pages/AllTripsPage';
import NewTripPage from './pages/NewTripPage';

// import React from "react";
// import axios from "axios";
// import "./App.css";

function App() {
  return (
    <Layout>
      <Switch>
        <Route path='/' exact={true}>
          <AllTripsPage />
        </Route>
        <Route path='/new-trip'>
          <NewTripPage />
        </Route>
      </Switch>
    </Layout>
  );
}

export default App;
