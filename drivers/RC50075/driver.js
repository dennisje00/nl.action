'use strict';
/* eslint-disable */
const config = {
	class: 'other',
	pair: {
		viewOrder: ['generic_imitate', 'generic_test_remote', 'generic_done'],
		views: [{
			template: '../lib/pair/imitate.html',
			options: {
				title: 'deviceClasses.generic_remote.views.generic_imitate.title',
				body: 'deviceClasses.generic_remote.views.generic_imitate.body',
				prepend: [],
				append: [],
				svg: '../../433_generator/promax/assets/remote/remote_pair.svg',
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
			template: '../lib/pair/test_remote.html',
			options: {
				body: 'devices.promax.views.generic_test_remote.body',
				svg: '../../433_generator/promax/assets/remote/remote.svg',
				prepend: [],
				append: [],
				title: 'views.generic_test_remote.title',
				svgWidth: '80vw',
				svgHeight: '70vh',
				initWithDeviceData: false,
				previous: true,
				next: true
			},
			prepend: ['../../assets/433_generator/css/styles.css',
				'../../assets/433_generator/css/svg.css',
				'../../assets/433_generator/js/svghighlighter.js'
			],
			append: [],
			id: 'generic_test_remote'
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
		small: '../../433_generator/promax/assets/images/small.png',
		large: '../../433_generator/promax/assets/images/large.png'
	},
	id: 'RC50075',
	driver: '../../433_generator/promax/drivers/remote.js',
	signal: 'kaku',
	txSignal: 'flamingo',
	triggers: [{
		id: 'RC50075:received',
		title: '433_generator.generic.button_pressed',
		args: [{
			name: 'unit',
			type: 'dropdown',
			values: [{
				id: '00001',
				label: '433_generator.generic.buttons.1'
			}, {
				id: '00010',
				label: '433_generator.generic.buttons.2'
			}, {
				id: '00011',
				label: '433_generator.generic.buttons.3'
			}, {
				id: '00100',
				label: '433_generator.generic.buttons.4'
			}, {
				id: '00000',
				label: '433_generator.generic.buttons.G'
			}]
		}, {
			name: 'state',
			type: 'dropdown',
			values: [{
				id: '1',
				label: '433_generator.generic.on'
			}, {
				id: '0',
				label: '433_generator.generic.off'
			}]
		}, {
			name: 'device',
			type: 'device',
			filter: 'driver_id=RC50075'
		}]
	}],
	name: 'devices.promax.RC50075.name',
	icon: '../../433_generator/promax/assets/remote/icon.svg'
};
const Driver = require(config.driver);
const driver = new Driver(config);
module.exports = Object.assign(
  {},
	driver.getExports(), 
	{ init: (devices, callback) => driver.init(module.exports, devices, callback) }
);
