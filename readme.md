# simple api for arduino
A simple api for controlling simple arduino functionality without ethernet shield, using only the serial comunication.

# API
GET /api/arduino/start 				: Initializate all arduino-uno digital slots
POST /api/arduino/:slot_num/action 	: Define an action for the five slot number, eg. 'turn on, turn off', action only can take to possible values, cero( 0 ) or one( 1 )
