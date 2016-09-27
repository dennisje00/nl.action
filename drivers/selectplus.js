var Debouncer = require('./debouncer.js');

var deviceList = [];
var tempdata = {};
var initFlag = 1;
var tempdata = {};
var released
var signal;

function createDriver(driver, settable, button) {
	var self = {
		init: function( devices, callback ) {
			var debouncer = new Debouncer(1000);

			//Define signal
			if(initFlag){
				// flowInit(self);  // Disabled flow cards

				console.log('SelectPlus: Init');
				initFlag = 0;
				var Signal = Homey.wireless('433').Signal;
				signal = new Signal('selectplus');
				signal.register(function( err, success ){
				    if(err != null){
				    	console.log('SelectPlus: Error:', err, 'success:', success);
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
				signal.on('payload', function(payload){
					payload = signal.bitArrayToString(payload);
					clearTimeout(released);
					released = setTimeout(function(){
						var devices = getDevicesByAddress(payload);
				        devices.forEach(function(device){
							self.realtime(device, 'onoff', false);
						});
					},500);
					if(debouncer.check(payload)) return;
			        var devices = getDevicesByAddress(payload);
			        devices.forEach(function(device){
			        	console.log('triggering', device);
						self.realtime(device, 'onoff', true);
					});
				});
			}

			//Refresh deviceList
			devices.forEach(function(device){
				addDevice(device);
			});
			callback();
		},

		deleted: function( device_data ) {
			var index = deviceList.indexOf(getDeviceByID(device_data.id))
			delete deviceList[index];
			console.log('SelectPlus: Device deleted')
		},

		pair: function( socket ) {
			socket.on('imitate1', function learn( data, callback ){
				signal.once('payload', function(payload){
					tempdata = {
						address: signal.bitArrayToString(payload)
					}
					socket.emit('remote_found');
				});
			});

			socket.on('done', function( data, callback ){
				console.log('done')
				var idNumber = Math.round(Math.random() * 0xFFFF);
				var id = "" + tempdata.address + idNumber; //id is for self.realtime
				//store data in our driver
				addDevice({
					id      : id,
					address : tempdata.address,
				});

				//Share data to front end
				callback(null, {
					name: __(driver),
					data: {
						id      : id,
						address : tempdata.address,
					}
				});
			});
		},
	};
	return self;
}

function getDeviceByID(idIn) {
	var matches = deviceList.filter(function(d){
		return d.id == idIn;
	});
	return matches ? matches[0] : null;
}

function getDevicesByAddress(addressIn) {
	//console.log('getting addresses:', addressIn, '\nin', deviceList);
	var matches = deviceList.filter(function(d){
		return d.address == addressIn;
	});
	return matches ? matches : null;
}

function addDevice(deviceIn) {
	deviceList.push(deviceIn);
	console.log('SelectPlus: Added device with address', deviceIn);
}

function bitStringToBitArray(str) {
    var result = [];
    for (var i = 0; i < str.length; i++)
        result.push(str.charAt(i) == 1 ? 1 : 0);
    return result;
};


function flowInit(self){
	//Actions
	Homey.manager('flow').on('action.triggerDoorbell', function( callback, args ){
		var device = getDeviceByID(args.device.id);
		var frame = new Buffer(bitStringToBitArray(device.address));
		signal.tx( frame, function( err, result ){
			if(err != null) callback(err, false);
			else{
				self.realtime(device, 'onoff', true);
				callback(null, true);
			}
	    });
	});
}

module.exports = {
	createDriver: createDriver
};




