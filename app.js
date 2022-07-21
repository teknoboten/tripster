const express = require('express');
const app = express();
const ejsMate = require('ejs-mate');


app.engine('ejs', ejsMate)
app.set('view engine', 'ejs');

app.set('views', __dirname + '/views');
app.set('view engine', 'ejs'); 

app.get('/', (req, res) => {
  res.render('index')
})


app.listen(3000, () => {
  console.log('feeling kinda trippy.... 🍄');
})