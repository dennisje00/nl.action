'use strict';
/* eslint-disable */
const config = {
	capabilities: ['onoff'],
	pair: {
		viewOrder: ['generic_imitate',
			'copy_repetitions',
			'generic_test_switch_2',
			'generic_choose_slave_2',
			'generic_done'
		],
		views: [{
			template: '../lib/pair/imitate.html',
			options: {
				title: 'deviceClasses.generic_socket.views.generic_imitate.title',
				body: 'deviceClasses.generic_socket.views.generic_imitate.body',
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
			template: '../../433_generator/promax/views/copy_repetitions.html',
			options: {
				title: 'views.copy_repetitions.title',
				body: 'views.copy_repetitions.body',
				previous: true,
				next: false,
				prepend: '',
				append: ''
			},
			prepend: [],
			append: [],
			id: 'copy_repetitions'
		}, {
			template: '../lib/pair/test_switch.html',
			options: {
				next: true,
				initWithDeviceData: true,
				sendToggleOnInit: false,
				prepend: [],
				append: [],
				title: 'deviceClasses.generic_socket.views.generic_test_switch.title',
				body: 'deviceClasses.generic_socket.views.generic_test_switch_2.body',
				svg: '../../assets/433_generator/images/light.svg',
				svgWidth: '80vw',
				svgHeight: '70vh',
				previous: true
			},
			prepend: ['../../assets/433_generator/css/styles.css',
				'../../assets/433_generator/css/svg.css',
				'../../assets/433_generator/js/svghighlighter.js',
				'../../assets/433_generator/css/styles.css',
				'../../assets/433_generator/css/svg.css',
				'../../assets/433_generator/js/svghighlighter.js'
			],
			append: [],
			id: 'generic_test_switch_2'
		}, {
			template: 'choose_slave',
			options: {
				next: 'generic_done',
				prepend: [],
				append: [],
				previous: true
			},
			prepend: [],
			append: [],
			id: 'generic_choose_slave_2'
		}, {
			template: '../lib/pair/done.html',
			options: {
				title: 'done',
				prepend: [],
				append: []
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
	id: 'promax-socket',
	class: 'socket',
	driver: '../../433_generator/promax/drivers/promax.js',
	signal: 'kaku',
	txSignal: 'flamingo',
	name: 'Promax socket',
	icon: '../../433_generator/promax/assets/socket/icon.svg'
};
const Driver = require(config.driver);
const driver = new Driver(config);
module.exports = Object.assign(
  {},
	driver.getExports(), 
	{ init: (devices, callback) => driver.init(module.exports, devices, callback) }
);
