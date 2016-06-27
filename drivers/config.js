'use strict';
/* eslint-disable */
module.exports = {
	devices: {
		FA500R: {
			class: 'other',
			pair: {
				viewOrder: ['generic_imitate', 'generic_test_remote', 'generic_done'],
				views: [{
					template: './lib/pair/imitate.html',
					options: {
						title: 'deviceClasses.remote.pair.generic_imitate.title',
						prepend: [],
						append: [],
						body: 'deviceClasses.remote.pair.generic_imitate.body',
						svg: '../433_generator/elro/assets/remote/remote_pair.svg',
						svgWidth: '80vw',
						svgHeight: '70vh',
						initWithDeviceData: false,
						previous: true,
						next: false
					},
					id: 'generic_imitate'
				}, {
					template: './lib/pair/test_remote.html',
					options: {
						title: 'views.generic_test_remote.title',
						prepend: [],
						append: [],
						body: 'views.generic_test_remote.body',
						svg: '../433_generator/elro/assets/remote/remote.svg',
						svgWidth: '80vw',
						svgHeight: '70vh',
						initWithDeviceData: false,
						previous: true,
						next: true
					},
					id: 'generic_test_remote'
				}, {
					template: './lib/pair/done.html',
					options: {
						title: 'done!',
						prepend: [],
						append: []
					},
					id: 'generic_done'
				}]
			},
			images: {
				small: '../433_generator/eurodomest/assets/images/small.png',
				large: '../433_generator/eurodomest/assets/images/large.png'
			},
			id: 'FA500R',
			actions: [{
				id: 'FA500R:send',
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
					filter: 'driver_id=FA500R'
				}]
			}],
			driver: '../433_generator/elro/drivers/remote.js',
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
				id: 'FA500R:received',
				title: 'deviceClasses.remote.triggers.received.title',
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
					filter: 'driver_id=FA500R'
				}]
			}],
			name: 'Elro remote',
			icon: '../433_generator/elro/assets/remote/icon.svg'
		},
		E972080: {
			class: 'other',
			pair: {
				viewOrder: ['generic_imitate', 'generic_test_remote', 'generic_done'],
				views: [{
					template: './lib/pair/imitate.html',
					options: {
						title: 'deviceClasses.remote.pair.generic_imitate.title',
						prepend: [],
						append: [],
						body: 'deviceClasses.remote.pair.generic_imitate.body',
						svg: '../433_generator/eurodomest/assets/remote/remote_pair.svg',
						svgWidth: '80vw',
						svgHeight: '70vh',
						initWithDeviceData: false,
						previous: true,
						next: false
					},
					id: 'generic_imitate'
				}, {
					template: './lib/pair/test_remote.html',
					options: {
						title: 'views.generic_test_remote.title',
						prepend: [],
						append: [],
						body: 'views.generic_test_remote.body',
						svg: '../433_generator/eurodomest/assets/remote/remote.svg',
						svgWidth: '80vw',
						svgHeight: '70vh',
						initWithDeviceData: false,
						previous: true,
						next: true
					},
					id: 'generic_test_remote'
				}, {
					template: './lib/pair/done.html',
					options: {
						title: 'done!',
						prepend: [],
						append: []
					},
					id: 'generic_done'
				}]
			},
			images: {
				small: '../433_generator/eurodomest/assets/images/small.png',
				large: '../433_generator/eurodomest/assets/images/large.png'
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
			icon: '../433_generator/eurodomest/assets/remote/icon.svg'
		},
		'eurodomest-socket': {
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
					template: './lib/pair/imitate.html',
					options: {
						title: 'pair.begin',
						prepend: [],
						append: [],
						svg: '../433_generator/eurodomest/assets/remote/remote_pair.svg',
						body: 'pair.imitate.body',
						svgWidth: '80vw',
						svgHeight: '70vh',
						initWithDeviceData: false,
						previous: true,
						next: false
					},
					id: 'generic_imitate'
				}, {
					template: './lib/pair/test_switch.html',
					options: {
						title: 'pair.test_remote',
						next: true,
						initWithDeviceData: true,
						sendToggleOnInit: false,
						prepend: [],
						append: [],
						svg: './../assets/433_generator/images/light.svg',
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
					template: './lib/pair/program.html',
					options: {
						title: 'test',
						previous: 'generic_choice',
						prepend: [],
						append: [],
						svg: '../433_generator/eurodomest/assets/socket/socket.svg',
						body: 'pair.program.body',
						svgWidth: '80vw',
						svgHeight: '70vh',
						initWithDeviceData: false,
						next: true
					},
					id: 'generic_program'
				}, {
					template: './lib/pair/test_switch.html',
					options: {
						title: 'pair.test_remote',
						prepend: [],
						append: [],
						svg: './../assets/433_generator/images/light.svg',
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
					template: './lib/pair/done.html',
					options: {
						title: 'done',
						prepend: [],
						append: []
					},
					id: 'generic_done'
				}]
			},
			images: {
				small: '../433_generator/eurodomest/assets/images/small.png',
				large: '../433_generator/eurodomest/assets/images/large.png'
			},
			id: 'eurodomest-socket',
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
			name: 'Eurodomest socket',
			icon: '../433_generator/eurodomest/assets/socket/icon.svg'
		},
		'EL-COCO20': {
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
					template: './lib/pair/choice.html',
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
					template: './lib/pair/imitate.html',
					options: {
						title: 'pair.begin',
						prepend: [],
						append: [],
						svg: '../433_generator/eurodomest/assets/remote/remote_pair.svg',
						body: 'pair.imitate.body',
						svgWidth: '80vw',
						svgHeight: '70vh',
						initWithDeviceData: false,
						previous: true,
						next: false
					},
					id: 'generic_imitate'
				}, {
					template: './lib/pair/test_switch.html',
					options: {
						title: 'pair.test_remote',
						next: 'generic_done',
						initWithDeviceData: true,
						sendToggleOnInit: false,
						prepend: [],
						append: [],
						svg: './../assets/433_generator/images/light.svg',
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
					template: './lib/pair/dipswitch.html',
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
					template: './lib/pair/test_switch.html',
					options: {
						title: 'pair.test_remote',
						prepend: [],
						append: [],
						svg: './../assets/433_generator/images/light.svg',
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
					template: './lib/pair/done.html',
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
			name: 'EL-COCO20',
			icon: '../433_generator/impuls/assets/EL-COCO20/icon.svg'
		},
		RC50075: {
			class: 'other',
			pair: {
				viewOrder: ['generic_imitate', 'generic_test_remote', 'generic_done'],
				views: [{
					template: './lib/pair/imitate.html',
					options: {
						title: 'deviceClasses.remote.pair.generic_imitate.title',
						prepend: [],
						append: [],
						body: 'deviceClasses.remote.pair.generic_imitate.body',
						svg: '../433_generator/promax/assets/remote/remote_pair.svg',
						svgWidth: '80vw',
						svgHeight: '70vh',
						initWithDeviceData: false,
						previous: true,
						next: false
					},
					id: 'generic_imitate'
				}, {
					template: './lib/pair/test_remote.html',
					options: {
						title: 'views.generic_test_remote.title',
						prepend: [],
						append: [],
						body: 'views.generic_test_remote.body',
						svg: '../433_generator/promax/assets/remote/remote.svg',
						svgWidth: '80vw',
						svgHeight: '70vh',
						initWithDeviceData: false,
						previous: true,
						next: true
					},
					id: 'generic_test_remote'
				}, {
					template: './lib/pair/done.html',
					options: {
						title: 'done!',
						prepend: [],
						append: []
					},
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
					}, {
						id: 'g',
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
					filter: 'driver_id=RC50075'
				}]
			}],
			name: 'Promax remote',
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
						title: 'doorbell.imitate',
						svg: '../433_generator/selectplus/assets/doorbell/doorbell.svg',
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
					template: './lib/pair/test_button.html',
					options: {
						title: 'doorbell.test',
						svg: '../433_generator/selectplus/assets/doorbell/bell.svg',
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
					template: './lib/pair/done.html',
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
			icon: '../433_generator/selectplus/assets/doorbell/doorbell.svg'
		}
	}
};
