import React from "react";

import TripItem from "./TripItem";
import classes from "./TripList.module.css";

function TripList(props) {
  return (
    <ul className={classes.list}>
      {props.trips.map((trip) => (
        <TripItem
          key={trip.id}
          id={trip.id}
          coverImage={trip.coverImage}
          tripName={trip.trip_name}
          description={trip.trip_description}
        />
      ))}
    </ul>
  );
}

export default TripList;
