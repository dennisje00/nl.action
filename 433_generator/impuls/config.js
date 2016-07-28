'use strict';
module.exports = {
	deviceClasses: {
		impuls: {
			driver: './impuls/drivers/impuls.js',
			signal: {
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
			icon: './impuls/assets/EL-COCO20/icon.svg',
			pair: {
				viewOptions: {
					generic_imitate: {
						svg: './eurodomest/assets/remote/remote_pair.svg',
					},
					generic_dipswitch: {
						dipswitchList: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
					},
				},
			},
		},
	},
};
