'use strict';
/* eslint-disable */
const config = {
	capabilities: ['onoff'],
	pair: {
		viewOrder: ['generic_choice',
			'generic_imitate',
			'generic_test_switch_2',
			'generic_choose_slave_2',
			'generic_program',
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
					name: 'pair.create_signal',
					view: 'generic_program'
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
				next: true,
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
				next: 'generic_done',
				prepend: [],
				append: [],
				previous: true
			},
			id: 'generic_choose_slave_2'
		}, {
			template: '../lib/pair/program.html',
			options: {
				title: 'test',
				previous: 'generic_choice',
				prepend: [],
				append: [],
				svg: '../../433_generator/eurodomest/assets/socket/socket.svg',
				body: 'pair.program.body',
				svgWidth: '80vw',
				svgHeight: '70vh',
				initWithDeviceData: false,
				next: true
			},
			id: 'generic_program'
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
	images: {
		small: '../../433_generator/eurodomest/assets/images/small.png',
		large: '../../433_generator/eurodomest/assets/images/large.png'
	},
	id: 'eurodomest-socket',
	class: 'socket',
	driver: '../../433_generator/eurodomest/drivers/eurodomest.js',
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
	name: 'Eurodomest socket',
	icon: '../../433_generator/eurodomest/assets/socket/icon.svg'
};
const Driver = require(config.driver);
const driver = new Driver(config);
module.exports = Object.assign(
  {},
	driver.getExports(), 
	{ init: (devices, callback) => driver.init(module.exports, devices, callback) }
);
