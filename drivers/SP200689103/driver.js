'use strict';
/* eslint-disable */
const config = {
	capabilities: ['alarm_generic'],
	pair: {
		viewOrder: ['generic_imitate', 'generic_test_button', 'generic_done'],
		views: [{
			template: '../lib/pair/imitate.html',
			options: {
				svg: '../../433_generator/selectplus/assets/doorbell/doorbell.svg',
				prepend: [],
				append: [],
				title: 'views.generic_imitate.title',
				body: 'views.generic_imitate.body',
				svgWidth: '80vw',
				svgHeight: '70vh',
				initWithDeviceData: false,
				previous: true,
				next: false
			},
			prepend: ['../../assets/433_generator/css/styles.css',
				'../../assets/433_generator/css/svg.css',
				'../../assets/433_generator/js/svghighlighter.js'
			],
			append: [],
			id: 'generic_imitate'
		}, {
			template: '../lib/pair/test_button.html',
			options: {
				svg: '../../assets/433_generator/images/bell.svg',
				prepend: [],
				append: [],
				title: 'views.generic_test_button.title',
				body: 'views.generic_test_button.body',
				svgWidth: '80vw',
				svgHeight: '70vh',
				initWithDeviceData: false,
				previous: true,
				next: true,
				sendToggleOnInit: true,
				buttonLabel: 'test'
			},
			prepend: ['../../assets/433_generator/css/styles.css',
				'../../assets/433_generator/css/svg.css',
				'../../assets/433_generator/js/svghighlighter.js',
				'../../assets/433_generator/css/styles.css',
				'../../assets/433_generator/css/svg.css',
				'../../assets/433_generator/js/svghighlighter.js',
				'../../assets/433_generator/css/styles.css',
				'../../assets/433_generator/css/svg.css',
				'../../assets/433_generator/js/svghighlighter.js'
			],
			append: [],
			id: 'generic_test_button'
		}, {
			template: '../lib/pair/done.html',
			options: {
				title: 'views.generic_done.title',
				prepend: '',
				append: ''
			},
			prepend: [],
			append: [],
			id: 'generic_done'
		}]
	},
	images: {
		small: '../../433_generator/selectplus/assets/images/small.png',
		large: '../../433_generator/selectplus/assets/images/large.png'
	},
	id: 'SP200689103',
	driver: '../../433_generator/selectplus/drivers/doorbell.js',
	signal: 'selectplus',
	class: 'doorbell',
	debounceTimeout: 4000,
	triggers: [{
		id: 'SP200689103:received',
		title: 'deviceClasses.selectplus.selectplus_doorbell.triggers.received.title',
		args: [{
			name: 'device',
			type: 'device',
			filter: 'driver_id=SP200689103'
		}]
	}],
	actions: [{
		id: 'SP200689103:send',
		title: 'deviceClasses.selectplus.selectplus_doorbell.actions.received.title',
		args: [{
			name: 'device',
			type: 'device',
			filter: 'driver_id=SP200689103'
		}]
	}],
	name: 'devices.selectplus.SP200689103.name',
	icon: '../../433_generator/selectplus/assets/doorbell/doorbell.svg'
};
const Driver = require(config.driver);
const driver = new Driver(config);
module.exports = Object.assign(
  {},
	driver.getExports(), 
	{ init: (devices, callback) => driver.init(module.exports, devices, callback) }
);
