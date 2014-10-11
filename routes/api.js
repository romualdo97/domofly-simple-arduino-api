/*jshint node:true*/
var express = require('express'),
	router = express.Router();

// API dependencies
var arduinoStart = require('./api/get/arduino-start'),
	digitalActions = require('./api/get/digital-actions');

router.route('/arduino/start')
	.get(function (req, res){
		arduinoStart(req, res);
	});

// validate url params
// validate pin_num param
router.param('pin_num', function(req, res, next){
	if ( isNaN( parseInt( req.params.pin_num ) ) || req.params.pin_num > 13 || req.params.pin_num < 1 ) return res.json({error: 'pin_num param must be a number between 1 and 13'});
	req.pin_num = req.params.pin_num;
	return next();
});
// validate action param
router.param('action', function(req, res, next){
	var error = {};
	if ( req.params.action !== '0' && req.params.action !== '1' && req.params.action !== 'strobe' && req.params.action !== 'stop' ) return res.json({ error: 'action param must be 0 or 1 or strobe string' });

	req.action = req.params.action;
	return next();


});



// route actions like turn on or turn of
router.route('/arduino/:pin_num/:action')
	.get(function ( req, res) {
		digitalActions(req, res);
	});

module.exports = router;
