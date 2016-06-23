'use strict';
module.exports = {
	deviceClasses: {
		selectplus: {
			driver: './selectplus/drivers/selectplus.js',
			images: {
				small: './selectplus/assets/images/small.png',
				large: './selectplus/assets/images/large.png',
			},
			signal: {
				sof: [335],
				eof: [],
				words: [
					[1250, 335],	// 0
					[400, 1060], 	// 1
				],
				interval: 6580,
				sensitivity: 0.8,
				repetitions: 20,
				minimalLength: 17,
				maximalLength: 17,
			},
		},
		selectplus_doorbell: {
			extends: ['selectplus'],
			driver: './selectplus/drivers/doorbell.js',
			class: 'doorbell',
			capabilities: ['alarm_generic'],
			debounceTimeout: 3000,
			pair: {
				viewOrder: [
					'generic_imitate',
					'generic_test_button',
					'generic_done',
				],
			},
			triggers: [
				{
					id: 'received',
					title: 'trigger.received.title.doorbell',
				},
			],
			actions: [
				{
					id: 'send',
					title: 'action.send.title.doorbell',
				},
			],
		},
	},
	devices: {
		SP200689103: {
			extends: 'selectplus_doorbell',
			name: 'Selectplus doorbell',
			icon: './selectplus/assets/doorbell/doorbell.svg',
			pair: {
				viewOptions: {
					generic_imitate: {
						title: 'doorbell.imitate',
						svg: './selectplus/assets/doorbell/doorbell.svg',
					},
					generic_test_button: {
						title: 'doorbell.test',
						svg: './selectplus/assets/doorbell/bell.svg',
					},
					generic_done: {
						title: 'done',
					},
				},
			},
		},
	},
};
