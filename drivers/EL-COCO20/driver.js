'use strict';
/* eslint-disable */
const config = {
	capabilities: ['onoff'],
	pair: {
		viewOrder: ['generic_choice',
			'generic_imitate',
			'generic_test_switch_2',
			'generic_choose_slave_2',
			'generic_dipswitch',
			'generic_test_switch',
			'generic_choose_slave',
			'generic_done'
		],
		views: [{
			template: '../lib/pair/choice.html',
			options: {
				title: 'pair.begin',
				buttons: [{
					name: 'pair.copy_remote',
					view: 'generic_imitate'
				}, {
					name: 'pair.set_dipswitch',
					view: 'generic_dipswitch'
				}],
				prepend: [],
				append: [],
				svg: '<svg></svg>',
				body: 'pair.choice.body',
				svgWidth: '80vw',
				svgHeight: '65vh'
			},
			id: 'generic_choice'
		}, {
			template: '../lib/pair/imitate.html',
			options: {
				title: 'pair.begin',
				prepend: [],
				append: [],
				svg: '../../433_generator/eurodomest/assets/remote/remote_pair.svg',
				body: 'pair.imitate.body',
				svgWidth: '80vw',
				svgHeight: '70vh',
				initWithDeviceData: false,
				previous: true,
				next: false
			},
			id: 'generic_imitate'
		}, {
			template: '../lib/pair/test_switch.html',
			options: {
				title: 'pair.test_remote',
				next: 'generic_done',
				initWithDeviceData: true,
				sendToggleOnInit: false,
				prepend: [],
				append: [],
				svg: '../../assets/433_generator/images/light.svg',
				body: 'pair.test_switch.body',
				svgWidth: '80vw',
				svgHeight: '70vh',
				previous: true
			},
			id: 'generic_test_switch_2'
		}, {
			template: 'choose_slave',
			options: {
				previous: true,
				next: true,
				prepend: '',
				append: ''
			},
			id: 'generic_choose_slave_2'
		}, {
			template: '../lib/pair/dipswitch.html',
			options: {
				title: 'test',
				prepend: [],
				append: [],
				dipswitchList: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
				body: 'pair.dipswitch.body',
				svgWidth: '80vw',
				svgHeight: '70vh',
				previous: true,
				next: true
			},
			id: 'generic_dipswitch'
		}, {
			template: '../lib/pair/test_switch.html',
			options: {
				title: 'pair.test_remote',
				prepend: [],
				append: [],
				svg: '../../assets/433_generator/images/light.svg',
				body: 'pair.test_switch.body',
				svgWidth: '80vw',
				svgHeight: '70vh',
				initWithDeviceData: false,
				previous: true,
				next: true,
				sendToggleOnInit: true
			},
			id: 'generic_test_switch'
		}, {
			template: 'choose_slave',
			options: {
				previous: true,
				next: true,
				prepend: '',
				append: ''
			},
			id: 'generic_choose_slave'
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
	images: {},
	id: 'EL-COCO20',
	class: 'socket',
	driver: '../../433_generator/impuls/drivers/impuls.js',
	signal: {
		sof: [],
		eof: [190],
		words: [
			[190, 570, 190, 570],
			[570, 190, 570, 190],
			[190, 570, 570, 190]
		],
		interval: 5890,
		repetitions: 20,
		sensitivity: 0.7,
		minimalLength: 12,
		maximalLength: 12
	},
	name: 'EL-COCO20',
	icon: '../../433_generator/impuls/assets/EL-COCO20/icon.svg'
};
const Driver = require(config.driver);
const driver = new Driver(config);
module.exports = Object.assign(
  {},
	driver.getExports(), 
	{ init: (devices, callback) => driver.init(module.exports, devices, callback) }
);
