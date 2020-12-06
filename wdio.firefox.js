const merge = require('deepmerge')
const wdioConf = require('./wdio.conf.js')

exports.config = merge(wdioConf.config, {
    services: ['selenium-standalone'],
    capabilities: [{
        browserName: 'firefox',
        }
    ],
}, { clone: false })