'use strict';

const Driver = require('../../driver');
const SignalManager = Homey.wireless('433').Signal;

module.exports = class Eurodomest extends Driver {
	generateData() {
		const data = {
			address: Math.random().toString(2).substr(2, 20),
			unit: `0${(Math.round(Math.random() * 6) + 2).toString(2)}`.substr(-3, 3),
			state: 1,
		};
		data.id = `${data.address}:${data.unit}`;
		return data;
	}

	payloadToData(payload) { // Convert received data to usable variables
		if (payload && payload.length === 24) {
			const data = {
				address: SignalManager.bitArrayToString(payload.slice(0, 20)),
				unit: SignalManager.bitArrayToString(payload.slice(20, 23)),
				state: payload.slice(23, 24)[0],
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
			const address = SignalManager.bitStringToBitArray(data.address);
			const unit = SignalManager.bitStringToBitArray(data.unit);
			return address.concat(unit, Number(data.state));
		}
		return null;
	}
};
