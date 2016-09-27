'use strict';

const Driver = require('../../driver');
const Signal = require('../../../drivers/lib/signal');

const unitMap = new Map([
	[
		'0010',
		new Map([['0011', 0], ['0001', 0], ['1110', 0], ['0110', 0], ['0101', 1], ['0111', 1], ['1101', 1], ['1000', 1]]),
	],
	[
		'0001',
		new Map([['0111', 0], ['0101', 0], ['0011', 0], ['1010', 0], ['0110', 1], ['1110', 1], ['0001', 1], ['0100', 1]]),
	],
	[
		'1101',
		new Map([['0011', 0], ['0111', 0], ['1101', 0], ['0101', 0], ['1110', 1], ['0100', 1], ['0110', 1], ['1100', 1]]),
	],
	[
		'0110',
		new Map([['0011', 0], ['0001', 0], ['1110', 0], ['0110', 0], ['0101', 1], ['0111', 1], ['1101', 1], ['1000', 1]]),
	],
	[
		'1000',
		new Map([['1011', 0], ['0111', 0], ['1101', 0], ['1100', 0], ['0011', 1], ['1010', 1], ['1111', 1], ['0001', 1]]),
	],
]);

const dimMap = ['0001', '0000', '0011', '0010', '0101', '0100', '0111', '0110'];

module.exports = class Promax extends Driver {
	constructor(config) {
		super(config);

		this.txSignal = new Signal(this.config.txSignal, this.txPayloadToData.bind(this), 0);
		this.txSignal.on('data', this.emit.bind(this, 'txFrame'));
	}

	txPayloadToData(payload) {
		const unit = payload.slice(0, 2).concat(payload.slice(-2)).join('');
		const repetition = payload.slice(-6, -2).join('');
		if (payload.slice(2, 6).join('') === '1001' && unitMap.has(unit) && unitMap.get(unit).has(repetition)) {
			return {
				id: payload.join(''),
				address: payload.slice(6, 22).join(''),
				unit,
				repetition,
				state: unitMap.get(unit).get(repetition),
			};
		}
		return null;
	}

	generateData() {
		const data = {
			address: Math.random().toString(2).substr(2, 26),
			group: 0,
			channel: Math.random().toString(2).substr(2, 2),
			unit: Math.random().toString(2).substr(2, 2),
			state: 0,
		};
		data.id = `${data.address}:${data.channel}:${data.unit}`;
		return data;
	}

	payloadToData(payload) { // Convert received data to usable variables
		if (payload.length === 32) {
			const data = {
				address: this.bitArrayToString(payload.slice(0, 26)),
				group: payload[26],
				channel: this.bitArrayToString(payload.slice(28, 30)),
				unit: this.bitArrayToString(payload.slice(30, 32)),
				state: payload[27],
			};
			data.id = `${data.address}:${data.channel}:${data.unit}`;
			return data;
		}
		return null;
	}

	dataToPayload(data) {
		if (
			data &&
			data.address && data.address.length === 26 &&
			data.channel && data.channel.length === 2 &&
			data.unit && data.unit.length === 2 &&
			typeof data.group !== 'undefined' &&
			typeof data.state !== 'undefined'
		) {
			const address = this.bitStringToBitArray(data.address);
			const channel = this.bitStringToBitArray(data.channel);
			const unit = this.bitStringToBitArray(data.unit);
			return address.concat(Number(data.group), Number(data.state), channel, unit);
		}
		return null;
	}

	generateDevice(data) {
		data.group = 0;
		data.state = Number(data.state) ? 1 : 0;
		delete data.dim;
		return super.generateDevice(data);
	}

	send(device, data, callback) {
		callback = typeof callback === 'function' ? callback : () => null;
		data = Object.assign({}, this.getDevice(device, true) || device.data || device, data);
		this.emit('before_send', data);

		const payload = this.dataToPayload(data);
		if (!payload) return callback(true);
		const frame = payload.map(Number);
		const dataCheck = this.payloadToData(frame);
		if (
			frame.find(isNaN) || !dataCheck ||
			dataCheck.constructor !== Object || !dataCheck.id ||
			dataCheck.id !== this.getDeviceId(device)
		) {
			this.emit('error', `Incorrect frame from dataToPayload(${JSON.stringify(data)}) => ${frame} => ${
				JSON.stringify(dataCheck)}`);
			return callback(true);
		}
		this.emit('send', data);
		this.signal.emit('payload_send', payload);

		return this.txSignal.register().then(() => {
			const txDataObjects = data.tx[Number(data.state) || typeof data.dim === 'number' ? 'on' : 'off'];
			return Promise.all(
				Object.keys(txDataObjects).map(repetition => {
					const txData = txDataObjects[repetition];
					const dim = typeof data.dim === 'number' ? dimMap[Math.round(data.dim * 7)] : '1001';
					const txFrame = txData.unit.slice(0, 2) + dim + txData.address + repetition + txData.unit.slice(-2);
					return this.txSignal.send(txFrame.split('').map(Number));
				})
			).then(result => {
				if (callback) callback(null, result);
				this.emit('after_send', data);
				this.txSignal.unregister();
			}).catch(err => {
				if (callback) callback(err);
				this.emit('error', err);
				this.txSignal.unregister();
				throw err;
			});
		});
	}

	pair(socket) {
		super.pair(socket);
		const txFrameListener = (frame) => {
			if (this.pairingDevice && this.pairingDevice.data) {
				if (!this.pairingDevice.data.tx || !this.pairingDevice.data.tx.unit) {
					this.pairingDevice.data.tx = {
						unit: frame.unit,
						on: {},
						off: {},
					};
				}
				if (
					this.pairingDevice.data.tx.unit === frame.unit
					&& !this.pairingDevice.data.tx[Number(frame.state) ? 'on' : 'off'][frame.repetition]
				) {
					this.pairingDevice.data.tx[Number(frame.state) ? 'on' : 'off'][frame.repetition] = frame;
					socket.emit('deviceDataUpdate', this.pairingDevice);
				}
			}
		};

		this.on('txFrame', txFrameListener);

		socket.on('clear_repetitions', (data, callback) => {
			if (this.pairingDevice && this.pairingDevice.data) {
				this.pairingDevice.data.tx = {
					unit: null,
					on: {},
					off: {},
				};
			}
			callback(null, this.pairingDevice);
		});

		socket.on('disconnect', () => {
			this.removeListener('txFrame', txFrameListener);
		});
	}

	registerSignal(callback) {
		callback = typeof callback === 'function' ? callback : (() => null);
		return Promise.all([super.registerSignal(), this.txSignal.register()])
			.then(() => callback(null, true))
			.catch(err => {
				callback(err);
				throw err;
			});
	}

	unregisterSignal() {
		if (super.unregisterSignal()) {
			this.txSignal.unregister();
		}
	}

	getExports() {
		const exports = super.getExports();
		exports.capabilities = exports.capabilities || {};
		return exports;
	}
};
