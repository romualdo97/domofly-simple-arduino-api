/*jshint node:true*/
var express = require('express');
var router = express.Router();

router.route('/arduino')
	.get(function (req, res){
		res.json({message: 'endpoint -' + req.url + '- accesed'});
	});

module.exports = router;
