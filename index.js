// Require dependencies
var express = require('express');
var app = express();
var exports = module.exports = {};
require('dotenv').load();

// Set server port
app.set('port', (process.env.PORT || 5000));

// Set static page directory, /public
app.use(express.static(__dirname + '/public'));
app.use('/public', express.static('public'));

// Set template file directory, /views. Set view engine to EJS
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

// Route root request to pages/index
app.get('/', function(request, response) {
  response.render('pages/index');
});

// Route favicon request to public/favicons
app.get('/favicon.ico', function(request, response) {
  response.render('public/favicons');
});

// Route for API request call routes/gcall
app.use(require('./routes/gcall'));

// Begin listening at specified port
var server = app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});

exports.closeServer = function() {
  server.close();
};
