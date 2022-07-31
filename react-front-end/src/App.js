/* eslint-disable react/jsx-no-undef */
import React from 'react';
import ReactDOM from 'react-dom';
import { Route } from 'react-router-dom';

import AllTripsPage from './pages/AllTripsPage';
import NewTripPage from './pages/NewTripPage';

// import React from "react";
// import axios from "axios";
// import "./App.css";

function App() {
  return (
    <div>
      <Route path='/'>
        <AllTripsPage />
      </Route>
      <Route path='/new-trip'>
        <NewTripPage />
      </Route>
    </div>
  );
}

export default App;
