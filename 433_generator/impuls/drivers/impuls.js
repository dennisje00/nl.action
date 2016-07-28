'use strict';

const Driver = require('../../driver');
const SignalManager = Homey.wireless('433').Signal;

module.exports = class Impuls extends Driver {
	dipswitchesToData(dipswitches) {
		const data = {
			address: dipswitches.slice(0, 5).map(bit => (bit ? 1 : 2)).join(''),
			unit: dipswitches.slice(5, 10).map(bit => (bit ? 0 : 2)).join(''),
			state: 1,
		};
		data.id = `${data.address}:${data.unit}`;
		return data;
	}

	payloadToData(payload) { // Convert received data to usable variables
		if (
			payload &&
			payload.length === 12 &&
			payload.slice(0, 5).join('').indexOf('0') === -1 &&
			payload.slice(5, 10).join('').indexOf('1') === -1 &&
			payload[10] !== payload[11]
		) {
			const data = {
				address: SignalManager.bitArrayToString(payload.slice(0, 5)),
				unit: SignalManager.bitArrayToString(payload.slice(5, 10)),
				state: payload[10] ? 1 : 0,
			};
			data.id = `${data.address}:${data.unit}`;
			return data;
		}
		return null;
	}

	dataToPayload(data) {
		if (
			data &&
			data.address &&
			data.address.length === 5 &&
			data.unit &&
			data.unit.length === 5 &&
			typeof data.state !== 'undefined'
		) {
			const address = data.address.split('').map(Number);
			const unit = data.unit.split('').map(Number);
			return address.concat(unit, Number(data.state) ? 2 : 0, Number(data.state) ? 0 : 2);
		}
		return null;
	}
};
