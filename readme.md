# simple api for arduino
A simple api for controlling simple arduino functionality without ethernet shield, using only the serial comunication.

# API
GET /api/arduino/start 				: Initializate serial communication with arduino

GET /api/arduino/:slot_num/:action 	: Define an action for the slot number

## :slot_num
this param define in which slot do actions

## :action
action could take the following values

1. 1: for turn on current pass in digital slot
2. 0: for turn off current pass in digital slot
3. strobe: for strobe current pass in digital slot
1. stop: for stop strobe in digital slot 
