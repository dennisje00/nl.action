'use strict';

const Impuls = require('./impuls');

module.exports = class Remote extends Impuls {
	payloadToData(payload) { // Convert received data to usable variables
		const data = super.payloadToData(payload);
		if (!data) return data;

		data.id = data.address;
		return data;
	}
};
