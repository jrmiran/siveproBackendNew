var express = require('express');
var app = express();
//var bodyParser = require('body-parser');

function ignoreFavicon(req, res, next) {
  if (req.originalUrl === '/favicon.ico') {
    res.status(204).json({nope: true});
  } else {
    next();
  }
}


app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});
app.use(ignoreFavicon);
//app.use(bodyParser);
app.set('view engine', 'ejs');
app.set('views', './app/views');




module.exports = app;