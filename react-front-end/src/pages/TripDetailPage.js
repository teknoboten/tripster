import axios from "axios";
import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import { useParams } from "react-router-dom";

function TripDetailPage() {
  const params = useParams();

  const [ images, setImages ] = useState([]);

  // useEffect(() => {

  //   //request image data from api
  //   axios.get('/api/photos/whatever')
  //   .then((result) => {
  //     setImages(result.images) //just an example
  //   })
  // }, [params.tripId])
  
  return (
    <section>
      <h1>Trip Detail Page</h1>
      {/* <TripList trips={staticTripData} /> */}
      <div>{params.tripId}</div>
    </section>
  );
}

export default TripDetailPage;
