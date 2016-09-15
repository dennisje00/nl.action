'use strict';
const fs = require('fs');
const path = require('path');

const configs = fs.readdirSync(__dirname)
	.filter(file => fs.statSync(path.join(__dirname, file)).isDirectory())
	.map(configDir => require(`./${path.join(configDir, 'config.js')}`)); // eslint-disable-line

module.exports = {
	drivers: [
		{
			id: 'eurodomest',
			name: {
				en: 'Eurodomest socket (depricated)',
				nl: 'Eurodomest schakelaar(verouderd)',
			},
			images: {
				large: '../drivers/eurodomest/assets/images/large.png',
				small: '../drivers/eurodomest/assets/images/small.png',
			},
			class: 'socket',
			capabilities: ['onoff'],
		},
		{
			id: 'impuls',
			name: {
				en: 'Impuls socket (depricated)',
				nl: 'Impuls stopcontact (verouderd)',
			},
			images: {
				large: '../drivers/impuls/assets/images/large.png',
				small: '../drivers/impuls/assets/images/small.png',
			},
			class: 'socket',
			capabilities: ['onoff'],
		},
		{
			id: 'promax',
			name: {
				en: 'Promax socket (depricated)',
				nl: 'Promax schakelaar (verouderd)',
			},
			images: {
				large: '../drivers/promax/assets/images/large.png',
				small: '../drivers/promax/assets/images/small.png',
			},
			class: 'socket',
			capabilities: ['onoff'],
		},
		{
			id: 'selectplus_doorbell',
			name: {
				en: 'Doorbell (depricated)',
				nl: 'Deurbel (verouderd)',
			},
			images: {
				large: '../drivers/selectplus_doorbell/assets/images/large.png',
				small: '../drivers/selectplus_doorbell/assets/images/small.png',
			},
			class: 'button',
			capabilities: ['onoff'],
		},
	],
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
