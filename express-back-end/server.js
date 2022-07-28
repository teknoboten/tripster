const Express = require('express');
const App = Express();
const BodyParser = require('body-parser');
const PORT = 8080;

// Express Configuration
App.use(BodyParser.urlencoded({ extended: false }));
App.use(BodyParser.json());
App.use(Express.static('public'));

// Sample GET route
// App.get('/api/data', (req, res) => res.json({
//   message: "Seems to work!",
// }));

// Homepage
App.get("/", (req, res) => { console.log("mumbo-jumbo"); });


// ----- USERS ----- //
// Landing page for logged-in users
// Show all of a user's trips
App.get("/api/users/:id", (req, res) => { });

// ----- TRIPS ----- //
// trip homepage showing map and all photos from a trip 
App.get("/api/trips/:id", (req, res) => { });

// form to create a new trip
App.get("/api/trips/new", (req, res) => console.log("form to create a new trip"));

// create a new trip in the db
App.post("/api/trips/new", (req, res) => { });

// ----- PHOTOS ----- //
// show page of an individual photo with zoomed in map and description
App.get("/api/photos/:id", (req, res) => { });

// form to upload more photos
App.get("/api/photos/new", (req, res) => { });

// create new photos in db
App.post("/api/photos", (req, res) => { });





App.listen(PORT, () => {
  // eslint-disable-next-line no-console
  console.log(`Express seems to be listening on port ${PORT} so that's pretty good 👍`);
});
