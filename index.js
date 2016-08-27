// Get env vars
require('dotenv').config();

var express = require('express');
var app = express();
var bodyParser = require('body-parser');
app.use(express.static('public'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Start listening
app.listen(process.env.PORT || 5000, function () {
  console.log(`Example app listening on port ${process.env.PORT || 5000}!`);
});
