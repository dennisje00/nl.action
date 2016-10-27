'use strict';

const Selectplus = require('./selectplus');

module.exports = class Doorbell extends Selectplus {
	constructor(config) {
		super(config);
		this.toggleTimeout = {};
	}

	updateState(frame) {
		super.updateState(frame);
		this.sendToggleAfterTimeout(frame.id, frame);
	}

	updateRealtime(device, state, oldState) {
		if (state.state !== oldState.state) {
			this.realtime(device, 'generic_alarm', Boolean(Number(state.state)));
		}
	}

	onTriggerReceived(callback, args, state) {
		if (Number(args.state)) {
			super.onTriggerReceived(callback, args, state);
		} else {
			callback(null, false);
		}
	}

	sendToggleAfterTimeout(deviceId, frame) {
		if (
			Number(frame.state) &&
			(this.getDevice(deviceId) || this.pairingDevice && this.pairingDevice.data.id === deviceId)
		) {
			clearTimeout(this.toggleTimeout[deviceId]);
			this.toggleTimeout[deviceId] = setTimeout(
				() => {
					const device = this.getDevice(deviceId, true);
					if (device) this.emit('frame', Object.assign({}, this.getDevice(device, true), { state: 0 }));
				},
				4000
			);
		}
	}

	generateDevice(data) {
		data.state = 1;
		return super.generateDevice(data);
	}

	getExports() {
		const exports = super.getExports();
		exports.capabilities = {};
		exports.capabilities.generic_alarm = {
			get: (device, callback) => callback(null, Boolean(Number(this.getState(device).state))),
			set: (device, state, callback) => this.send(device, { state: state ? 1 : 0 }, callback),
		};

		return exports;
	}
}
;
