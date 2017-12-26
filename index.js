var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');
var app = express();

app.use(bodyParser.json());

var port = process.env.PORT || 5000;

app.use(express.static(path.join(__dirname, 'public')));
app.use('/scripts', express.static(path.join(__dirname, 'node_modules')));

app.use('/login', function(req, res, next) {
  res.sendFile('index.html', { root: __dirname + '/public' });
});

app.use('/api/login', require('./api/login'));

app.listen(port);

console.log("Magic Happens On Port", port);