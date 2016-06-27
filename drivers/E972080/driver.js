'use strict';
/* eslint-disable */
const config = {
	class: 'other',
	pair: {
		viewOrder: ['generic_imitate', 'generic_test_remote', 'generic_done'],
		views: [{
			template: '../lib/pair/imitate.html',
			options: {
				title: 'deviceClasses.remote.pair.generic_imitate.title',
				prepend: [],
				append: [],
				body: 'deviceClasses.remote.pair.generic_imitate.body',
				svg: '../../433_generator/eurodomest/assets/remote/remote_pair.svg',
				svgWidth: '80vw',
				svgHeight: '70vh',
				initWithDeviceData: false,
				previous: true,
				next: false
			},
			id: 'generic_imitate'
		}, {
			template: '../lib/pair/test_remote.html',
			options: {
				title: 'views.generic_test_remote.title',
				prepend: [],
				append: [],
				body: 'views.generic_test_remote.body',
				svg: '../../433_generator/eurodomest/assets/remote/remote.svg',
				svgWidth: '80vw',
				svgHeight: '70vh',
				initWithDeviceData: false,
				previous: true,
				next: true
			},
			id: 'generic_test_remote'
		}, {
			template: '../lib/pair/done.html',
			options: {
				title: 'done!',
				prepend: [],
				append: []
			},
			id: 'generic_done'
		}]
	},
	images: {
		small: '../../433_generator/eurodomest/assets/images/small.png',
		large: '../../433_generator/eurodomest/assets/images/large.png'
	},
	id: 'E972080',
	actions: [{
		id: 'E972080:send',
		title: 'deviceClasses.remote.triggers.send.title',
		args: [{
			name: 'unit',
			type: 'dropdown',
			values: [{
				id: '00001',
				label: 'deviceClasses.remote.triggers.received.button_1'
			}, {
				id: '00100',
				label: 'deviceClasses.remote.triggers.received.button_2'
			}, {
				id: '00101',
				label: 'deviceClasses.remote.triggers.received.button_3'
			}, {
				id: '10000',
				label: 'deviceClasses.remote.triggers.received.button_4'
			}]
		}, {
			name: 'state',
			type: 'dropdown',
			values: [{
				id: '1',
				label: 'generic.on'
			}, {
				id: '0',
				label: 'generic.off'
			}]
		}, {
			name: 'device',
			type: 'device',
			filter: 'driver_id=E972080'
		}]
	}],
	driver: '../../433_generator/eurodomest/drivers/remote.js',
	signal: {
		sof: [],
		eof: [295],
		words: [
			[295, 885],
			[885, 295]
		],
		interval: 9565,
		repetitions: 20,
		sensitivity: 0.7,
		minimalLength: 24,
		maximalLength: 24
	},
	triggers: [{
		id: 'E972080:received',
		title: 'deviceClasses.remote.triggers.received.title',
		args: [{
			name: 'unit',
			type: 'dropdown',
			values: [{
				id: '111',
				label: 'deviceClasses.remote.triggers.received.button_1'
			}, {
				id: '110',
				label: 'deviceClasses.remote.triggers.received.button_2'
			}, {
				id: '101',
				label: 'deviceClasses.remote.triggers.received.button_3'
			}, {
				id: '011',
				label: 'deviceClasses.remote.triggers.received.button_4'
			}, {
				id: '000',
				label: 'deviceClasses.remote.triggers.received.button_G'
			}]
		}, {
			name: 'state',
			type: 'dropdown',
			values: [{
				id: '1',
				label: 'generic.on'
			}, {
				id: '0',
				label: 'generic.off'
			}]
		}, {
			name: 'device',
			type: 'device',
			filter: 'driver_id=E972080'
		}]
	}],
	name: 'Eurodomest remote',
	icon: '../../433_generator/eurodomest/assets/remote/icon.svg'
};
const Driver = require(config.driver);
const driver = new Driver(config);
module.exports = Object.assign(
  {},
	driver.getExports(), 
	{ init: (devices, callback) => driver.init(module.exports, devices, callback) }
);
