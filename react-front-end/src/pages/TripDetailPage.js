import React, { useState, useEffect } from "react";
// import ReactDOM from "react-dom";
import { useParams } from "react-router-dom";
import axios from "axios";

import NewImageButton from "../components/ui/NewImageButton";
import ImageGrid from "../components/images/ImageGrid";
import classes from "../components/images/ImageGrid.module.css";
import UploadImageForm from "../components/images/UploadImageForm";
import Modal from "../components/images/Modal";

function TripDetailPage(props) {
  
  const [trip, setTrip] = useState();
  const [selectedImg, setSelectedImg] = useState(null);

  const params = useParams();
  
  useEffect(() => {
    //request image  from api
    axios.get(`/api/trips/${params.tripId}`).then((result) => {
      setTrip(result.data);
    });
  }, [params.tripId]);

  if (trip === undefined) {
    return <></>;
  }
  return (
    <section>
      <h1>{trip.trip_name}</h1>
      <h2>{trip.trip_description}</h2>
      <p>imagine a cool map here</p>

      <UploadImageForm trip_id={trip.id}/>

      <ImageGrid photos={trip.photos} />
      
      { selectedImg && (
        <Modal selectedImg={selectedImg} setSelectedImg={setSelectedImg} />
      )}

    </section>
  );
}

export default TripDetailPage;



/* <NewImageButton trip_id={trip.id} /> */