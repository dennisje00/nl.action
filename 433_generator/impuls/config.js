'use strict';
module.exports = {
	deviceClasses: {
		impuls: {
			driver: './impuls/drivers/impuls.js',
			signal: {
				id: 'impuls',
				sof: [],
				eof: [190],
				words: [
					[190, 570, 190, 570], 	// 0
					[570, 190, 570, 190],	// 1
					[190, 570, 570, 190],    // 2
				],
				interval: 5890,
				repetitions: 20,
				sensitivity: 0.7,
				minimalLength: 12,
				maximalLength: 12,
			},
		},
	},
	devices: {
		'EL-COCO20': {
			extends: ['generic_dipswitch_socket', 'impuls'],
			name: 'devices.impuls.EL-COCO20.name',
			images: {
				small: './impuls/assets/images/socket/small.jpg',
				large: './impuls/assets/images/socket/large.jpg',
			},
			icon: './impuls/assets/EL-COCO20/icon.svg',
			pair: {
				viewOptions: {
					generic_choice: {
						buttons: [
							{
								name: 'deviceClasses.generic_switch.views.generic_choice.buttons.generic_imitate',
								view: 'generic_imitate',
								svg: './impuls/assets/EL-COCO20/pair.svg',
							},
							{
								name: 'deviceClasses.generic_dipswitch_socket.views.generic_choice.buttons.generic_dipswitch',
								view: 'generic_info',
								svg: './impuls/assets/EL-COCO20/dipswitches.svg',
							},
						],
					},
					generic_info: {
						svg: './impuls/assets/EL-COCO20/dipswitches.svg',
					},
					generic_imitate: {
						svg: './impuls/assets/EL-COCO20/pair.svg',
					},
					generic_dipswitch: {
						dipswitchList: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
					},
				},
			},
		},
		'EL-COCO20R': {
			extends: ['generic_remote', 'impuls'],
			name: 'devices.impuls.EL-COCO20R.name',
			images: {
				small: './impuls/assets/images/remote/small.jpg',
				large: './impuls/assets/images/remote/large.jpg',
			},
			icon: './impuls/assets/EL-COCO20/remote.svg',
			pair: {
				viewOptions: {
					generic_imitate: {
						svg: './impuls/assets/EL-COCO20/pair.svg',
					},
					generic_test_remote: {
						svg: './impuls/assets/EL-COCO20/test.svg',
					},
				},
			},
			triggers: [
				{
					id: 'received',
					title: '433_generator.generic.button_pressed',
					args: [
						{
							name: 'unit',
							type: 'dropdown',
							values: [
								{ id: '02222', label: '433_generator.generic.buttons.A' },
								{ id: '20222', label: '433_generator.generic.buttons.B' },
								{ id: '22022', label: '433_generator.generic.buttons.C' },
								{ id: '22202', label: '433_generator.generic.buttons.D' },
								{ id: '22220', label: '433_generator.generic.buttons.E' },
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
};
