# setup db for local devlopment

1.  start postgress from terminal

- this might already be running
- it also might be different for vagrant users?

pg_ctl -D /usr/local/var/postgres -l /usr/local/var/postgres/server.log start

2. connect to postgress from terminal with:
   psql

- now we will create a tripster database owned by a user 'development'
- if this user does not exist, create it with:

CREATE USER development WITH PASSWORD 'development';

3. then create the database
   CREATE DATABASE tripster WITH OWNER=development;

- disconnect from psql
  \q

- reconnect to the new tripster db:
  psql -U development -d tripster

4. setup tables and import seeds
   \i update.sql

SELECT \* FROM trips LEFT JOIN photos ON photos.id = (SELECT id FROM photos WHERE trip_id = trips.id LIMIT 1);
