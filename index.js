var express = require('express');
var app = express();
var MongoClient = require('mongodb').MongoClient;
var port = process.env.PORT || 3000

app.set('view engine', 'pug');

app.use(express.static('public'));

app.listen(port, function () {
  console.log('Example app listening on port 3000!')
});

app.get('/', function(req, res) {
  res.render('index', {title: 'Julie Stevenson', message: 'Julianna Stevenson'})
});

app.get('/resume', function(req, res) {
  res.render('resume', {title: 'Resume'})
});

// Connect to the DB
MongoClient.connect("mongodb://localhost:3000/", function(err, db) {
  if(!err) {
    console.log("We are connected");
  }
  else {
    console.log("ERROR: Couldn't connect to database.");
  }

  // Do work here with database

  db.close();
});
