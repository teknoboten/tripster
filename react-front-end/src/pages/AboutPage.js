import React from 'react';

import classes from "./AboutPage.module.css";

function AboutPage() {
  return (
    <div className={classes.newTripForm}>

      <div className={classes.form}>
        <h1>About</h1>
        <p>Tripster is a photo/map journalling app that maps where you took each photo on your trip.</p>
        <ul>
          <li><span>Make a new trip</span></li>
          <li><span>Upload photos from your trip</span></li>
          <li><span>Tripster will automatically read the location data from your photos and plot the location the photo was taken on a map</span></li>
          <li><span>Add comments to each photo</span></li>
        </ul>
        <p>Tech Stack:</p>
        <ul>
          <li><span>React              </span></li>
          <li><span>Express            </span></li>
          <li><span>PostgreSQL         </span></li>
          <li><span>MapBox             </span></li>
          <li><span>Firebase           </span></li>
          <li><span>Exif-js Library    </span></li>
        </ul>
        <a className={classes.gitHubLink} href="https://github.com/teknoboten/tripster">GitHub Repo - Tripster</a>

        <div id={classes.bioSection}>

          {/* ------------ JEFF PROFILE CARD ------------  */}
          <div className={classes.profileCard}>
            <img className={classes.profilePic} src='/images/jeff.png' alt='profilePicture' />

            <p className={classes.name}>Jeff Bush</p>
            <div className={classes.socialIcons}>
              <a href="https://github.com/jeffbushdesign">
                {/* <i className={classes.fa - brands fa-github"></i> */}
              </a>
              <a href="https://www.linkedin.com/in/jeff-bush-74bbb853/">
                {/* <i className={classes.fa - brands fa-linkedin"></i> */}
              </a>
              <a href="https://www.instagram.com/jeffbushdesign/">
                {/* <i className={classes.fa - brands fa-instagram"></i> */}
              </a>
              <a href="https://www.jeffbush.com/">
                {/* <i className={classes.fa - solid fa-ghost"></i> */}
              </a>
            </div>
          </div>

          {/* ------------ SERRA PROFILE CARD ------------  */}
          <div className={classes.profileCard}>
            <img className={classes.profilePic} src='/images/serra.png' alt='profilePicture' />

            <p className={classes.name}>Serra Boten</p>
            <div className={classes.socialIcons}>
              <a href="https://github.com/jeffbushdesign">
                {/* <i className={classes.fa - brands fa-github"></i> */}
              </a>
              <a href="https://www.linkedin.com/in/jeff-bush-74bbb853/">
                {/* <i className={classes.fa - brands fa-linkedin"></i> */}
              </a>
              <a href="https://www.instagram.com/jeffbushdesign/">
                {/* <i className={classes.fa - brands fa-instagram"></i> */}
              </a>
              <a href="https://www.jeffbush.com/">
                {/* <i className={classes.fa - solid fa-ghost"></i> */}
              </a>
            </div>
          </div>

          {/* ------------ AMY PROFILE CARD ------------  */}
          <div className={classes.profileCard}>
            <img className={classes.profilePic} src='/images/amy.png' alt='profilePicture' />

            <p className={classes.name}>Amy Franses</p>
            <div className={classes.socialIcons}>
              <a href="https://github.com/jeffbushdesign">
                {/* <i className={classes.fa - brands fa-github"></i> */}
              </a>
              <a href="https://www.linkedin.com/in/jeff-bush-74bbb853/">
                {/* <i className={classes.fa - brands fa-linkedin"></i> */}
              </a>
              <a href="https://www.instagram.com/jeffbushdesign/">
                {/* <i className={classes.fa - brands fa-instagram"></i> */}
              </a>
              <a href="https://www.jeffbush.com/">
                {/* <i className={classes.fa - solid fa-ghost"></i> */}
              </a>
            </div>
          </div>



        </div>
      </div>
    </div>
    // className={classes.newTripForm}>

  );
}

export default AboutPage;;;