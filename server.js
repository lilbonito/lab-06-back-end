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



//   function Location(query, geoData){
//     const geoD
//     this.query = query;
//     this.formated_query = geoData.formatted_address;
//     this.latitude = geoData.geometry.location.lat;
//     this.longitude = geoData.geometry.location.lng;

//   }

function searchToLatLong(query) {
  const geoData = require('./data/geo.json')
  const location = {
    search_query: query,
    formatted_query: geoData.results[0].formatted_address,
    latitude: geoData.results[0].geometry.location.lat,
    longitude: geoData.results[0].geometry.location.lng
  }
  return location;
}









app.listen(PORT, () => console.log(`App is listening on ${PORT}`) );
