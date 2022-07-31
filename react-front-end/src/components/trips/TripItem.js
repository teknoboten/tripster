import React from 'react';
import ReactDOM from 'react-dom';
import Card from '../ui/Card';

import classes from './TripItem.module.css';

function TripItem(props) {
  return (
    <li className={classes.item}>
      <Card>
        <div className={classes.image}>
          <img src={props.coverImage} alt={props.tripName} />
        </div>
        <div className={classes.content}>
          <h3>{props.tripName}</h3>
          <p>{props.description}</p>
        </div>
      </Card>
    </li>
  );

}

export default TripItem;