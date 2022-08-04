const Express = require("express");
const App = Express();
const BodyParser = require("body-parser");
const PORT = 8080;

const cors = require("cors");
const pool = require("./database");

// morgan is a logger
const morgan = require("morgan");
App.use(morgan("dev"));

App.use(cors());
// App.use(Express.json()); //req.body

// Express Configuration
App.use(BodyParser.urlencoded({ extended: true }));
App.use(BodyParser.json());
App.use(Express.static("public"));

App.listen(PORT, () => {
  // eslint-disable-next-line no-console
  console.log(
    `Express seems to be listening on port ${PORT} so that's pretty good 👍`
  );
});

// Sample GET route
// App.get('/api/data', (req, res) => res.json({
//   message: "Seems to work!",
// }));

// Homepage
App.get("/", (req, res) => {
  res.send(`
  <!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
  </head>
  <body>
    <p>You are on the <br />HOMEPAGE </p>
  </body>
  </html>
  `);
});

// ----- USERS ----- //
// Landing page for logged-in users
// Show all of a user's trips
App.get("/api/users/:id", (req, res) => {
  try {
    pool.connect(async (error, client, release) => {
      let resp = await client.query(`
        SELECT trip_name
        FROM trips
      `);
      res.send(resp.rows);
    });
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
  res.send(`
  <!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
  </head>
  <body>
    <p>Form to create a new trip</p>
    <form action="/api/trips/new" method="POST">
      <label for="tripName">Trip Name:</label>
      <input type="text" name="tripName" id="tripName">
      <input type="submit" value="SUBMIT">
    </form>
  </body>
  </html>
  `);
});

// create a new trip in the db
App.post("/api/trips/new", (req, res) => {
  console.log(req.body);
  console.log(req.body.tripName);
  try {
    pool.connect(async (error, client, release) => {
      let resp = await client.query(
        `
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
    });
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
App.post("/api/photos", (req, res) => {
  res.send("create new photos in db");
});

// show page of an individual photo with zoomed in map and description
App.get("/api/photos/:id", (req, res) => {
  res.send(
    "show page of an individual photo with zoomed in map and description"
  );
});
