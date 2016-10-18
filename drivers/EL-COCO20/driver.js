'use strict';
/* eslint-disable */
const config = {
	capabilities: ['onoff'],
	pair: {
		viewOrder: ['generic_choice',
			'generic_imitate',
			'generic_test_switch_2',
			'generic_choose_slave_2',
			'generic_info',
			'generic_dipswitch',
			'generic_test_switch',
			'generic_choose_slave',
			'generic_done'
		],
		views: [{
			template: '../lib/pair/choice.html',
			options: {
				title: 'deviceClasses.generic_dipswitch_socket.views.generic_choice.title',
				body: 'deviceClasses.generic_dipswitch_socket.views.generic_choice.body',
				buttons: [{
					name: 'deviceClasses.generic_switch.views.generic_choice.buttons.generic_imitate',
					view: 'generic_imitate',
					svg: '../../433_generator/impuls/assets/EL-COCO20/pair.svg'
				}, {
					name: 'deviceClasses.generic_dipswitch_socket.views.generic_choice.buttons.generic_dipswitch',
					view: 'generic_info',
					svg: '../../433_generator/impuls/assets/EL-COCO20/dipswitches.svg'
				}],
				prepend: [],
				append: [],
				svgWidth: '80vw',
				svgHeight: '65vh'
			},
			prepend: ['../../assets/433_generator/css/styles.css',
				'../../assets/433_generator/css/svg.css',
				'../../assets/433_generator/js/svghighlighter.js'
			],
			append: [],
			id: 'generic_choice'
		}, {
			template: '../lib/pair/imitate.html',
			options: {
				title: 'deviceClasses.generic_socket.views.generic_imitate.title',
				body: 'deviceClasses.generic_socket.views.generic_imitate.body',
				prepend: [],
				append: [],
				svg: '../../433_generator/impuls/assets/EL-COCO20/pair.svg',
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
			template: '../lib/pair/info.html',
			options: {
				title: 'deviceClasses.generic_dipswitch_socket.views.generic_info.title',
				body: 'deviceClasses.generic_dipswitch_socket.views.generic_info.body',
				previous: 'generic_choice',
				prepend: [],
				append: [],
				svg: '../../433_generator/impuls/assets/EL-COCO20/dipswitches.svg',
				svgWidth: '80vw',
				svgHeight: '70vh',
				next: true
			},
			prepend: ['../../assets/433_generator/css/styles.css',
				'../../assets/433_generator/css/svg.css',
				'../../assets/433_generator/js/svghighlighter.js'
			],
			append: [],
			id: 'generic_info'
		}, {
			template: '../lib/pair/dipswitch.html',
			options: {
				dipswitchList: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
				prepend: [],
				append: [],
				title: 'views.generic_dipswitch.title',
				body: 'views.generic_dipswitch.body',
				svgWidth: '80vw',
				svgHeight: '24vh',
				previous: true,
				next: true
			},
			prepend: ['../../assets/433_generator/css/styles.css',
				'../../assets/433_generator/css/dipswitch.css'
			],
			append: [],
			id: 'generic_dipswitch'
		}, {
			template: '../lib/pair/test_switch.html',
			options: {
				title: 'deviceClasses.generic_socket.views.generic_test_switch.title',
				body: 'deviceClasses.generic_socket.views.generic_test_switch.body',
				prepend: [],
				append: [],
				svg: '../../assets/433_generator/images/light.svg',
				svgWidth: '80vw',
				svgHeight: '70vh',
				initWithDeviceData: true,
				previous: true,
				next: true,
				sendToggleOnInit: false
			},
			prepend: ['../../assets/433_generator/css/styles.css',
				'../../assets/433_generator/css/svg.css',
				'../../assets/433_generator/js/svghighlighter.js',
				'../../assets/433_generator/css/styles.css',
				'../../assets/433_generator/css/svg.css',
				'../../assets/433_generator/js/svghighlighter.js'
			],
			append: [],
			id: 'generic_test_switch'
		}, {
			template: 'choose_slave',
			options: {
				previous: true,
				next: true,
				prepend: '',
				append: ''
			},
			prepend: [],
			append: [],
			id: 'generic_choose_slave'
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
		small: '../../433_generator/impuls/assets/images/socket/small.jpg',
		large: '../../433_generator/impuls/assets/images/socket/large.jpg'
	},
	id: 'EL-COCO20',
	class: 'socket',
	driver: '../../433_generator/impuls/drivers/impuls.js',
	signal: 'impuls',
	name: 'devices.impuls.EL-COCO20.name',
	icon: '../../433_generator/impuls/assets/EL-COCO20/icon.svg'
};
const Driver = require(config.driver);
const driver = new Driver(config);
module.exports = Object.assign(
  {},
	driver.getExports(), 
	{ init: (devices, callback) => driver.init(module.exports, devices, callback) }
);
