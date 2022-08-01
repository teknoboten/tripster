import React from "react";
// import ReactDOM from 'react-dom';
// import { Route, Switch } from 'react-router-dom';

// import Layout from './components/layout/Layout';
// import AllTripsPage from './pages/AllTripsPage';
// import NewTripPage from './pages/NewTripPage';

// import React from "react";
// import axios from "axios";
// import "./App.css";

import UploadImageForm from "./components/images/UploadImageForm";
import Title from "./components/Title";

function App() {
  return (
    <div className="App">
      <Title />
      <UploadImageForm />
    </div>
  );
}

export default App;
