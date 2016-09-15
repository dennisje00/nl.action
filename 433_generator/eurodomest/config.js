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
				id: 'eurodomest',
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
			extends: ['generic_remote', 'eurodomest'],
			driver: './eurodomest/drivers/remote.js',
			class: 'other',
			triggers: [
				{
					id: 'received',
					title: '433_generator.generic.button_pressed',
					args: [
						{
							name: 'unit',
							type: 'dropdown',
							values: [
								{ id: '111', label: '433_generator.generic.buttons.1' },
								{ id: '110', label: '433_generator.generic.buttons.2' },
								{ id: '101', label: '433_generator.generic.buttons.3' },
								{ id: '011', label: '433_generator.generic.buttons.4' },
								{ id: '000', label: '433_generator.generic.buttons.G' },
							],
						},
						{
							name: 'state',
							type: 'dropdown',
							values: [
								{ id: '1', label: '433_generator.generic.on' },
								{ id: '0', label: '433_generator.generic.off' },
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
			images: {
				small: './eurodomest/assets/images/remote/small.jpg',
				large: './eurodomest/assets/images/remote/large.jpg',
			},
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
			images: {
				small: './eurodomest/assets/images/socket/small.jpg',
				large: './eurodomest/assets/images/socket/large.jpg',
			},
			icon: './eurodomest/assets/socket/icon.svg',
			pair: {
				viewOptions: {
					generic_choice: {
						buttons: [
							{
								name: 'deviceClasses.generic_switch.views.generic_choice.buttons.generic_imitate',
								view: 'generic_imitate',
								svg: './eurodomest/assets/remote/remote_pair.svg',
							},
							{
								name: 'deviceClasses.generic_switch.views.generic_choice.buttons.generic_program',
								view: 'generic_program',
								svg: './eurodomest/assets/socket/socket.svg',
							},
						],
					},
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

