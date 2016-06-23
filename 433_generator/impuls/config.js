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
			name: 'EL-COCO20',
			icon: './impuls/assets/EL-COCO20/icon.svg',
			pair: {
				viewOptions: {
					generic_imitate: {
						svg: './eurodomest/assets/remote/remote_pair.svg',
					},
					generic_dipswitch: {
						title: 'test',
						dipswitchList: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
					},
					generic_test_remote: {
						svg: './eurodomest/assets/remote/remote.svg',
					},
					generic_test_remote_2: {
						svg: './eurodomest/assets/remote/remote.svg',
					},
					generic_done: {
						title: 'done',
					},
				},
			},
		},
	},
};
