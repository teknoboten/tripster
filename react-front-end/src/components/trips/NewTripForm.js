/* eslint-disable no-undef */
import React from "react";
// import ReactDOM from 'react-dom';
import Card from "../ui/Card";
import classes from "./NewTripForm.module.css";
import { useState } from "react";
import { useHistory } from "react-router-dom";

function NewTripForm() {
  // const tripNameInputRef = useRef();
  const [tripName, setTripName] = useState("");
  const [description, setDescription] = useState("");
  const history = useHistory();

  async function submitHandler(event) {
    event.preventDefault();

    // const enteredTripName = tripNameInputRef.current.value;
    // const enteredCoverImage = coverImageInputRef.current.value;
    // const enteredDescription = descriptionInputRef.current.value;

    const tripData = {
      tripName: tripName,
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
    <div className={classes.newTripForm}>
      <form className={classes.form} onSubmit={submitHandler}>
        <h1>Add New Trip</h1>
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
    </div>
  );
}

export default NewTripForm;
