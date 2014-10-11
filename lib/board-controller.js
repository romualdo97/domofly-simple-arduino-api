/*jshint node:true*/
var j5 = require('johnny-five');
var isBoardStarted = false;

function startBoard( fn ){
	// comprueba si la board arduino ya ha sido iniciada, en caso afirmativo devolver error en callbac
	if ( isBoardStarted ) return fn( { message: 'board is already started!' }, null );

	var board = new j5.Board({port: 'COM8'});
	isBoardStarted = true;

	board.on('ready', function(){
		console.log('board started');
		return fn( null );
	});
}

var digitalSlots = {};
// funcion que crea las instancias de los slots y devuelve callback como respuestas
// NOTE: no se trabaja mucho en las validaciones de la funcion createInstance debido a que
// ya se han validado los datos de entrada en la API
function createInstance( obj_data, fn ){
	var slot = obj_data.slot,
		action = obj_data.action;

	if ( !slot ) return fn({ message: 'No slot provided' });
	if ( !action ) return fn({ message: 'No action provided' });

	if ( digitalSlots['isInstance' + slot] ) return fn();

	digitalSlots['instance' + slot] = new j5.Led( slot );
	digitalSlots['isInstance' + slot] = true;
	return fn();
}

function doDigitalAction( obj_data ){
	createInstance(obj_data, function( err ){
		if ( err ) return err;
		var action = obj_data.action,
			slot = obj_data.slot;
		switch( action ) {
			case '0':
				digitalSlots['instance' + slot].off();
				break;
			case '1':
				digitalSlots['instance' + slot].on();
				break;
			case 'strobe':
				digitalSlots['instance' + slot].strobe();
				break;
			case 'stop':
				digitalSlots['instance' + slot].stop();
				break;
		}
	});
}

exports.startBoard = startBoard;
exports.doDigitalAction = doDigitalAction;
