'use strict';

const Driver = require('../../driver');

module.exports = class Eurodomest extends Driver {
	generateData() {
		const data = {
			address: this.generateRandomBitString(20),
			unit: this.generateRandomBitString(3),
			state: 0,
		};
		data.unit = data.unit === '000' || data.unit === '001' ? '010' : data.unit;
		data.id = `${data.address}:${data.unit}`;
		return data;
	}

	payloadToData(payload) { // Convert received data to usable variables
		if (payload && payload.length === 24) {
			const data = {
				address: this.bitArrayToString(payload.slice(0, 20)),
				unit: this.bitArrayToString(payload.slice(20, 23)),
				state: payload[23],
			};
			if (data.unit === '000') {
				data.state = 0;
			} else if (data.unit === '001') {
				data.unit = '000';
				data.state = 1;
			}
			data.id = `${data.address}:${data.unit}`;
			return data;
		}
		return null;
	}

	dataToPayload(data) {
		if (
			data &&
			data.unit && data.unit.length === 3 &&
			data.address && data.address.length === 20 &&
			typeof data.state !== 'undefined'
		) {
			if (data.unit === '000') {
				if (data.state === 1) {
					data.unit = '001';
				}
				data.state = Number(data.state) ? 0 : 1;
			}
			const address = this.bitStringToBitArray(data.address);
			const unit = this.bitStringToBitArray(data.unit);
			return address.concat(unit, Number(data.state));
		}
		return null;
	}
};
