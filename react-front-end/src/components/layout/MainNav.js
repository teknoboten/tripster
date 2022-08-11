import React from "react";

import { Link } from "react-router-dom";

import classes from "./MainNav.module.css";

function MainNav() {
  return (
    <div className={classes.navContainer}>
      <header className={classes.header}>
        <div>
          <Link
            to="/"
            style={{ textDecoration: "none" }}
            className={classes.logo}
          >
            Tripster
          </Link>
        </div>
        <nav>
          <ul>
            <li>
              <Link to="/">All Trips</Link>
            </li>
            <li>
              <Link to="/new-trip">Add New Trip</Link>
            </li>
          </ul>
        </nav>
      </header>
    </div>
  );
}

export default MainNav;
