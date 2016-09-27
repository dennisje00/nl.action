'use strict';
const fs = require('fs');
const path = require('path');

const configs = fs.readdirSync(__dirname)
	.filter(file => file.slice(0, 1) !== '_' && fs.statSync(path.join(__dirname, file)).isDirectory())
	.map(configDir => require(`./${path.join(configDir, 'config.js')}`)); // eslint-disable-line

module.exports = {
	drivers: [
		{
			id: 'eurodomest',
			name: {
				en: 'Deprecated',
			},
			images: {
				large: './_deprecated/images/large.png',
				small: './_deprecated/images/small.png',
			},
			class: 'socket',
			capabilities: ['onoff'],
		},
		{
			id: 'impuls',
			name: {
				en: 'Deprecated',
			},
			images: {
				large: './_deprecated/images/large.png',
				small: './_deprecated/images/small.png',
			},
			class: 'socket',
			capabilities: ['onoff'],
		},
		{
			id: 'promax',
			name: {
				en: 'Deprecated',
			},
			images: {
				large: './_deprecated/images/large.png',
				small: './_deprecated/images/small.png',
			},
			class: 'socket',
			capabilities: ['onoff'],
		},
		{
			id: 'selectplus_doorbell',
			name: {
				en: 'Deprecated',
			},
			images: {
				large: './_deprecated/images/large.png',
				small: './_deprecated/images/small.png',
			},
			class: 'button',
			capabilities: ['onoff'],
		},
	],
	flow: {
		actions: [
			{
				id: 'triggerDoorbell',
				title: {
					en: 'Deprecated, please repair device',
					nl: 'Verouderd, voeg apparaat aub opnieuw toe',
				},
				args: [
					{
						name: 'device',
						type: 'device',
						filter: 'driver_id=selectplus_doorbell',
						placeholder: {
							en: 'Which doorbell?',
							nl: 'Welke deurbel?',
						},
					},
				],
			},
		],
	},
	signals: {
		433: {
			promax: {
				sof: [],
				eof: [255],
				words: [
					[280, 1030],
					[930, 380],
				],
				interval: 5000,
				repetitions: 20,
				sensitivity: 0.9,
				minimalLength: 28,
				maximalLength: 28,
			},
			flamingo: {
				sof: [],
				eof: [255],
				words: [
					[280, 1030],
					[930, 380],
				],
				interval: 5000,
				repetitions: 4,
				sensitivity: 0.9,
				minimalLength: 28,
				maximalLength: 28,
			},
		},
	},
};

module.exports.views = Object.assign.apply(
	Object,
	[module.exports.views || {}].concat(configs.map(config => config.views || {}))
);
module.exports.deviceClasses = Object.assign.apply(
	Object,
	[module.exports.deviceClasses || {}].concat(configs.map(config => config.deviceClasses || {}))
);
module.exports.devices = Object.assign.apply(
	Object,
	[module.exports.devices || {}].concat(configs.map(config => config.devices || {}))
);
