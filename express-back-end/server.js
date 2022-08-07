const Express = require("express");
const App = Express();
const BodyParser = require("body-parser");
const PORT = 8080;

const cors = require("cors");
const db = require("./database");

// morgan is a logger
const morgan = require("morgan");
App.use(morgan("dev"));
db.connect();
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

// Homepage
App.get("/", (req, res) => {
  res.send(`
 hello
  `);
});

// get all trips
// App.get("/api/trips", async (req, res) => {
//   try {
//     const result = await db.query(`
//         SELECT *
//         FROM trips
//       `);
//     const allTrips = result.rows;

//     res.json({ allTrips });
//   } catch (error) {
//     console.log(error);
//     res.send({ error: error });
//   }
// });

// ----- TRIPS ----- //

App.get("/api/trips", async (req, res) => {
  try {
    const result = await db.query(`
        SELECT *
        FROM trips
        JOIN photos
        ON photos.id = (
        SELECT id
                  FROM photos
                  WHERE trip_id = trips.id
                  LIMIT 1
              );
      `);
    const tripInfo = result.rows;

    res.json({ tripInfo });
  } catch (error) {
    res.send({ error: error });
  }
});

// create a new trip in the db
App.post("/api/trips/new", (req, res) => {
  // console.log(req.body);
  // console.log(req.body.tripName);
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

// trip detail page showing map and all photos from a trip
App.get("/api/trips/:id", (req, res) => {
  try {
    pool.connect(async (error, client, release) => {
      const resp = await client.query(
        `
        SELECT * 
        FROM trips
        WHERE id = $1
      `,
        [req.params.id]
      );
      const photoResponse = await client.query(
        `
        SELECT * 
        FROM photos
        WHERE trip_id = $1
      `,
        [req.params.id]
      );

      const trip = resp.rows[0];
      const photos = photoResponse.rows;
      // console.log("trip:", trip);
      // console.log("photos:", photos);

      res.json({ ...trip, photos });
    });
  } catch (error) {
    console.log(error);
    res.send({ error: error });
  }
});

// ----- PHOTOS ----- //

// form to upload more photos
App.get("/api/photos/new", (req, res) => {
  res.send("form to upload more photos");
});

// create new photos in db
App.post("/api/photos", (req, res) => {
  // res.send("create new photos in db");
  console.log(req.body);

  try {
    pool.connect(async (error, client, release) => {
      const queryParams = Object.values(req.body);

      let resp = await client.query(
        `
        INSERT INTO photos
        (photo_text, date, lat, long, photo_url, trip_id) 
        VALUES
        ($1, $2, $3, $4, $5, $6)
        RETURNING *;
        `,
        queryParams
      );
      console.log("response:", resp.rows[0]);
      res.json(resp.rows[0]);
    });
  } catch (error) {
    console.log(error);
  }
});

// show page of an individual photo with zoomed in map and description
App.get("/api/photos/:id", (req, res) => {
  res.send(
    "show page of an individual photo with zoomed in map and description"
  );
});
