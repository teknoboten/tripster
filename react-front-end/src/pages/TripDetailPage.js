import React, { useState, useEffect } from "react";
// import ReactDOM from "react-dom";
import { useParams } from "react-router-dom";
import axios from "axios";

import classes from "./TripDetailPage.module.css";

import ImageGrid from "../components/images/ImageGrid";
import { motion } from "framer-motion";
import UploadImageForm from "../components/images/UploadImageForm";
import ImageModal from "../components/images/ImageModal";
import Map from "../components/maps/Map";

function TripDetailPage(props) {
  const [trip, setTrip] = useState();
  const [selectedImg, setSelectedImg] = useState(null);
  const [openModal, setOpenModal] = useState(false);

  const handleOnImageClick = (photo) => {
    setSelectedImg(photo);
    setOpenModal(true);
  };

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
    <section className={classes.tripPageContainer}>
      <Map photos={trip.photos} />

      <div className={classes.tripHeader}>
        <h1 className={classes.tripName}>{trip.trip_name}</h1>
        <h2 className={classes.tripDescription}>{trip.trip_description}</h2>
      </div>

      <UploadImageForm trip_id={trip.id} trip={trip} setTrip={setTrip} />

      <ImageGrid photos={trip.photos} onImageClick={handleOnImageClick} />

      {selectedImg && (
        <ImageModal
          selectedImg={selectedImg}
          onClose={() => {
            setSelectedImg(null);
            setOpenModal(false);
          }}
          open={openModal}
        ></ImageModal>
      )}
    </section>
  );
}

export default TripDetailPage;
