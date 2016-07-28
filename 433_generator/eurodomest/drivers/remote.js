'use strict';

const Eurodomest = require('./eurodomest');

module.exports = class Remote extends Eurodomest {
	payloadToData(payload) { // Convert received data to usable variables
		const data = super.payloadToData(payload);
		if (!data) return data;

		data.id = data.address;
		return data;
	}

	simulateGroupFrame(){
		// A remote does not need to simulate signals on group button press
		return null;
	}
};
