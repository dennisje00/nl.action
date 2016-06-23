'use strict';

const Promax = require('./promax');

module.exports = class Remote extends Promax {
	payloadToData(payload) { // Convert received data to usable variables
		const data = super.payloadToData(payload);
		if (!data) return data;

		data.id = data.address;
		return data;
	}

	onTriggerReceived(callback, args, state) {
		if (args.unit === 'g') {
			args.unit = '00001';
			args.group = 1;
		} else {
			args.group = 0;
		}
		super.onTriggerReceived(callback, args, state);
	}

	onActionSend(callback, args) {
		if (args.unit === 'g') {
			args.unit = '00001';
			args.group = 1;
		} else {
			args.group = 0;
		}
		super.onActionSend(callback, args);
	}
};
