/*jshint node:true*/
var express = require('express');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');


// routes API
var api = require('./routes/api');

var app = express();

// app.use(logger('dev'));
app.use(bodyParser.json({extended: true}));
app.use(bodyParser.urlencoded({extended: true}));
app.use(cookieParser());

app.use('/api', api);

/// catch 404 and forward to error handler
app.use(function(req, res, next) {
    var err = new Error('Resource or endpoint not found');
    err.status = 404;
    next(err);
});

/// error handlers

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.json({
		error: {
			status: err.status,
			message: err.message
		}
    });
});


module.exports = app;
