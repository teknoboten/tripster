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
        SELECT *, trips.id AS id
        FROM trips
        LEFT JOIN photos
        ON photos.id = (
        SELECT id
                  FROM photos
                  WHERE trip_id = trips.id
                  LIMIT 1
              );
      `);
    const tripInfo = result.rows;
    console.log("TRIP INFO", tripInfo);
    res.json({ tripInfo });
  } catch (error) {
    res.send({ error: error });
  }
});

// create a new trip in the db
App.post("/api/trips/new", async (req, res) => {
  try {
    console.log(req.body);
    const result = await db.query(
      `
        INSERT INTO trips 
        (trip_name, trip_description)
        VALUES
        ($1, $2) 
        RETURNING *;
      `,
      [req.body.tripName, req.body.description]
    );
    console.log(result.rows[0]);
    res.json(result.rows[0]);
  } catch (error) {
    res.send({ error: error });
  }
});

// trip detail page showing map and all photos from a trip
App.get("/api/trips/:id", async (req, res) => {
  try {
    const result = await db.query(
      `
        SELECT * 
        FROM trips
        WHERE id = $1
      `,
      [req.params.id]
    );
    const photoResponse = await db.query(
      `
        SELECT * 
        FROM photos
        WHERE trip_id = $1
      `,
      [req.params.id]
    );

    const trip = result.rows[0];
    const photos = photoResponse.rows;

    res.json({ ...trip, photos });
  } catch (error) {
    res.send({ error: error });
  }
});

// ----- PHOTOS ----- //

// create new photos in db
App.post("/api/photos", async (req, res) => {

  console.log(req.body)

  const queryParams = [ 
    req.body.photo_text, 
    req.body.date,
    req.body.coordinates,
    req.body.photo_url,
    req.body.trip_id
  ]

  try {
    // const queryParams = Object.values(req.body);
    const result = await db.query(
      `
        INSERT INTO photos
        (photo_text, date, coordinates, photo_url, trip_id) 
        VALUES
        ($1, $2, $3, $4, $5)
        RETURNING *;
        `,
      queryParams
    );
    console.log("result from db insert:", result.rows);
    res.json(result.rows[0]);
  } catch (error) {
    console.log(error);
    res.send({ error: error });
  }
});

// show page of an individual photo with zoomed in map and description
App.get("/api/photos/:id", (req, res) => {
  res.send(
    "show page of an individual photo with zoomed in map and description"
  );
});



  // try {
  //   const queryParams = Object.values(req.body);

  //   const result = await db.query(
  //     `
  //       INSERT INTO photos
  //       (photo_text, date, lat, long, photo_url, trip_id) 
  //       VALUES
  //       ($1, $2, $3, $4, $5, $6)
  //       RETURNING *;
  //       `,
  //     queryParams
  //   );
  //   console.log(result.rows);
  //   res.json(result.rows[0]);
  // } catch (error) {
  //   res.send({ error: error });
  // }