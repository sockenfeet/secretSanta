const log4js = require('log4js');
log4js.configure({
	appenders: {
    everything: { type: 'file', filename: 'logs/debugLog.log' },
	// assignment: { type: 'file', filename: 'assignmentLog.log' },
    },
	categories: { default: { appenders: ['everything'], level: 'debug' } }
})
// const assignmentLogger = log4js.getLogger();
const debugLogger = log4js.getLogger();
// assignmentLogger.level = 'info';
debugLogger.level = 'debug';

const dt = new Date();
var utcDate = dt.toUTCString();
debugLogger.info(`Running at ${utcDate}`);

