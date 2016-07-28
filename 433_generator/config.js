'use strict';
const fs = require('fs');
const path = require('path');

const configs = fs.readdirSync(__dirname)
	.filter(file => fs.statSync(path.join(__dirname, file)).isDirectory())
	.map(configDir => require(`./${path.join(configDir, 'config.js')}`)); // eslint-disable-line

module.exports = {
	deviceClasses: {
		remote: {
			extends: 'generic_remote',
			actions: [
				{
					id: 'send',
					title: 'deviceClasses.remote.triggers.send.title',
					args: [
						{
							name: 'unit',
							type: 'dropdown',
							values: [
								{ id: '00001', label: 'deviceClasses.remote.triggers.received.values.button_A' },
								{ id: '00100', label: 'deviceClasses.remote.triggers.received.values.button_B' },
								{ id: '00101', label: 'deviceClasses.remote.triggers.received.values.button_C' },
								{ id: '10000', label: 'deviceClasses.remote.triggers.received.values.button_D' },
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
