const log4js = require('log4js');
log4js.configure({
	appenders: {
    everything: { type: 'file', filename: 'logs/debugLog.log' },
	// assignment: { type: 'file', filename: 'assignmentLog.log' },
    },
	categories: { default: { appenders: ['everything'], level: 'debug' } }
});
const debugLogger = log4js.getLogger();
debugLogger.level = 'debug';

const userManager = require('./retrieveUsers.js');
const Assigner = require('./Assigner.js').Assigner;

const dt = new Date();
var utcDate = dt.toUTCString();
debugLogger.info(`Running at ${utcDate}`);

const userList = userManager.getUsers();
const assignments = new Assigner(userList).assign();

console.log("users are: ");
for (let i=0; i<userList.length; i++) {
	console.log(userList[i]);
}
console.log(assignments);

