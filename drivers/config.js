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
					prepend: [],
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
				small: '../433_generator/eurodomest/assets/images/small.png',
				large: '../433_generator/eurodomest/assets/images/large.png'
			},
			id: '972080_remote',
			actions: [{
				id: '972080_remote:send',
				title: 'deviceClasses.remote.triggers.send.title',
				args: [{
					name: 'unit',
					type: 'dropdown',
					values: [{
						id: '00001',
						label: 'deviceClasses.remote.triggers.received.values.button_A'
					}, {
						id: '00100',
						label: 'deviceClasses.remote.triggers.received.values.button_B'
					}, {
						id: '00101',
						label: 'deviceClasses.remote.triggers.received.values.button_C'
					}, {
						id: '10000',
						label: 'deviceClasses.remote.triggers.received.values.button_D'
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
					filter: 'driver_id=972080_remote'
				}]
			}],
			driver: '../433_generator/eurodomest/drivers/remote.js',
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
				id: '972080_remote:received',
				title: 'deviceClasses.remote.triggers.received.title',
				args: [{
					name: 'unit',
					type: 'dropdown',
					values: [{
						id: '111',
						label: 'deviceClasses.remote.triggers.received.values.button_1'
					}, {
						id: '110',
						label: 'deviceClasses.remote.triggers.received.values.button_2'
					}, {
						id: '101',
						label: 'deviceClasses.remote.triggers.received.values.button_3'
					}, {
						id: '011',
						label: 'deviceClasses.remote.triggers.received.values.button_4'
					}, {
						id: '000',
						label: 'deviceClasses.remote.triggers.received.values.button_G'
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
							view: 'generic_imitate'
						}, {
							name: 'deviceClasses.generic_switch.views.generic_choice.buttons.generic_program',
							view: 'generic_program'
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
						svg: '../433_generator/eurodomest/assets/remote/remote_pair.svg',
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
					template: './lib/pair/test_switch.html',
					options: {
						next: true,
						initWithDeviceData: true,
						sendToggleOnInit: false,
						prepend: [],
						append: [],
						title: 'views.generic_test_switch.title',
						body: 'views.generic_test_switch_2.body',
						svg: './../assets/433_generator/images/light.svg',
						svgWidth: '80vw',
						svgHeight: '70vh',
						previous: true
					},
					prepend: ['./../assets/433_generator/css/styles.css',
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
						body: 'devices.eurodomest.972080_socket.views.generic_program.body',
						svg: '../433_generator/eurodomest/assets/socket/socket.svg',
						title: 'views.generic_program.title',
						svgWidth: '80vw',
						svgHeight: '70vh',
						initWithDeviceData: false,
						next: true
					},
					prepend: ['./../assets/433_generator/css/styles.css',
						'./../assets/433_generator/css/svg.css',
						'./../assets/433_generator/js/svghighlighter.js'
					],
					append: [],
					id: 'generic_program'
				}, {
					template: './lib/pair/test_switch.html',
					options: {
						title: 'views.generic_test_switch.title',
						body: 'views.generic_test_switch.body',
						svg: './../assets/433_generator/images/light.svg',
						svgWidth: '80vw',
						svgHeight: '70vh',
						initWithDeviceData: false,
						previous: true,
						next: true,
						sendToggleOnInit: true,
						prepend: '',
						append: ''
					},
					prepend: ['./../assets/433_generator/css/styles.css',
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
				small: '../433_generator/eurodomest/assets/images/small.png',
				large: '../433_generator/eurodomest/assets/images/large.png'
			},
			id: '972080_socket',
			class: 'socket',
			driver: '../433_generator/eurodomest/drivers/eurodomest.js',
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
						title: 'deviceClasses.generic_switch.views.generic_choice.title',
						body: 'deviceClasses.generic_switch.views.generic_choice.body',
						buttons: [{
							name: 'deviceClasses.generic_dipswitch_socket.views.generic_choice.buttons.generic_imitate',
							view: 'generic_imitate'
						}, {
							name: 'deviceClasses.generic_dipswitch_socket.views.generic_choice.buttons.generic_dipswitch',
							view: 'generic_info'
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
						svg: '../433_generator/eurodomest/assets/remote/remote_pair.svg',
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
					template: './lib/pair/test_switch.html',
					options: {
						next: 'generic_done',
						initWithDeviceData: true,
						sendToggleOnInit: false,
						prepend: [],
						append: [],
						title: 'views.generic_test_switch.title',
						body: 'views.generic_test_switch_2.body',
						svg: './../assets/433_generator/images/light.svg',
						svgWidth: '80vw',
						svgHeight: '70vh',
						previous: true
					},
					prepend: ['./../assets/433_generator/css/styles.css',
						'./../assets/433_generator/css/svg.css',
						'./../assets/433_generator/js/svghighlighter.js'
					],
					append: [],
					id: 'generic_test_switch_2'
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
					id: 'generic_choose_slave_2'
				}, {
					template: './lib/pair/info.html',
					options: {
						title: 'deviceClasses.generic_dipswitch_socket.views.generic_info.title',
						body: 'deviceClasses.generic_dipswitch_socket.views.generic_info.body',
						previous: 'generic_choice',
						prepend: [],
						append: [],
						svg: '',
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
						svgHeight: '70vh',
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
						title: 'views.generic_test_switch.title',
						body: 'views.generic_test_switch.body',
						svg: './../assets/433_generator/images/light.svg',
						svgWidth: '80vw',
						svgHeight: '70vh',
						initWithDeviceData: false,
						previous: true,
						next: true,
						sendToggleOnInit: true,
						prepend: '',
						append: ''
					},
					prepend: ['./../assets/433_generator/css/styles.css',
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
			images: {},
			id: 'EL-COCO20',
			class: 'socket',
			driver: '../433_generator/impuls/drivers/impuls.js',
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
			name: 'devices.impuls.EL-COCO20.name',
			icon: '../433_generator/impuls/assets/EL-COCO20/icon.svg'
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
						svg: '../433_generator/promax/assets/remote/remote.svg',
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
					prepend: [],
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
			actions: [{
				id: 'RC50075:send',
				title: 'deviceClasses.remote.triggers.send.title',
				args: [{
					name: 'unit',
					type: 'dropdown',
					values: [{
						id: '00001',
						label: 'deviceClasses.remote.triggers.received.values.button_A'
					}, {
						id: '00100',
						label: 'deviceClasses.remote.triggers.received.values.button_B'
					}, {
						id: '00101',
						label: 'deviceClasses.remote.triggers.received.values.button_C'
					}, {
						id: '10000',
						label: 'deviceClasses.remote.triggers.received.values.button_D'
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
					filter: 'driver_id=RC50075'
				}]
			}],
			driver: '../433_generator/promax/drivers/remote.js',
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
				id: 'RC50075:received',
				title: 'deviceClasses.remote.triggers.received.title',
				args: [{
					name: 'unit',
					type: 'dropdown',
					values: [{
						id: '00001',
						label: 'deviceClasses.remote.triggers.received.values.button_1'
					}, {
						id: '00100',
						label: 'deviceClasses.remote.triggers.received.values.button_2'
					}, {
						id: '00101',
						label: 'deviceClasses.remote.triggers.received.values.button_3'
					}, {
						id: '10000',
						label: 'deviceClasses.remote.triggers.received.values.button_4'
					}, {
						id: 'g',
						label: 'deviceClasses.remote.triggers.received.values.button_G'
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
					filter: 'driver_id=RC50075'
				}]
			}],
			name: 'devices.promax.RC50075.name',
			icon: '../433_generator/promax/assets/remote/icon.svg'
		},
		SP200689103: {
			driver: '../433_generator/selectplus/drivers/doorbell.js',
			images: {
				small: '../433_generator/selectplus/assets/images/small.png',
				large: '../433_generator/selectplus/assets/images/large.png'
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
						svg: '../433_generator/selectplus/assets/doorbell/bell.svg',
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
			id: 'SP200689103',
			class: 'doorbell',
			capabilities: ['alarm_generic'],
			debounceTimeout: 3000,
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
