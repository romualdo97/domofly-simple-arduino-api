/*jshint node:true*/

// Se agrega '_m' para diferenciar el modulo 'board' del
// metodo 'board' la '_m' es una abreviacion de '_module'
var board_m = require('../../../lib/board-controller');

// public maker object
var publics = {};

(function(){
	var doAction = function doAction(req, res){
		board_m.doDigitalAction({ slot: req.pin_num, action: req.action });
		res.json({message: req.action});
	};
	publics.doAction = doAction;
}());

module.exports = publics.doAction;
