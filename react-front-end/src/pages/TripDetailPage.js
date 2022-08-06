import React, { useState, useEffect } from "react";
// import ReactDOM from "react-dom";
import { useParams } from "react-router-dom";
import axios from "axios";

import NewImageButton from "../components/ui/NewImageButton";
import ImageGrid from "../components/images/ImageGrid";
import classes from "../components/images/ImageGrid.module.css";
import UploadImageForm from "../components/images/UploadImageForm";
import Modal from "../components/images/Modal";
import Map from "../components/maps/Map";

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

  // console.log(trip.photos);

  return (
    <section>
      {/* <h1>{trip.trip_name}</h1>
      <b>{trip.trip_description}</b> */}

      <Map />

      <UploadImageForm trip_id={trip.id} trip={trip} setTrip={setTrip} />

      <ImageGrid photos={trip.photos} />

      {selectedImg && (
        <Modal selectedImg={selectedImg} setSelectedImg={setSelectedImg} />
      )}
    </section>
  );
}

export default TripDetailPage;
