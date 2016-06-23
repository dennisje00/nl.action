'use strict';
/* eslint-disable */
const config = {
	driver: '../../433_generator/selectplus/drivers/doorbell.js',
	images: {
		small: '../../433_generator/selectplus/assets/images/small.png',
		large: '../../433_generator/selectplus/assets/images/large.png'
	},
	signal: {
		sof: [335],
		eof: [],
		words: [
			[1250, 335],
			[400, 1060]
		],
		interval: 6580,
		sensitivity: 0.8,
		repetitions: 20,
		minimalLength: 17,
		maximalLength: 17
	},
	pair: {
		viewOrder: ['generic_imitate', 'generic_test_button', 'generic_done'],
		views: [{
			template: '../lib/pair/imitate.html',
			options: {
				title: 'doorbell.imitate',
				svg: '../../433_generator/selectplus/assets/doorbell/doorbell.svg',
				prepend: [],
				append: [],
				body: 'pair.imitate.body',
				svgWidth: '80vw',
				svgHeight: '70vh',
				initWithDeviceData: false,
				previous: true,
				next: false
			},
			id: 'generic_imitate'
		}, {
			template: '../lib/pair/test_button.html',
			options: {
				title: 'doorbell.test',
				svg: '../../433_generator/selectplus/assets/doorbell/bell.svg',
				prepend: [],
				append: [],
				body: 'pair.test_button.body',
				svgWidth: '80vw',
				svgHeight: '70vh',
				initWithDeviceData: false,
				previous: true,
				next: true,
				sendToggleOnInit: true,
				buttonLabel: 'test'
			},
			id: 'generic_test_button'
		}, {
			template: '../lib/pair/done.html',
			options: {
				title: 'done',
				prepend: [],
				append: []
			},
			id: 'generic_done'
		}]
	},
	id: 'SP200689103',
	class: 'doorbell',
	capabilities: ['alarm_generic'],
	debounceTimeout: 3000,
	triggers: [{
		id: 'SP200689103:received',
		title: 'trigger.received.title.doorbell',
		args: [{
			name: 'device',
			type: 'device',
			filter: 'driver_id=SP200689103'
		}]
	}],
	actions: [{
		id: 'SP200689103:send',
		title: 'action.send.title.doorbell',
		args: [{
			name: 'device',
			type: 'device',
			filter: 'driver_id=SP200689103'
		}]
	}],
	name: 'Selectplus doorbell',
	icon: '../../433_generator/selectplus/assets/doorbell/doorbell.svg'
};
const Driver = require(config.driver);
const driver = new Driver(config);
module.exports = Object.assign(
  {},
	driver.getExports(), 
	{ init: (devices, callback) => driver.init(module.exports, devices, callback) }
);
