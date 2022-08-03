/* eslint-disable no-unused-expressions */
import React from "react";

import TripList from "../components/trips/TripList";

function AllTripsPage(props) {

  return (
    <section>
      <TripList trips={props.trips}/>
    </section>
  );
}

export default AllTripsPage;
