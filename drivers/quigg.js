var debouncer = require('./debouncer.js');
var events = require('events');
var myEvent = new events.EventEmitter();

var deviceList = [];
var tempdata = {};
var signal;
var initFlag = 1;
var tempdata = {
	on:  [],
	off: [],
	state: false
};

function createDriver(driver) {
	var self = {
		init: function( devices, callback ) {
			//Define signal
			if(initFlag){
				initFlag = 0;
				var Signal = Homey.wireless('433').Signal;
				signal = new Signal({   
					sof: [], //Start of frame
				   	eof: [2970], //End of frame
					words: [
						[460, 1050],	// 0
						[960, 560]	// 1
					],
					interval: 7060, //Time between repititions
					repetitions: 20,
					sensitivity: 0.7, 
					minimalLength: 24,
	   				maximalLength: 24
				});	

				signal.register(function( err, success ){
				    if(err != null){
				    	console.log('Quigg: err', err, 'success', success);
				    }
				});

				debouncer.init(500);

				//Start receiving
				signal.on('payload', function(payload, first){
					if(payload[23] == 1 || payload[0] == 0) return;
					payload = signal.bitArrayToString(payload);
					if(debouncer.check(payload)) return;
					var matches = getDeviceByPayload(payload);
					matches.devices.forEach(function(device){
						updateDevice(self, device, matches.state);
					});
					myEvent.emit('newMessage', payload);
				});
				console.log('Quigg: started.')
			}

			//Refresh deviceList
			devices.forEach(function(device){
				device.state = Homey.manager('settings').get(device.id + 'state');
				addDevice(device);
			});
			callback();
		},
		
		deleted: function( device_data ) {
			var index = deviceList.indexOf(getDeviceById(device_data))
			delete deviceList[index];
			console.log('Quigg: Device deleted')
		},
		
		capabilities: {
			onoff: {
				get: function( device_data, callback ) {
					var device = getDeviceById(device_data);
					callback( null, device.state ? true : false);
				},
				set: function( device_data, onoff, callback ) {
					var device = getDeviceById(device_data);
					updateDevice(self, device, onoff)
					sendOnOff(device, onoff);
					callback( null, onoff );		
				}
			}
		},
		
		pair: function( socket ) {
			socket.on('imitateOn', function ( data, callback ){
				myEvent.once('newMessage', function(payload){
					tempdata.on[data.counter] = payload;
					socket.emit('remote_found_on'); //Send signal to frontend
				});
				callback();
			});

			socket.on('imitateOff', function ( data, callback ){
				myEvent.once('newMessage', function(payload){
					tempdata.off[data.counter] = payload;
					socket.emit('remote_found_off'); //Send signal to frontend
				});
				callback();
			});

			socket.on('test_device', function( data, callback ){
				myEvent.on('newMessage', function ( payload ){
					if(tempdata.on.indexOf(payload) >= 0) socket.emit('received_on'); //Send signal to frontend
					else if(tempdata.off.indexOf(payload) >= 0) socket.emit('received_off'); //Send signal to frontend
				});
				callback(false);
			});
			
			socket.on('sendSignal', function( state, callback ){
				if(state != true) state = false;
				tempdata.state = state;
				sendOnOff(tempdata, state);
				callback();
			});

			socket.on('done', function( data, callback ){
				var idNumber = Math.round(Math.random() * 0xFFFF);
				var id = "" + idNumber; //id is used by Homey-Client
				var name = "Quigg " + __(driver); //__() Is for translation
				addDevice({
					id       : id,
					on       : tempdata.on,
					off      : tempdata.off,
					state    : tempdata.state,
					driver   : driver,
				});

				//Share data to front end
				callback(null, {
					name: name,
					data: {
						id       : id,
						on       : tempdata.on,
						off      : tempdata.off,
						driver   : driver,
					}
				});
			});

			socket.on('disconnect', function(){
				myEvent.removeAllListeners('newMessage');
				return;
			});
		},
	};
	return self;
}

function getDeviceById(deviceIn) {
	var matches = deviceList.filter(function(d){
		return d.id == deviceIn.id;
	});
	return matches ? matches[0] : null;
}

function getDeviceByPayload(payload) {
	var state = null;
	var matches = deviceList.filter(function(d){
		if(d.on.indexOf(payload) >= 0){
			state = true;
			return 1;
		}else if(d.off.indexOf(payload) >= 0) {
			state = false;
			return 1;
		}
		return 0;
	});
	return {devices: matches, state: state};
}

function updateDevice(self, device, state){
	device.state = state;
	Homey.manager('settings').set(device.id + 'state', state );
	self.realtime(device, 'onoff', state);
}

function addDevice(deviceIn) {
	deviceList.push(deviceIn);
}

function sendOnOff(deviceIn, state) {
	if(state) var frame = new Buffer(bitStringToBitArray(deviceIn.on[0]));
	else var frame = new Buffer(bitStringToBitArray(deviceIn.off[0]));
	signal.tx( frame, function( err, result ){
		if(err != null)console.log('Quigg: Error:', err);
    });
}

function bitStringToBitArray(str) {
    var result = [];
    for (var i = 0; i < str.length; i++)
        result.push(str.charAt(i) == 1 ? 1 : 0);
    return result;
};

function bitArrayToString(bits) {
    return bits.join("");
};

function numberToBitArray(number, bit_count) {
    var result = [];
    for (var i = 0; i < bit_count; i++)
        result[i] = (number >> i) & 1;
    return result;
};

module.exports = {
	createDriver: createDriver
};