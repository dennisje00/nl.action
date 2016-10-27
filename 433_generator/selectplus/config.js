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
				id: 'selectplus',
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
			extends: ['generic_switch', 'selectplus'],
			driver: './selectplus/drivers/doorbell.js',
			class: 'doorbell',
			capabilities: ['alarm_generic'],
			debounceTimeout: 1000,
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
					title: 'deviceClasses.selectplus.selectplus_doorbell.triggers.received.title',
				},
			],
			actions: [
				{
					id: 'send',
					title: 'deviceClasses.selectplus.selectplus_doorbell.actions.received.title',
				},
			],
		},
	},
	devices: {
		SP200689103: {
			extends: 'selectplus_doorbell',
			name: 'devices.selectplus.SP200689103.name',
			images: {
				small: './selectplus/assets/images/small.png',
				large: './selectplus/assets/images/large.png',
			},
			icon: './selectplus/assets/doorbell/doorbell.svg',
			pair: {
				viewOptions: {
					generic_imitate: {
						// title: 'selectplus.devices.SP200689103.views.generic_imitate.title',
						svg: './selectplus/assets/doorbell/doorbell.svg',
					},
					generic_test_button: {
						// title: 'selectplus.devices.SP200689103.views.generic_test_button.title',
						svg: '../assets/433_generator/images/bell.svg',
					},
				},
			},
		},
	},
};
