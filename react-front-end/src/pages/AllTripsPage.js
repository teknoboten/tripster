/* eslint-disable no-unused-expressions */
import React from "react";

import TripList from "../components/trips/TripList";
import classes from "./AllTripsPage.module.css";

function AllTripsPage() {
  return (
    <section className={classes.tripContainer}>
      <TripList />
    </section>
  );
}

export default AllTripsPage;
