// import axios from "axios";
import React, { useState, useEffect } from "react";
// import ReactDOM from "react-dom";
import { useParams } from "react-router-dom";

import NewImageButton from "../components/ui/NewImageButton";
import ImageGrid from "../components/images/ImageGrid";
import classes from "../components/images/ImageGrid.module.css";


function TripDetailPage(props) {

  const [ trip, setTrip ] = useState()

  const params = useParams();
  // const trip = props.trips[params.tripId - 1];

  // console.log(trip);

  // useEffect(() => {

  //   //request image  from api
  //   axios.get('/api/photos/whatever')
  //   .then((result) => {
  //     setImages(result.images) //just an example
  //   })
  // }, [params.tripId])

    useEffect(() => {
      setTrip(props.trips[params.tripId - 1]) //just an example
    }, [params.tripId])
  
    if (trip === undefined ) {

      return <></>

    }
  return (
    <section>
      
      <h1>{trip.tripName}</h1>
      <h2>{trip.description}</h2>
      <p>imagine a cool map here</p>
      
      <NewImageButton trip_id={trip.id} />


      <ImageGrid />



    </section>
  );
}

export default TripDetailPage;