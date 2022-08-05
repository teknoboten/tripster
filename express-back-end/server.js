const Express = require("express");
const App = Express();
const BodyParser = require("body-parser");
const PORT = 8080;

const cors = require('cors');
const db = require('./database');

db.connect();

// morgan is a logger
const morgan = require("morgan");
App.use(morgan("dev"));

App.use(cors());
// App.use(Express.json()); //req.body

// Express Configuration
App.use(BodyParser.urlencoded({ extended: true }));
App.use(BodyParser.json());
App.use(Express.static("public"));


// Homepage
App.get("/", (req, res) => {
  res.send(`home`);
});

// ----- USERS ----- //
// Landing page for logged-in users
// Show all of a user's trips
App.get("/api/users/:id", async (req, res) => {
  try {
      let resp = await db.query(`
        SELECT trip_name
        FROM trips
      `);
      res.send(resp.rows);
  } catch (error) {
    console.log(error);
  }
});

// ----- TRIPS ----- //

App.get("/api/trips", (req, res) => {
  try {
    pool.connect(async (error, client, release) => {
      let resp = await client.query(`
        SELECT *
        FROM trips
      `);
      res.send(resp.rows);
    });
  } catch (error) {
    console.log(error);
    res.send({ error: error });
  }
});

// form to create a new trip
App.get("/api/trips/new", (req, res) => {
  res.send(`create a new trip`);
});




// create a new trip in the db
App.post("/api/trips/new", async (req, res) => {
  console.log(req.body);
  console.log(req.body.tripName);
  try {
    // pool.connect(async (error, client, release) => {
      let resp = await db.query(`
        INSERT INTO trips (trip_name)
        VALUES($1) 
        RETURNING id;
      `,
        [req.body.tripName]
      );
      res.json(resp.rows[0]);
      // res.send(`A new trip to ${req.body.tripName} has been created.`);
      // needs the thing to prevent SQL injection

      // don't redirect
      // res.json with what it got
      // res.redirect('/api/users/:id');
    // });
  } catch (error) {
    console.log(error);
  }
});

// trip homepage showing map and all photos from a trip
App.get("/api/trips/:id", (req, res) => {
  res.send("trip homepage showing map and all photos from a trip");
});

// ----- PHOTOS ----- //

// form to upload more photos
App.get("/api/photos/new", (req, res) => {
  res.send("form to upload more photos");
});

// create new photos in db
App.post("/api/photos/new", async (req, res) => {

  const queryString = `
  INSERT INTO photos
    (photo_text, date, lat, long, photo_url, trip_id) 
    VALUES
    ($1, $2, $3, $4, $5, $6)
    RETURNING *;`; 
  
  const queryParams = Object.values(req.body);

  try {
    let resp = await db.query(queryString, queryParams);
    console.log("response:", resp.rows[0]);
    res.status(201)
    } 
  catch (error) {
    console.log(error);
  }
});

// show page of an individual photo with zoomed in map and description
App.get("/api/photos/:id", (req, res) => {
  res.send(
    "show page of an individual photo with zoomed in map and description"
  );
});


App.listen(PORT, () => {
  // eslint-disable-next-line no-console
  console.log(`Express seems to be listening on port ${PORT} so that's pretty good 👍`);
});
