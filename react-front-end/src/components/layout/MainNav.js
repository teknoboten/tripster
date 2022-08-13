import React from "react";

import { Link } from "react-router-dom";

import classes from "./MainNav.module.css";


function MainNav() {
  return (
    <div className={classes.navContainer}>
      <header className={classes.header}>
        {/* <div className={classes.logo}>Tripster</div> */}
        <Link to="/" id={classes.logo}>Tripster</Link>
        <nav>
          <ul>
            <li>
              <Link to="/">All Trips</Link>
            </li>
            <li>
              <Link to="/new-trip">Add New Trip <i class="fa-solid fa-image"></i></Link>
            </li>
          </ul>
        </nav>
      </header>
    </div>
  );
}

export default MainNav;
