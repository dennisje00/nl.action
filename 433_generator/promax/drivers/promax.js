'use strict';

const Driver = require('../../driver');
const SignalManager = Homey.wireless('433').Signal;
const units = ['00001', '00100', '00101', '10000'];

module.exports = class Promax extends Driver {
	constructor(config) {
		super(config);
		this.on('frame', this.simulateGroupFrame.bind(this));
	}

	generateData() {
		const data = {
			address: `${Math.random().toString(2).substr(2, 11)}00010`,
			unit: units[Math.round(Math.random() * 3)],
			group: 0,
			state: 1,
		};

		data.id = `${data.address}:${data.group}:${data.unit}`;
		return data;
	}

	payloadToData(payload) { // Convert received data to usable variables
		if (payload && payload.length === 24 && payload[19] !== payload[20]) {
			const data = {
				address: SignalManager.bitArrayToString(
					payload.slice(0, 11).concat(payload.slice(16, 19), payload.slice(21, 23))
				),
				group: payload[20],
				unit: SignalManager.bitArrayToString(payload.slice(11, 16)),
				state: payload[23],
			};
			data.id = `${data.address}:${data.group}:${data.unit}`;
			return data;
		}
		return null;
	}

	generateDevice(data) {
		data.group = 0;
		return super.generateDevice(data);
	}

	dataToPayload(data) {
		if (
			data &&
			data.address && data.address.length === 16 &&
			(Number(data.group) || (data.unit && data.unit.length === 5)) &&
			typeof data.group !== 'undefined' &&
			typeof data.state !== 'undefined'
		) {
			if (Number(data.group)) {
				data.unit = '00001';
			}

			const address = SignalManager.bitStringToBitArray(data.address);
			const unit = SignalManager.bitStringToBitArray(data.unit);
			return address.slice(0, 11).concat(
				unit, address.slice(11, 14),
				Number(data.group) ? 0 : 1,
				Number(data.group),
				address.slice(14, 16),
				Number(data.state)
			);
		}
		return null;
	}

	simulateGroupFrame(frame) {
		if (frame && Number(frame.group)) {
			units.forEach(unit =>
				this.emit('frame', Object.assign({}, frame, { group: 0, unit, id: `${frame.address}:0:${unit}` }))
			);
		}
	}
};
