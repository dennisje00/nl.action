var deviceList = [];
var tempdata = {};
var initFlag = 1;
var tempdata = {};
var buttonTimeout;
var buttonFlag;
var lastTriggered;

var signal;

function createDriver(driver, settable, button) {
	var self = {
		init: function( devices, callback ) {
			//Define signal
			if(initFlag){
				console.log('SelectPlus: Init');
				initFlag = 0;
				var Signal = Homey.wireless('433').Signal;
				signal = new Signal({   
					sof: [335],
					eof: [],
				   	words: [
				        [1250, 335],	// 0
				       	[400, 1060] 	// 1
				    ],
				    interval: 6580,
				    sensitivity: 0.8,
				    repetitions: 20,
				    minimalLength: 17,
				    maximalLength: 17
				});	
				signal.register(function( err, success ){
				    if(err != null){
				    	console.log('SelectPlus: Error:', err, 'success:', success);
				    }
				});
				
				//Start receiving
				signal.on('payload', function(payload){
					var rxAddress = signal.bitArrayToString(payload)
			        var device = getDevicesByAddress(rxAddress)
			        if(device[0]){
			        	triggerDoorbell(self, device[0]);
			        }
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
	deviceList.push({
		id       : deviceIn.id,
		address  : deviceIn.address,
	});
	console.log('SelectPlus: Added device with address', deviceIn.address);
}

module.exports = {
	createDriver: createDriver
};

function triggerDoorbell(self, device){
	if(!buttonFlag){
		lastTriggered = device.address;
		self.realtime(self, 'onoff', true);
	}
	buttonFlag = 1;
	clearTimeout(buttonTimeout);
	buttonTimeout = setTimeout(function(){ 
		buttonFlag = 0;;
		self.realtime(self, 'onoff', false);	
	}, 2000);	
}




