var express = require('express')
var app = express()

app.set('view engine', 'pug')

app.use(express.static('public'));

app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
})

app.get('/', function(req, res) {
  res.render('index', {title: 'Julianna Stevenson', message: 'Julianna Stevenson'})
})
