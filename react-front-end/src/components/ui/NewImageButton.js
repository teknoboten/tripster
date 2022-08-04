import React from 'react';
import classes from './Card.module.css';
import { Link } from 'react-router-dom';

function NewImageButton(props) {
  return <div className={classes.button}>
    <Link to={`/new-image/${props.trip_id}`}>Add New Image</Link>
    </div>;
}


export default NewImageButton;