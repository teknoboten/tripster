import React, { useState, useEffect } from "react";
// import ReactDOM from "react-dom";
import { useParams } from "react-router-dom";
import axios from "axios";

import NewImageButton from "../components/ui/NewImageButton";
import ImageGrid from "../components/images/ImageGrid";
import { motion } from "framer-motion";
import classes from "../components/images/ImageGrid.module.css";
import UploadImageForm from "../components/images/UploadImageForm";
import Modal from "../components/images/Modal";
import PhotoDetail from "../components/images/PhotoDetail";
// import PhotoDetail from "../components/images/photoDetail";


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

      <UploadImageForm trip_id={trip.id} trip={trip} setTrip={setTrip} />

      <ImageGrid photos={trip.photos} setSelectedImg={setSelectedImg} />

      {selectedImg && (
        <Modal onCloseModal={() => setSelectedImg(null)}>
          <PhotoDetail selectedImg={selectedImg} />
        </Modal>
      )}
    </section>
  );
}

export default TripDetailPage;
