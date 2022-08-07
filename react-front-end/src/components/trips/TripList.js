import React, { useState, useEffect } from "react";

import TripItem from "./TripItem";
import classes from "./TripList.module.css";

function TripList() {
  const [trips, setTrips] = useState([]);

  useEffect(() => {
    fetch("/api/trips").then(async (res) => {
      const jsonResponse = await res.json();
      console.log(jsonResponse);
      // console.log('First item in response array', jsonResponse[0]);
      setTrips(jsonResponse.tripInfo);
    });
  }, []);

  return (
    <ul className={classes.list}>
      {trips.map((trip) => (
        <TripItem
          key={trip.id}
          id={trip.id}
          // coverImage={trip.coverImage}
          coverImage={trip.photo_url}
          tripName={trip.trip_name}
          description={trip.trip_description}
        />
      ))}
    </ul>
  );
}

export default TripList;
