/* eslint-disable no-undef */
import React from "react";
// import ReactDOM from 'react-dom';
import Card from "../ui/Card";
import classes from "./NewTripForm.module.css";
import { useRef, useState } from "react";
import { useHistory } from "react-router-dom";

function NewTripForm() {
  // const tripNameInputRef = useRef();
  const [tripName, setTripName] = useState("");
  const [coverImage, setCoverImage] = useState("");
  const [description, setDescription] = useState("");
  const history = useHistory();

  async function submitHandler(event) {
    event.preventDefault();

    // const enteredTripName = tripNameInputRef.current.value;
    // const enteredCoverImage = coverImageInputRef.current.value;
    // const enteredDescription = descriptionInputRef.current.value;

    const tripData = {
      tripName: tripName,
      coverImage: coverImage,
      description: description,
    };

    const response = await fetch("/api/trips/new", {
      method: "POST",
      body: JSON.stringify(tripData),
      headers: { "Content-Type": "application/json" },
    });
    const tripId = (await response.json()).id;

    history.push(`/trips/${tripId}`);
    // reset the form
    // update the state to cause a redirect

    console.log(tripData);
  }

  return (
    <Card>
      <form className={classes.form} onSubmit={submitHandler}>
        <div className={classes.control}>
          <label htmlFor="tripName" className={classes.control.label}>
            Trip Name
          </label>
          <input
            type="text"
            required
            id="tripName"
            value={tripName}
            onChange={(e) => setTripName(e.target.value)}
          />
        </div>
        <div className={classes.control}>
          <label htmlFor="coverImage">Cover Image</label>
          <input
            type="url"
            id="coverImage"
            value={coverImage}
            onChange={(e) => setCoverImage(e.target.value)}
          />
        </div>
        <div className={classes.control}>
          <label htmlFor="description">Description</label>
          <textarea
            id="description"
            rows="5"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          ></textarea>
        </div>
        <div className={classes.actions}>
          <button>Add Trip</button>
        </div>
      </form>
    </Card>
  );
}

export default NewTripForm;
