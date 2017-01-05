'use strict';

const Driver = require('../../driver');

module.exports = class Selectplus extends Driver {

	generateData() {
		const data = {
			address: this.generateRandomBitString(16),
			state: 0,
		};
		data.id = data.address;
		return data;
	}

	payloadToData(payload) { // Convert received data to usable variables
		if (payload && payload.length === 17) {
			const data = {
				address: this.bitArrayToString(payload.slice(0, 16)),
				state: payload[16],
			};
			data.id = data.address;
			return data;
		}
		return null;
	}

	dataToPayload(data) {
		if (data && data.address && data.address.length === 16) {
			const address = this.bitStringToBitArray(data.address);
			return address.concat(1);
		}
		return null;
	}
};
