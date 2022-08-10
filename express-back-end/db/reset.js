const db = require('../database');

const dbSchema = require('./schema/dbSchema')

db.connect();

const promises = [
  db.query(dbSchema),
  // db.query(reseed)
];

Promise.all(promises)
  .then(() => console.log('i fixed the db for you!'))
  .then(() => db.end())
  .catch(err => console.log('db is borked, whoops!', err));