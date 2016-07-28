'use strict';
module.exports = {
	deviceClasses: {
		promax: {
			extends: 'eurodomest',
			driver: './promax/drivers/promax.js',
			images: {
				small: './promax/assets/images/small.png',
				large: './promax/assets/images/large.png',
			},
			// FIXME non functional signal definition
			// signal: {
			// 	sof: [], // Start of frame
			// 	eof: [255], // End of frame
			// 	words: [
			// 		[280, 1030],	// 0
			// 		[930, 380],	// 1
			// 	],
			// 	interval: 5000, // Time between repititions
			// 	repetitions: 20,
			// 	sensitivity: 0.9,
			// 	minimalLength: 28,
			// 	maximalLength: 28,
			// },
		},
		promax_remote: {
			extends: ['remote', 'promax'],
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
								{ id: '00001', label: 'deviceClasses.remote.triggers.received.values.button_1' },
								{ id: '00100', label: 'deviceClasses.remote.triggers.received.values.button_2' },
								{ id: '00101', label: 'deviceClasses.remote.triggers.received.values.button_3' },
								{ id: '10000', label: 'deviceClasses.remote.triggers.received.values.button_4' },
								{ id: 'g', label: 'deviceClasses.remote.triggers.received.values.button_G' },
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
		RC50075: {
			extends: 'promax_remote',
			name: 'devices.promax.RC50075.name',
			icon: './promax/assets/remote/icon.svg',
			pair: {
				viewOptions: {
					generic_imitate: {
						svg: './promax/assets/remote/remote_pair.svg',
					},
					generic_test_remote: {
						svg: './promax/assets/remote/remote.svg',
					},
				},
			},
		},
		// 'promax-socket': {
		// 	extends: ['generic_socket', 'promax'],
		// 	name: 'Promax socket',
		// 	icon: './promax/assets/socket/icon.svg',
		// 	pair: {
		// 		viewOptions: {
		// 			generic_imitate: {
		// 				svg: './promax/assets/remote/remote_pair.svg',
		// 			},
		// 			generic_program: {
		// 				title: 'test',
		// 				svg: './promax/assets/socket/socket.svg',
		// 			},
		// 			generic_test_remote: {
		// 				svg: './promax/assets/remote/remote.svg',
		// 			},
		// 			generic_test_remote_2: {
		// 				svg: './promax/assets/remote/remote.svg',
		// 			},
		// 			generic_done: {
		// 				title: 'done',
		// 			},
		// 		},
		// 	},
		// },
	},
};
