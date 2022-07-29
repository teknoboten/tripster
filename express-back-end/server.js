const Express = require('express');
const App = Express();
const BodyParser = require('body-parser');
const PORT = 8080;

const cors = require('cors');
const pool = require('./database');

App.use(cors());
App.use(Express.json()); //req.body


// Express Configuration
App.use(BodyParser.urlencoded({ extended: false }));
App.use(BodyParser.json());
App.use(Express.static('public'));

App.listen(PORT, () => {
  // eslint-disable-next-line no-console
  console.log(`Express seems to be listening on port ${PORT} so that's pretty good 👍`);
});

// Sample GET route
// App.get('/api/data', (req, res) => res.json({
//   message: "Seems to work!",
// }));

// Homepage
App.get("/", (req, res) => {
  res.send("Homepage");
});


// ----- USERS ----- //
// Landing page for logged-in users
// Show all of a user's trips
App.get("/api/users/:id", (req, res) => {
  // res.send("Landing page for logged-in users, Show all of a user's trips");
  pool.query(`
    SELECT trip_name
    FROM trips
  `)
    .then(res => {
      console.log(res.rows);
      return res.rows;
    })
    .catch(err => console.error('query error', err.stack));

});

// ----- TRIPS ----- //

// form to create a new trip
App.get("/api/trips/new", (req, res) => {
  res.send("form to create a new trip");
});

// create a new trip in the db
App.post("/api/trips/new", (req, res) => {
  res.send("create a new trip in the db");
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
  res.send("show page of an individual photo with zoomed in map and description");
});






