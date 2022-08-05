import React, { useState, useEffect } from "react";

import TripItem from "./TripItem";
import classes from "./TripList.module.css";

function TripList() {
  const [trips, setTrips] = useState([]);

  useEffect(() => {
    fetch("/api/trips").then(async (res) => {
      const jsonResponse = await res.json();
      console.log(jsonResponse);
      setTrips(jsonResponse);
    });
  }, []);

  return (
    <ul className={classes.list}>
      {trips.map((trip) => (
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
