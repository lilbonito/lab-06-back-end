'use strict';

// Load Environment Variables from the .env file
require('dotenv').config();

// Application Dependencies
const express = require('express');
const cors = require('cors'); //cross origin request sharing

// Application Setup
const PORT = process.env.PORT;
const app = express();
app.use(cors());

// API Routes
app.get('/ping', (request, response) =>{    //takes in a request first and then a response -- required
  response.send('pong');
});


app.get('/location', (request, response) =>{
  try{
    const locationData = searchToLatLong(request.query.data);
    response.send(locationData);
  }



  const mockLocationData = require('./data/geo.json');
 
  response.send(mockLocationDigest);
const locaation = new Location(request.query.data, mockLocationData.results[0]);
response.send(location);

});

function Location(query, geoData){
  this.query = query;
  this.formated_query = geoData.formatted_address;
  this.latitude = geoData.geometry.location.lat;
  this.longitude = geoData.geometry.location.lng;
 
}


// Make sure the server is listening for requests
app.listen(PORT, () => console.log(`App is listening on ${PORT}`) );
