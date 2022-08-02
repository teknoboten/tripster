/* eslint-disable no-unused-expressions */
import React from "react";
import ReactDOM from "react-dom";

import TripList from "../components/trips/TripList";

const staticTripData = [
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
      "https://ivhq.imgix.net/images/hero/volunteer-in-new-zealand-world-leaders-ivhq.jpg?auto=format,compress",
    description:
      "I went to New Zealand to see where they filmed the Lord of the Rings movies.",
  },
];

function AllTripsPage() {
  return (
    <section>
      <h1>All Trips</h1>
      <TripList trips={staticTripData} />
    </section>
  );
}

export default AllTripsPage;

<Layout>
  <Switch>
    <Route path='/' exact={true}>
      <AllTripsPage />
    </Route>
    <Route path='/new-trip'>
      <NewTripPage />
    </Route>
    <Route path='/trip/:id'>
      <TripDetailPage />
    </Route>
  </Switch>
</Layout>;
