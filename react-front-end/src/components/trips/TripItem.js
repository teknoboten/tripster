import React from "react";
// import ReactDOM from 'react-dom';
import Card from "../ui/Card";
import { Link } from "react-router-dom";

import classes from "./TripItem.module.css";

function TripItem(props) {
  // const [ trip, setTrip ] = useState(null);

  return (
    <li className={classes.item}>
      <Link
        to={`trips/${props.id}`}
      // style={{ textDecoration: "none" }}
      >
        <Card>
          <div className={classes.image}>
            <img src={props.coverImage} alt={props.tripName} />
          </div>
          <div className={classes.content}>
            <h3 className={classes.tripName}>{props.tripName}</h3>
            <p>{props.description}</p>
          </div>
        </Card>
      </Link>
    </li>
  );
}

export default TripItem;
