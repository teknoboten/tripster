import axios from "axios";
import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import { useParams } from "react-router-dom";

import TripItem from "../components/trips/TripItem";


// const fakeTripData = {
//   id: "2",
//   tripName: "California",
//   coverImage:
//     "https://upload.wikimedia.org/wikipedia/commons/0/03/US_199_Redwood_Highway.jpg",
//   description: "I took a trip to California to see the Redwood trees",
// }


const fakeTripData = {
  id: "3",
  tripName: "New Zealand",
  coverImage:
    "https://ivhq.imgix.net/images/hero/volunteer-in-new-zealand-world-leaders-ivhq.jpg?auto=format,compress",
  description:
    "I went to New Zealand to see where they filmed the Lord of the Rings movies.",
}


function TripDetailPage(props) {
  const params = useParams();

  // const [ images, setImages ] = useState([]);
  const [ tripData, setTripData ] = useState([]);

  // useEffect(() => {

  //   //request image data from api
  //   axios.get('/api/photos/whatever')
  //   .then((result) => {
  //     setImages(result.images) //just an example
  //   })
  // }, [params.tripId])

    useEffect(() => {
      setTripData(fakeTripData) //just an example
    }, [params.tripId])
  
  return (
    <section>
      <h1>{props.tripName}</h1>
      {/* <TripList trips={staticTripData} /> */}
      {/* <div>{params.tripId}</div> */}
      <div>{tripData.tripName}</div>
      <div>{tripData.description}</div>
    </section>
  );
}

export default TripDetailPage;
