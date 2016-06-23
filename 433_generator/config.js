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
