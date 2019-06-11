// Load Environment Variables from the .env file
require('dotenv').config();

// Application Dependencies
const express = require('express');
const cors = require('cors'); //cross origin request sharing

// Application Setup
const PORT = process.env.PORT;
const app = express();
app.use(cors());

app.get('/location', (request, response) =>{

  const locationData = searchToLatLong(request.query.data);
  response.send(locationData);
 
});

app.get('/weather', (request, response) =>{ 

  const weatherData = searchTimeForcast(request.query.data);
  response.send(weatherData);
});



function Location(query, geoData){
  this.query = query;
  this.formated_query = geoData.formatted_address;
  this.latitude = geoData.geometry.location.lat;
  this.longitude = geoData.geometry.location.lng;
}
function Weather(query, weatherData){
  this.query = query;
  this.time = weatherData.daily.data.time;
  this.forcast = weatherData.daily.data.summary;
  // this.time2 = weatherData.data.time;
}
  

function searchToLatLong(query) {
  const geoData = require('./data/geo.json');
  const location = new Location(query, geoData);
  return location;
}


function searchTimeForcast(query) {
  const weatherData = require('./data/darksky.json');
  const weather = new Weather(query, weatherData);
  console.log( weather);
  return weather;
}
 











app.listen(PORT, () => console.log(`App is listening on ${PORT}`) );
