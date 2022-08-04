// import axios from "axios";
import React from "react";
// import ReactDOM from "react-dom";
import { useParams } from "react-router-dom";

import ImageGrid from "../components/images/ImageGrid";
import classes from "../components/images/ImageGrid.module.css";


function TripDetailPage(props) {

  const params = useParams();
  const trip = props.trips[params.tripId - 1];

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
      <p>imagine a cool map here</p>
      
      <ImageGrid />




    </section>
  );
}

export default TripDetailPage;