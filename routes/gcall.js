var express = require('express');
var request = require('request');
var router = express.Router();
var apiKey = process.env.API_KEY;

router.get('/gcall', function(req, res) {
  gps = req.query.coordinates;
  console.log(gps);
  var url = "https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=" + gps
    + "&radius=400&types=restaurant&key=" + apiKey;

  request(url, function (error, response, body) {
    if (error) {
      console.log('error: ', error); // handle error
    } else {
      console.log('status code: ', response && response.statusCode); // print response status code if response received
      res.send(body);
    }
  });
});

module.exports = router;
