module.exports = `
DROP TABLE IF EXISTS trips CASCADE;

CREATE TABLE trips (
  id SERIAL PRIMARY KEY NOT NULL,
  trip_name VARCHAR(255) NOT NULL,
  trip_description VARCHAR(255),
  start_date DATE,
  end_date DATE,
  user_id INTEGER REFERENCES users(id) ON DELETE CASCADE
);`;