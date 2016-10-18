'use strict';
module.exports = {
	views: {
		copy_repetitions: {
			template: './promax/views/copy_repetitions.html',
			options: {
				title: {
					default: 'views.copy_repetitions.title',
				},
				body: {
					default: 'views.copy_repetitions.body',
				},
				previous: true,
				next: false,
			},
		},
	},
	deviceClasses: {
		promax: {
			extends: 'eurodomest',
			driver: './promax/drivers/promax.js',
			images: {
				small: './promax/assets/images/small.png',
				large: './promax/assets/images/large.png',
			},
			signal: {
				id: 'kaku',
				sof: [210, 2724], // Start of frame
				eof: [210], // End of frame
				words: [
					[210, 320, 210, 1320],	// 0
					[210, 1320, 210, 320],	// 1
				],
				interval: 10150, // Time between two messages
				sensitivity: 0.9,
				repetitions: 10,
				minimalLength: 32,
				maximalLength: 32,
			},
			txSignal: 'flamingo',
		},
		promax_remote: {
			extends: ['generic_remote', 'promax'],
			driver: './promax/drivers/remote.js',
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
								{ id: '00', label: '433_generator.generic.buttons.1' },
								{ id: '01', label: '433_generator.generic.buttons.2' },
								{ id: '10', label: '433_generator.generic.buttons.3' },
								{ id: '11', label: '433_generator.generic.buttons.4' },
								{ id: 'g', label: '433_generator.generic.buttons.G' },
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
		RC50075: {
			extends: 'promax_remote',
			name: 'devices.promax.RC50075.name',
			images: {
				small: './promax/assets/images/small.png',
				large: './promax/assets/images/large.png',
			},
			icon: './promax/assets/remote/icon.svg',
			pair: {
				viewOptions: {
					generic_imitate: {
						svg: './promax/assets/remote/remote_pair.svg',
					},
					generic_test_remote: {
						body: 'devices.promax.views.generic_test_remote.body',
						svg: './promax/assets/remote/remote.svg',
					},
				},
			},
		},
		'55010X10': {
			extends: ['generic_socket', 'promax'],
			name: 'devices.promax.55010X10.name',
			icon: './promax/assets/socket/icon.svg',
			pair: {
				viewOrder: [
					'generic_imitate',
					'copy_repetitions',
					'generic_test_switch_2',
					'generic_choose_slave_2',
					'generic_done',
				],
				viewOptions: {
					generic_imitate: {
						svg: './promax/assets/remote/remote_pair.svg',
					},
				},
			},
		},
	},
};
