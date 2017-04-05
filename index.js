var express = require('express');
var app = express();
var port = process.env.PORT || 3000

app.set('view engine', 'pug');

app.use(express.static('public'));

app.listen(port, function () {
  console.log('Example app listening on port 3000!')
});

app.get('/', function(req, res) {
  res.render('index', {title: 'Julianna Stevenson', message: 'Julianna Stevenson'})
});

app.get('/resume', function(req, res) {
  res.render('resume', {title: 'Resume'})
});
