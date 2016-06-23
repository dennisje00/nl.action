'use strict';

module.exports = {
	deviceClasses: {
		elro: {
			extends: 'eurodomest',
			driver: './elro/drivers/elro.js',
		},
		elro_remote: {
			extends: ['remote', 'elro'],
			driver: './promax/drivers/remote.js',
			class: 'other',
			triggers: [
				{
					id: 'received',
					title: 'deviceClasses.remote.triggers.received.title',
					args: [
						{
							name: 'unit',
							type: 'dropdown',
							values: [
								{ id: '00001', label: 'deviceClasses.remote.triggers.received.button_1' },
								{ id: '00100', label: 'deviceClasses.remote.triggers.received.button_2' },
								{ id: '00101', label: 'deviceClasses.remote.triggers.received.button_3' },
								{ id: '10000', label: 'deviceClasses.remote.triggers.received.button_4' },
							],
						},
						{
							name: 'state',
							type: 'dropdown',
							values: [
								{ id: '1', label: 'generic.on' },
								{ id: '0', label: 'generic.off' },
							],
						},
					],
				},
			],
		},
	},
	devices: {
		FA500R: {
			extends: 'elro_remote',
			driver: './elro/drivers/remote.js',
			name: 'Elro remote',
			class: 'other',
			icon: './elro/assets/remote/icon.svg',
			pair: {
				viewOptions: {
					// TODO set svg attributes for highlighting buttons
					generic_imitate: {
						svg: './elro/assets/remote/remote_pair.svg',
					},
					generic_test_remote: {
						svg: './elro/assets/remote/remote.svg',
					},
				},
			},
		},
		// 'elro-socket': {
		// 	extends: ['generic_socket', 'elro'],
		// 	name: 'Elro socket',
		// 	icon: './elro/assets/socket/icon.svg',
		// 	pair: {
		// 		viewOptions: {
		// 			generic_imitate: {
		// 				svg: './elro/assets/remote/remote_pair.svg',
		// 			},
		// 			generic_program: {
		// 				title: 'test',
		// 				svg: './elro/assets/socket/socket.svg',
		// 			},
		// 			generic_test_remote: {
		// 				svg: './elro/assets/remote/remote.svg',
		// 			},
		// 			generic_test_remote_2: {
		// 				svg: './elro/assets/remote/remote.svg',
		// 			},
		// 			generic_done: {
		// 				title: 'done',
		// 			},
		// 		},
		// 	},
		// },
	},
};

