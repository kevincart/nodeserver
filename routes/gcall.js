// Require dependencies
var express = require('express');
var request = require('request');
var router = express.Router();

// Handle request
router.get('/gcall', function(req, res) {
  let gps = req.query.coordinates;
  let radius = 400;
  // Assign API key from environment variables to local variable
  let apiKey = process.env.API_KEY;

  console.log(gps);
  // Build url for API request
  var url = "https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=" + gps
    + "&radius=" +  radius + "&types=restaurant&key=" + apiKey;

  // Make HTTP request to API
  request(url, function (error, response, body) {
    if (error) {
      console.log('error: ', error); // handle error
    } else {
      console.log('status code: ', response && response.statusCode); // print response status code if response received
      res.send(body);
    }
  });
});

// Export module
module.exports = router;
