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
			pair: {
				viewOptions: {
					generic_imitate: {
						title: 'deviceClasses.remote.pair.generic_imitate.title',
						body: 'deviceClasses.remote.pair.generic_imitate.body',
					},
					generic_test_remote: {
						title: 'views.generic_test_remote.title',
						body: 'views.generic_test_remote.body',
					},
				},
			},
			actions: [
				{
					id: 'send',
					title: 'deviceClasses.remote.triggers.send.title',
					args: [
						{
							name: 'unit',
							type: 'dropdown',
							values: [
								{ id: '00001', label: 'deviceClasses.remote.triggers.received.button_1' },
								{ id: '00100', label: 'deviceClasses.remote.triggers.received.button_2' },
								{ id: '00101', label: 'deviceClasses.remote.triggers.received.button_3' },
								{ id: '10000', label: 'deviceClasses.remote.triggers.received.button_4' },
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
