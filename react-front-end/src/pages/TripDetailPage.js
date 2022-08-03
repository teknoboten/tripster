// import axios from "axios";
import React, { useState } from "react";
// import ReactDOM from "react-dom";
import { useParams } from "react-router-dom";


function TripDetailPage(props) {
  const params = useParams();

  const [ trip, setTrip ] = useState(props.trips[params.tripId]);

  // useEffect(() => {

  //   //request image  from api
  //   axios.get('/api/photos/whatever')
  //   .then((result) => {
  //     setImages(result.images) //just an example
  //   })
  // }, [params.tripId])

    // useEffect(() => {
    //   setTrip(props.trips[params.tripId]) //just an example
    // }, [params.tripId])
  
  return (
    <section>
      
      <h1>{trip.tripName}</h1>
      <h2>{trip.description}</h2>

      
    </section>
  );
}

export default TripDetailPage;