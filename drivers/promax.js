var Debouncer = require('./debouncer.js');
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
			var debouncer = new Debouncer(1000);

			//Define signal
			if(initFlag){
				initFlag = 0;
				var Signal = Homey.wireless('433').Signal;
				signal = new Signal('promax');

				signal.register(function( err, success ){
				    if(err != null){
				    	console.log('Promax: err', err, 'success', success);
				    }
				});

				signal.numberToBitArray = function(number, bit_count) {
					var result = [];
					for (var i = 0; i < bit_count; i++)
						result[i] = (number >> i) & 1;
					return result;
				};

				signal.bitArrayToNumber = function(bits) {
					return parseInt(bits.join(""),2);
				};

				signal.bitStringToBitArray = function(str) {
					var result = [];
					for (var i = 0; i < str.length; i++)
						result.push(str.charAt(i) == '1' ? 1 : 0);
					return result;
				};

				signal.bitArrayToString = function(bits) {
					return bits.join("");
				};

				//Start receiving
				signal.on('payload', function(payload, first){
					payload = signal.bitArrayToString(payload);
					if(debouncer.check(payload)) return;
					console.log('received:', payload, payload.length);
					var matches = getDeviceByPayload(payload);
					matches.devices.forEach(function(device){
						updateDevice(self, device, matches.state);
					});
					myEvent.emit('newMessage', payload);
				});
				console.log('Promax: started.')
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
			console.log('Promax: Device deleted')
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
				if(data.counter == 0) tempdata.on = [0,0,0,0];
				myEvent.once('newMessage', function(payload){
					if(tempdata.on.indexOf(payload) >= 0) return;
					tempdata.on[data.counter] = payload;
					socket.emit('remote_found_on'); //Send signal to frontend
				});
				callback();
			});

			socket.on('imitateOff', function ( data, callback ){
				if(data.counter == 0) tempdata.off = [0,0,0,0];
				myEvent.once('newMessage', function(payload){
					if(tempdata.off.indexOf(payload) >= 0) return;
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
				var name = "Promax " + __(driver); //__() Is for translation
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
		if(err != null)console.log('Promax: Error:', err);
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
