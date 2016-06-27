'use strict';

const Driver = require('../../driver');
const SignalManager = Homey.wireless('433').Signal;

module.exports = class Selectplus extends Driver {

	// TODO find out what the signal means instead of using the whole signal as address
	generateData() {
		const data = {
			address: Math.random().toString(2).substr(2, 16),
			state: 1,
		};
		data.id = data.address;
		return data;
	}

	// TODO find out what the signal means instead of using the whole signal as address
	payloadToData(payload) { // Convert received data to usable variables
		if (payload && payload.length === 17) {
			const data = {
				address: SignalManager.bitArrayToString(payload.slice(0, 16)),
				state: payload[16],
			};
			data.id = data.address;
			return data;
		}
		return null;
	}

	// TODO find out what the signal means instead of using the whole signal as address
	dataToPayload(data) {
		if (
			data &&
			data.address &&	data.address.length === 16
		) {
			const address = SignalManager.bitStringToBitArray(data.address);
			return address.concat(1);
		}
		return null;
	}
};
