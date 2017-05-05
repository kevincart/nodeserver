// This script assembles API call URLs for Food Finder to consume
//var apiKey = process.env.apiKey;

var URL = "https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=-33.8670522,151.1957362&radius=500&type=restaurant&keyword=cruise&key=AIzaSyD3Vczq1nBaKZ4X5rxzh1qoSVYLGfSVWGs"
var output = "";

var request = require('request');

/*
request(URL, function (error, response, body) {
  console.log('error:', error); // Print the error if one occurred
  console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
  //console.log('body:', body); // Print the HTML for the Google homepage.
  return body;
});
*/

output = "foo";
module.exports.output = output;
