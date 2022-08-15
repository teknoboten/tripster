import React from 'react';

import classes from './Layout.module.css';
import MainNav from './MainNav';

function Layout(props) {
  return (
    <div className={classes.layoutContainer}>
      <MainNav />
      <main className={classes.main}>
        {props.children}
      </main>

    </div>
  );
}

export default Layout;