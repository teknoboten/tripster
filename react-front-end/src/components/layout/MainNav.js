import React from "react";

import { Link } from "react-router-dom";

import classes from "./MainNav.module.css";

function MainNav() {
  return (
    <div className={classes.navContainer}>
      <nav>



        <Link to="/" id={classes.logo}><img src='../../../images/tripsterLogoLightBlue.svg' alt="tripsterLogo" height={75} /></Link>
        {/* <Link to="/" id={classes.logo}><img src='../../../images/tripsterLogoYellow.svg' alt="tripsterLogo" height={75} /></Link> */}
        <ul>
          <li>
            <Link to="/">All Trips</Link>
          </li>
          <li>
            <Link to="/new-trip">Add New Trip</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default MainNav;

