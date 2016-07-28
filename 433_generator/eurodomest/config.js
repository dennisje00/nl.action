'use strict';
module.exports = {
	deviceClasses: {
		eurodomest: {
			driver: './eurodomest/drivers/eurodomest.js',
			images: {
				small: './eurodomest/assets/images/small.png',
				large: './eurodomest/assets/images/large.png',
			},
			signal: {
				sof: [], // Start of frame
				eof: [295], // End of frame
				words: [
					[295, 885],	// 0
					[885, 295],	// 1
				],
				interval: 9565, // Time between repititions
				repetitions: 20,
				sensitivity: 0.7,
				minimalLength: 24,
				maximalLength: 24,
			},
		},
		eurodomest_remote: {
			extends: ['remote', 'eurodomest'],
			driver: './eurodomest/drivers/remote.js',
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
								{ id: '111', label: 'deviceClasses.remote.triggers.received.values.button_1' },
								{ id: '110', label: 'deviceClasses.remote.triggers.received.values.button_2' },
								{ id: '101', label: 'deviceClasses.remote.triggers.received.values.button_3' },
								{ id: '011', label: 'deviceClasses.remote.triggers.received.values.button_4' },
								{ id: '000', label: 'deviceClasses.remote.triggers.received.values.button_G' },
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
		'972080_remote': {
			extends: 'eurodomest_remote',
			name: 'devices.eurodomest.972080_remote.name',
			icon: './eurodomest/assets/remote/icon.svg',
			pair: {
				viewOptions: {
					generic_imitate: {
						svg: './eurodomest/assets/remote/remote_pair.svg',
					},
					generic_test_remote: {
						svg: './eurodomest/assets/remote/remote.svg',
					},
				},
			},
		},
		'972080_socket': {
			extends: ['generic_socket', 'eurodomest'],
			name: 'devices.eurodomest.972080_socket.name',
			icon: './eurodomest/assets/socket/icon.svg',
			pair: {
				viewOptions: {
					generic_imitate: {
						svg: './eurodomest/assets/remote/remote_pair.svg',
					},
					generic_program: {
						body: 'devices.eurodomest.972080_socket.views.generic_program.body',
						svg: './eurodomest/assets/socket/socket.svg',
					},
					generic_test_remote: {
						svg: './eurodomest/assets/remote/remote.svg',
					},
					generic_test_remote_2: {
						svg: './eurodomest/assets/remote/remote.svg',
					},
				},
			},
		},
	},
};

