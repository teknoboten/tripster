module.exports = `
DROP TABLE IF EXISTS photos CASCADE;

CREATE TABLE photos (
  id SERIAL PRIMARY KEY NOT NULL,
  photo_text TEXT,
  date TIMESTAMP,
  long DECIMAL(11,8) NOT NULL,
  lat DECIMAL (10,8) NOT NULL,
  photo_url VARCHAR(255) NOT NULL,
  trip_id INTEGER REFERENCES trips(id) ON DELETE CASCADE
);`;