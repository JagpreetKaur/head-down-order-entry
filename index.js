var express = require('express');
var bodyParser = require('body-parser');
var app = express();

app.use(bodyParser.json());

var port = process.env.PORT || 5000;

app.use('/scripts', express.static(__dirname + '/node_modules/'));
app.use('/public', express.static(__dirname + '/public/'));
app.use('/login', function(req, res, next) {
  res.sendFile('index.html', { root: __dirname + '/public' });
});

app.use('/api/login', require('./api/login'));

app.listen(port);


console.log("Magic Happens On Port", port);