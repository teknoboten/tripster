import React, { useEffect, useState } from "react";
// import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Layout from "./components/layout/Layout";
import AllTripsPage from "./pages/AllTripsPage";
import NewImagePage from "./pages/NewImagePage";
import NewTripPage from "./pages/NewTripPage";
import TripDetailPage from "./pages/TripDetailPage";

// import axios from "axios";
// import "./App.css";

const fakeTripData = [
  {
    id: "1",
    tripName: "Tahiti",
    coverImage:
      "https://tahititourisme.ca/wp-content/uploads/2017/06/tahiti-accomodations-thumb.jpg",
    description: "In 2009 I went to Tahiti",
  },
  {
    id: "2",
    tripName: "California",
    coverImage:
      "https://upload.wikimedia.org/wikipedia/commons/0/03/US_199_Redwood_Highway.jpg",
    description: "I took a trip to California to see the Redwood trees",
  },
  {
    id: "3",
    tripName: "New Zealand",
    coverImage:
      "https://ivhq.imgix.net/images/hero/volunteer-in-new-zealand-world-leaders-ivhq.jpg?",
    description:
      "I went to New Zealand to see where they filmed the Lord of the Rings movies.",
  },
];

function App() {
  const [trips, setTrips] = useState([]);

  useEffect(() => {
    fetch("/api/trips").then(async (res) => {
      const jsonResponse = await res.json();
      console.log(jsonResponse);
      setTrips(jsonResponse);
    });
  }, []);

  return (
    <Router>
      <Layout>
        <Switch>
          <Route path="/" exact={true}>
            <AllTripsPage trips={trips} />
          </Route>
          <Route path="/new-trip">
            <NewTripPage />
          </Route>
          <Route path="/trips/:tripId">
            <TripDetailPage trips={trips} />
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
