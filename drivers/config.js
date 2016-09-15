'use strict';
/* eslint-disable */
module.exports = {
	devices: {
		'972080_remote': {
			class: 'other',
			pair: {
				viewOrder: ['generic_imitate', 'generic_test_remote', 'generic_done'],
				views: [{
					template: './lib/pair/imitate.html',
					options: {
						title: 'deviceClasses.generic_remote.views.generic_imitate.title',
						body: 'deviceClasses.generic_remote.views.generic_imitate.body',
						prepend: [],
						append: [],
						svg: '../433_generator/eurodomest/assets/remote/remote_pair.svg',
						svgWidth: '80vw',
						svgHeight: '70vh',
						initWithDeviceData: false,
						previous: true,
						next: false
					},
					prepend: ['./../assets/433_generator/css/styles.css',
						'./../assets/433_generator/css/svg.css',
						'./../assets/433_generator/js/svghighlighter.js'
					],
					append: [],
					id: 'generic_imitate'
				}, {
					template: './lib/pair/test_remote.html',
					options: {
						svg: '../433_generator/eurodomest/assets/remote/remote.svg',
						prepend: [],
						append: [],
						title: 'views.generic_test_remote.title',
						body: 'views.generic_test_remote.body',
						svgWidth: '80vw',
						svgHeight: '70vh',
						initWithDeviceData: false,
						previous: true,
						next: true
					},
					prepend: ['./../assets/433_generator/css/styles.css',
						'./../assets/433_generator/css/svg.css',
						'./../assets/433_generator/js/svghighlighter.js'
					],
					append: [],
					id: 'generic_test_remote'
				}, {
					template: './lib/pair/done.html',
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
				small: '../433_generator/eurodomest/assets/images/remote/small.jpg',
				large: '../433_generator/eurodomest/assets/images/remote/large.jpg'
			},
			id: '972080_remote',
			driver: '../433_generator/eurodomest/drivers/remote.js',
			signal: 'eurodomest',
			triggers: [{
				id: '972080_remote:received',
				title: '433_generator.generic.button_pressed',
				args: [{
					name: 'unit',
					type: 'dropdown',
					values: [{
						id: '111',
						label: '433_generator.generic.buttons.1'
					}, {
						id: '110',
						label: '433_generator.generic.buttons.2'
					}, {
						id: '101',
						label: '433_generator.generic.buttons.3'
					}, {
						id: '011',
						label: '433_generator.generic.buttons.4'
					}, {
						id: '000',
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
					filter: 'driver_id=972080_remote'
				}]
			}],
			name: 'devices.eurodomest.972080_remote.name',
			icon: '../433_generator/eurodomest/assets/remote/icon.svg'
		},
		'972080_socket': {
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
					template: './lib/pair/choice.html',
					options: {
						title: 'deviceClasses.generic_switch.views.generic_choice.title',
						body: 'deviceClasses.generic_switch.views.generic_choice.body',
						buttons: [{
							name: 'deviceClasses.generic_switch.views.generic_choice.buttons.generic_imitate',
							view: 'generic_imitate',
							svg: '../433_generator/eurodomest/assets/remote/remote_pair.svg'
						}, {
							name: 'deviceClasses.generic_switch.views.generic_choice.buttons.generic_program',
							view: 'generic_program',
							svg: '../433_generator/eurodomest/assets/socket/socket.svg'
						}],
						prepend: [],
						append: [],
						svgWidth: '80vw',
						svgHeight: '65vh'
					},
					prepend: ['./../assets/433_generator/css/styles.css',
						'./../assets/433_generator/css/svg.css',
						'./../assets/433_generator/js/svghighlighter.js'
					],
					append: [],
					id: 'generic_choice'
				}, {
					template: './lib/pair/imitate.html',
					options: {
						title: 'deviceClasses.generic_socket.views.generic_imitate.title',
						body: 'deviceClasses.generic_socket.views.generic_imitate.body',
						prepend: [],
						append: [],
						svg: '../433_generator/eurodomest/assets/remote/remote_pair.svg',
						svgWidth: '80vw',
						svgHeight: '70vh',
						initWithDeviceData: false,
						previous: true,
						next: false
					},
					prepend: ['./../assets/433_generator/css/styles.css',
						'./../assets/433_generator/css/svg.css',
						'./../assets/433_generator/js/svghighlighter.js'
					],
					append: [],
					id: 'generic_imitate'
				}, {
					template: './lib/pair/test_switch.html',
					options: {
						next: true,
						initWithDeviceData: true,
						sendToggleOnInit: false,
						prepend: [],
						append: [],
						title: 'deviceClasses.generic_socket.views.generic_test_switch.title',
						body: 'deviceClasses.generic_socket.views.generic_test_switch_2.body',
						svg: './../assets/433_generator/images/light.svg',
						svgWidth: '80vw',
						svgHeight: '70vh',
						previous: true
					},
					prepend: ['./../assets/433_generator/css/styles.css',
						'./../assets/433_generator/css/svg.css',
						'./../assets/433_generator/js/svghighlighter.js',
						'./../assets/433_generator/css/styles.css',
						'./../assets/433_generator/css/svg.css',
						'./../assets/433_generator/js/svghighlighter.js'
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
					template: './lib/pair/program.html',
					options: {
						previous: 'generic_choice',
						prepend: [],
						append: [],
						title: 'deviceClasses.generic_socket.views.generic_program.title',
						body: 'devices.eurodomest.972080_socket.views.generic_program.body',
						svg: '../433_generator/eurodomest/assets/socket/socket.svg',
						svgWidth: '80vw',
						svgHeight: '70vh',
						initWithDeviceData: false,
						next: true
					},
					prepend: ['./../assets/433_generator/css/styles.css',
						'./../assets/433_generator/css/svg.css',
						'./../assets/433_generator/js/svghighlighter.js',
						'./../assets/433_generator/css/styles.css',
						'./../assets/433_generator/css/svg.css',
						'./../assets/433_generator/js/svghighlighter.js'
					],
					append: [],
					id: 'generic_program'
				}, {
					template: './lib/pair/test_switch.html',
					options: {
						title: 'deviceClasses.generic_socket.views.generic_test_switch.title',
						body: 'deviceClasses.generic_socket.views.generic_test_switch.body',
						prepend: [],
						append: [],
						svg: './../assets/433_generator/images/light.svg',
						svgWidth: '80vw',
						svgHeight: '70vh',
						initWithDeviceData: false,
						previous: true,
						next: true,
						sendToggleOnInit: true
					},
					prepend: ['./../assets/433_generator/css/styles.css',
						'./../assets/433_generator/css/svg.css',
						'./../assets/433_generator/js/svghighlighter.js',
						'./../assets/433_generator/css/styles.css',
						'./../assets/433_generator/css/svg.css',
						'./../assets/433_generator/js/svghighlighter.js'
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
					template: './lib/pair/done.html',
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
				small: '../433_generator/eurodomest/assets/images/socket/small.jpg',
				large: '../433_generator/eurodomest/assets/images/socket/large.jpg'
			},
			id: '972080_socket',
			class: 'socket',
			driver: '../433_generator/eurodomest/drivers/eurodomest.js',
			signal: 'eurodomest',
			name: 'devices.eurodomest.972080_socket.name',
			icon: '../433_generator/eurodomest/assets/socket/icon.svg'
		},
		'EL-COCO20': {
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
					template: './lib/pair/choice.html',
					options: {
						title: 'deviceClasses.generic_dipswitch_socket.views.generic_choice.title',
						body: 'deviceClasses.generic_dipswitch_socket.views.generic_choice.body',
						buttons: [{
							name: 'deviceClasses.generic_switch.views.generic_choice.buttons.generic_imitate',
							view: 'generic_imitate',
							svg: '../433_generator/impuls/assets/EL-COCO20/pair.svg'
						}, {
							name: 'deviceClasses.generic_dipswitch_socket.views.generic_choice.buttons.generic_dipswitch',
							view: 'generic_info',
							svg: '../433_generator/impuls/assets/EL-COCO20/dipswitches.svg'
						}],
						prepend: [],
						append: [],
						svgWidth: '80vw',
						svgHeight: '65vh'
					},
					prepend: ['./../assets/433_generator/css/styles.css',
						'./../assets/433_generator/css/svg.css',
						'./../assets/433_generator/js/svghighlighter.js'
					],
					append: [],
					id: 'generic_choice'
				}, {
					template: './lib/pair/imitate.html',
					options: {
						title: 'deviceClasses.generic_socket.views.generic_imitate.title',
						body: 'deviceClasses.generic_socket.views.generic_imitate.body',
						prepend: [],
						append: [],
						svg: '../433_generator/impuls/assets/EL-COCO20/pair.svg',
						svgWidth: '80vw',
						svgHeight: '70vh',
						initWithDeviceData: false,
						previous: true,
						next: false
					},
					prepend: ['./../assets/433_generator/css/styles.css',
						'./../assets/433_generator/css/svg.css',
						'./../assets/433_generator/js/svghighlighter.js'
					],
					append: [],
					id: 'generic_imitate'
				}, {
					template: './lib/pair/test_switch.html',
					options: {
						next: true,
						initWithDeviceData: true,
						sendToggleOnInit: false,
						prepend: [],
						append: [],
						title: 'deviceClasses.generic_socket.views.generic_test_switch.title',
						body: 'deviceClasses.generic_socket.views.generic_test_switch_2.body',
						svg: './../assets/433_generator/images/light.svg',
						svgWidth: '80vw',
						svgHeight: '70vh',
						previous: true
					},
					prepend: ['./../assets/433_generator/css/styles.css',
						'./../assets/433_generator/css/svg.css',
						'./../assets/433_generator/js/svghighlighter.js',
						'./../assets/433_generator/css/styles.css',
						'./../assets/433_generator/css/svg.css',
						'./../assets/433_generator/js/svghighlighter.js'
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
					template: './lib/pair/info.html',
					options: {
						title: 'deviceClasses.generic_dipswitch_socket.views.generic_info.title',
						body: 'deviceClasses.generic_dipswitch_socket.views.generic_info.body',
						previous: 'generic_choice',
						prepend: [],
						append: [],
						svg: '../433_generator/impuls/assets/EL-COCO20/dipswitches.svg',
						svgWidth: '80vw',
						svgHeight: '70vh',
						next: true
					},
					prepend: ['./../assets/433_generator/css/styles.css',
						'./../assets/433_generator/css/svg.css',
						'./../assets/433_generator/js/svghighlighter.js'
					],
					append: [],
					id: 'generic_info'
				}, {
					template: './lib/pair/dipswitch.html',
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
					prepend: ['./../assets/433_generator/css/styles.css',
						'./../assets/433_generator/css/dipswitch.css'
					],
					append: [],
					id: 'generic_dipswitch'
				}, {
					template: './lib/pair/test_switch.html',
					options: {
						title: 'deviceClasses.generic_socket.views.generic_test_switch.title',
						body: 'deviceClasses.generic_socket.views.generic_test_switch.body',
						prepend: [],
						append: [],
						svg: './../assets/433_generator/images/light.svg',
						svgWidth: '80vw',
						svgHeight: '70vh',
						initWithDeviceData: false,
						previous: true,
						next: true,
						sendToggleOnInit: true
					},
					prepend: ['./../assets/433_generator/css/styles.css',
						'./../assets/433_generator/css/svg.css',
						'./../assets/433_generator/js/svghighlighter.js',
						'./../assets/433_generator/css/styles.css',
						'./../assets/433_generator/css/svg.css',
						'./../assets/433_generator/js/svghighlighter.js'
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
					template: './lib/pair/done.html',
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
				small: '../433_generator/impuls/assets/images/socket/small.jpg',
				large: '../433_generator/impuls/assets/images/socket/large.jpg'
			},
			id: 'EL-COCO20',
			class: 'socket',
			driver: '../433_generator/impuls/drivers/impuls.js',
			signal: 'impuls',
			name: 'devices.impuls.EL-COCO20.name',
			icon: '../433_generator/impuls/assets/EL-COCO20/icon.svg'
		},
		'EL-COCO20R': {
			class: 'other',
			pair: {
				viewOrder: ['generic_imitate', 'generic_test_remote', 'generic_done'],
				views: [{
					template: './lib/pair/imitate.html',
					options: {
						title: 'deviceClasses.generic_remote.views.generic_imitate.title',
						body: 'deviceClasses.generic_remote.views.generic_imitate.body',
						prepend: [],
						append: [],
						svg: '../433_generator/impuls/assets/EL-COCO20/pair.svg',
						svgWidth: '80vw',
						svgHeight: '70vh',
						initWithDeviceData: false,
						previous: true,
						next: false
					},
					prepend: ['./../assets/433_generator/css/styles.css',
						'./../assets/433_generator/css/svg.css',
						'./../assets/433_generator/js/svghighlighter.js'
					],
					append: [],
					id: 'generic_imitate'
				}, {
					template: './lib/pair/test_remote.html',
					options: {
						svg: '../433_generator/impuls/assets/EL-COCO20/test.svg',
						prepend: [],
						append: [],
						title: 'views.generic_test_remote.title',
						body: 'views.generic_test_remote.body',
						svgWidth: '80vw',
						svgHeight: '70vh',
						initWithDeviceData: false,
						previous: true,
						next: true
					},
					prepend: ['./../assets/433_generator/css/styles.css',
						'./../assets/433_generator/css/svg.css',
						'./../assets/433_generator/js/svghighlighter.js'
					],
					append: [],
					id: 'generic_test_remote'
				}, {
					template: './lib/pair/done.html',
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
				small: '../433_generator/impuls/assets/images/remote/small.jpg',
				large: '../433_generator/impuls/assets/images/remote/large.jpg'
			},
			id: 'EL-COCO20R',
			driver: '../433_generator/impuls/drivers/impuls.js',
			signal: 'impuls',
			name: 'devices.impuls.EL-COCO20R.name',
			icon: '../433_generator/impuls/assets/EL-COCO20/remote.svg',
			triggers: [{
				id: 'EL-COCO20R:received',
				title: '433_generator.generic.button_pressed',
				args: [{
					name: 'unit',
					type: 'dropdown',
					values: [{
						id: '02222',
						label: '433_generator.generic.buttons.A'
					}, {
						id: '20222',
						label: '433_generator.generic.buttons.B'
					}, {
						id: '22022',
						label: '433_generator.generic.buttons.C'
					}, {
						id: '22202',
						label: '433_generator.generic.buttons.D'
					}, {
						id: '22220',
						label: '433_generator.generic.buttons.E'
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
					filter: 'driver_id=EL-COCO20R'
				}]
			}]
		},
		RC50075: {
			class: 'other',
			pair: {
				viewOrder: ['generic_imitate', 'generic_test_remote', 'generic_done'],
				views: [{
					template: './lib/pair/imitate.html',
					options: {
						title: 'deviceClasses.generic_remote.views.generic_imitate.title',
						body: 'deviceClasses.generic_remote.views.generic_imitate.body',
						prepend: [],
						append: [],
						svg: '../433_generator/promax/assets/remote/remote_pair.svg',
						svgWidth: '80vw',
						svgHeight: '70vh',
						initWithDeviceData: false,
						previous: true,
						next: false
					},
					prepend: ['./../assets/433_generator/css/styles.css',
						'./../assets/433_generator/css/svg.css',
						'./../assets/433_generator/js/svghighlighter.js'
					],
					append: [],
					id: 'generic_imitate'
				}, {
					template: './lib/pair/test_remote.html',
					options: {
						body: 'devices.promax.views.generic_test_remote.body',
						svg: '../433_generator/promax/assets/remote/remote.svg',
						prepend: [],
						append: [],
						title: 'views.generic_test_remote.title',
						svgWidth: '80vw',
						svgHeight: '70vh',
						initWithDeviceData: false,
						previous: true,
						next: true
					},
					prepend: ['./../assets/433_generator/css/styles.css',
						'./../assets/433_generator/css/svg.css',
						'./../assets/433_generator/js/svghighlighter.js'
					],
					append: [],
					id: 'generic_test_remote'
				}, {
					template: './lib/pair/done.html',
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
				small: '../433_generator/promax/assets/images/small.png',
				large: '../433_generator/promax/assets/images/large.png'
			},
			id: 'RC50075',
			driver: '../433_generator/promax/drivers/remote.js',
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
			icon: '../433_generator/promax/assets/remote/icon.svg'
		},
		'55010X10': {
			capabilities: ['onoff'],
			pair: {
				viewOrder: ['generic_imitate',
					'copy_repetitions',
					'generic_test_switch_2',
					'generic_choose_slave_2',
					'generic_done'
				],
				views: [{
					template: './lib/pair/imitate.html',
					options: {
						title: 'deviceClasses.generic_socket.views.generic_imitate.title',
						body: 'deviceClasses.generic_socket.views.generic_imitate.body',
						prepend: [],
						append: [],
						svg: '../433_generator/promax/assets/remote/remote_pair.svg',
						svgWidth: '80vw',
						svgHeight: '70vh',
						initWithDeviceData: false,
						previous: true,
						next: false
					},
					prepend: ['./../assets/433_generator/css/styles.css',
						'./../assets/433_generator/css/svg.css',
						'./../assets/433_generator/js/svghighlighter.js'
					],
					append: [],
					id: 'generic_imitate'
				}, {
					template: '../433_generator/promax/views/copy_repetitions.html',
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
					template: './lib/pair/test_switch.html',
					options: {
						next: true,
						initWithDeviceData: true,
						sendToggleOnInit: false,
						prepend: [],
						append: [],
						title: 'deviceClasses.generic_socket.views.generic_test_switch.title',
						body: 'deviceClasses.generic_socket.views.generic_test_switch_2.body',
						svg: './../assets/433_generator/images/light.svg',
						svgWidth: '80vw',
						svgHeight: '70vh',
						previous: true
					},
					prepend: ['./../assets/433_generator/css/styles.css',
						'./../assets/433_generator/css/svg.css',
						'./../assets/433_generator/js/svghighlighter.js',
						'./../assets/433_generator/css/styles.css',
						'./../assets/433_generator/css/svg.css',
						'./../assets/433_generator/js/svghighlighter.js'
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
					template: './lib/pair/done.html',
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
				small: '../433_generator/promax/assets/images/small.png',
				large: '../433_generator/promax/assets/images/large.png'
			},
			id: '55010X10',
			class: 'socket',
			driver: '../433_generator/promax/drivers/promax.js',
			signal: 'kaku',
			txSignal: 'flamingo',
			name: 'devices.promax.55010X10.name',
			icon: '../433_generator/promax/assets/socket/icon.svg'
		},
		SP200689103: {
			capabilities: ['alarm_generic'],
			pair: {
				viewOrder: ['generic_imitate', 'generic_test_button', 'generic_done'],
				views: [{
					template: './lib/pair/imitate.html',
					options: {
						svg: '../433_generator/selectplus/assets/doorbell/doorbell.svg',
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
					prepend: ['./../assets/433_generator/css/styles.css',
						'./../assets/433_generator/css/svg.css',
						'./../assets/433_generator/js/svghighlighter.js'
					],
					append: [],
					id: 'generic_imitate'
				}, {
					template: './lib/pair/test_button.html',
					options: {
						svg: '../assets/433_generator/images/bell.svg',
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
					prepend: ['./../assets/433_generator/css/styles.css',
						'./../assets/433_generator/css/svg.css',
						'./../assets/433_generator/js/svghighlighter.js',
						'./../assets/433_generator/css/styles.css',
						'./../assets/433_generator/css/svg.css',
						'./../assets/433_generator/js/svghighlighter.js',
						'./../assets/433_generator/css/styles.css',
						'./../assets/433_generator/css/svg.css',
						'./../assets/433_generator/js/svghighlighter.js'
					],
					append: [],
					id: 'generic_test_button'
				}, {
					template: './lib/pair/done.html',
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
				small: '../433_generator/selectplus/assets/images/small.png',
				large: '../433_generator/selectplus/assets/images/large.png'
			},
			id: 'SP200689103',
			driver: '../433_generator/selectplus/drivers/doorbell.js',
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
			icon: '../433_generator/selectplus/assets/doorbell/doorbell.svg'
		}
	}
};
