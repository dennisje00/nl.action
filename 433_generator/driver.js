'use strict';

const DefaultDriver = require('../../../drivers/lib/driver');

module.exports = class Driver extends DefaultDriver {
	constructor(config) {
		super(config);
		this.on('frame', frame => this.updateState(frame.id, frame));
		this.on('new_state', this.updateRealtime.bind(this));
	}

	updateState(deviceId, frame) {
		this.setState(deviceId, Object.assign({}, this.getState(deviceId), frame));
	}

	updateRealtime(device, state, oldState) {
		if (Boolean(Number(state.state)) !== Boolean(Number(oldState.state))) {
			this.realtime(device, 'onoff', Boolean(Number(state.state)));
		}
	}

	getExports() {
		const exports = super.getExports();
		exports.capabilities = exports.capabilities || {};
		exports.capabilities.onoff = {
			get: (device, callback) => callback(null, Boolean(Number(this.getState(device).state))),
			set: (device, state, callback) => this.send(device, { state: state ? 1 : 0 }, callback),
		};
		return exports;
	}
};
