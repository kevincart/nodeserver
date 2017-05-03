var express = require('express');
var router = express.Router();
var api = require('../lib/api');

router.get('/async', function(req, res) {
  res.send("Async TEST" + "<br/>" + api.output);

});



module.exports = router;
