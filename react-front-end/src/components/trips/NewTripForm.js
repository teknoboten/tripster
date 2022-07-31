import React from 'react';
import ReactDOM from 'react-dom';
import Card from '../ui/Card';
import classes from './NewTripForm.module.css';

function NewTripForm() {
  return <Card>
    <form className={classes.form}>
      <div className={classes.control}>
        <label htmlFor='tripName'>Trip Name</label>
        <input type='text' required id='tripName' />
      </div>
      <div className={classes.control}>
        <label htmlFor='coverImage'>Cover Image</label>
        <input type='url' id='coverImage' />
      </div>
      <div className={classes.control}>
        <label htmlFor='description'>Description</label>
        <textarea id='description' rows='5'></textarea>
      </div>
      <div className={classes.actions}>
        <button>Add Trip</button>
      </div>



    </form>
  </Card>;
}

export default NewTripForm;