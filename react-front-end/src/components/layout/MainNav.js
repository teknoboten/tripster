import React from 'react';
import ReactDOM from 'react-dom';

import { Link } from 'react-router-dom';

function MainNav() {
  return (
    <header>
      <div>Tripster</div>
      <nav>
        <ul>
          <li>
            <Link to='/'>All Trips</Link>
          </li>
          <li>
            <Link to='new-trip'>Add New Trip</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default MainNav;