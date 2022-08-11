module.exports = `
DROP TABLE IF EXISTS users CASCADE;
DROP TABLE IF EXISTS trips CASCADE;
DROP TABLE IF EXISTS photos CASCADE;

CREATE TABLE users (
  id SERIAL PRIMARY KEY NOT NULL,
  first_name VARCHAR(255) NOT NULL,
  last_name VARCHAR(255) NOT NULL,
  email VARCHAR(50) NOT NULL
);

CREATE TABLE trips (
  id SERIAL PRIMARY KEY NOT NULL,
  trip_name VARCHAR(255) NOT NULL,
  trip_description VARCHAR(255),
  start_date DATE,
  end_date DATE,
  user_id INTEGER REFERENCES users(id) ON DELETE CASCADE
);

CREATE TABLE photos (
  id SERIAL PRIMARY KEY NOT NULL,
  photo_text TEXT,
  date TIMESTAMP,
  coordinates DECIMAL (11,8)[],
  lat DECIMAL (10,8),
  long DECIMAL (11,8),
  photo_url VARCHAR(255) NOT NULL,
  trip_id INTEGER REFERENCES trips(id) ON DELETE CASCADE
);`;
