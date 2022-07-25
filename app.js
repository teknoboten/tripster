const express = require('express');
const app = express();

require('dotenv').config();

const ejsMate = require('ejs-mate');
const mapboxgl = require('mapbox-gl'); 

// mapboxgl.accessToken = process.env.MBAC;



app.engine('ejs', ejsMate)
app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');
app.use(express.static('public'));

app.get('/', (req, res) => {
  res.render('index')
})


app.listen(3000, () => {
  console.log('🎒 hey there tripster... ');
})