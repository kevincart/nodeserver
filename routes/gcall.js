var express = require('express');
var router = express.Router();
var apiKey = process.env.apiKey;

router.get('/gcall', function(req, res) {
  gps = req.query.coordinates;
  console.log(gps);
  var url = "https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=" + gps
    + "&radius=500&type=restaurant&keyword=cruise&key=" + apiKey;
  console.log(url);
  res.send("Async TEST" + url);
});

module.exports = router;
