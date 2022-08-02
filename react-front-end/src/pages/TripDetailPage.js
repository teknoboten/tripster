import React from "react";
import ReactDOM from "react-dom";
import { useParams } from "react-router-dom";

function TripDetailPage() {
  const params = useParams();
  console.log(params);
  return (
    <section>
      <h1>Trip Detail Page</h1>
      {/* <TripList trips={staticTripData} /> */}
    </section>
  );
}

export default TripDetailPage;
