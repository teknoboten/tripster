# db:reset

in order to get the geodata working, we have to update the schema for geodata. i created a file to automate the migration but we still need to reseed manually. follow these steps:

note - this will DELETE everything you have added to your local database (seeds still exist and have updated geodata)

in terminal, cd to express-back-end/db
reset the db: node reset.js
connect to sql: psql -U development -d tripster
reseed the DB: \i update.sql






# known issues
- map component still needs to be updated to take data from db
- you need to select 'where was this photo taken' before uploading a photo
