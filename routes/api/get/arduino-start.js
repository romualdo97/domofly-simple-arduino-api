/*jshint node:true*/

// Se agrega '_m' para diferenciar el modulo 'board' del
// metodo 'board' la '_m' es una abreviacion de '_module'
var board_m = require('../../../lib/board-controller');

// public maker object
var publics = {};
(function(){
	var arduinoStart = function arduinoStart(req, res){
		board_m.startBoard(function( err ){
			if ( err ) return res.json({ error: err });
			return res.json({ message: 'board started' });
		});
	};
	publics.arduinoStart = arduinoStart;
}());

module.exports = publics.arduinoStart;
