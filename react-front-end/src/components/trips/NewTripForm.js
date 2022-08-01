/* eslint-disable no-undef */
import React from 'react';
import ReactDOM from 'react-dom';
import Card from '../ui/Card';
import classes from './NewTripForm.module.css';
import { useRef } from 'react';

function NewTripForm() {
  const tripNameInputRef = useRef();
  const coverImageInputRef = useRef();
  const descriptionInputRef = useRef();


  function submitHandler(event) {
    event.preventDefault();

    const enteredTripName = tripNameInputRef.current.value;
    const enteredCoverImage = coverImageInputRef.current.value;
    const enteredDescription = descriptionInputRef.current.value;

    const tripData = {
      tripName: enteredTripName,
      coverImage: enteredCoverImage,
      description: enteredDescription
    };

    console.log(tripData);
  }

  return (
    <Card>
      <form className={classes.form} onSubmit={submitHandler}>
        <div className={classes.control}>
          <label htmlFor='tripName'>Trip Name</label>
          <input type='text' required id='tripName' ref={tripNameInputRef} />
        </div>
        <div className={classes.control}>
          <label htmlFor='coverImage'>Cover Image</label>
          <input type='url' id='coverImage' ref={coverImageInputRef} />
        </div>
        <div className={classes.control}>
          <label htmlFor='description'>Description</label>
          <textarea id='description' rows='5' ref={descriptionInputRef}></textarea>
        </div>
        <div className={classes.actions}>
          <button>Add Trip</button>
        </div>
      </form>
    </Card>
  );
}

export default NewTripForm;