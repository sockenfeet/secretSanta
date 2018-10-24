const log4js = require('log4js');
log4js.configure({
	appenders: {
    everything: { type: 'file', filename: '../logs/debugLog.log' },
    },
	categories: { default: { appenders: ['everything'], level: 'debug' } }
});
const debugLogger = log4js.getLogger();
debugLogger.level = 'debug';

const userManager = require('./retrieveUsers.js');
const Assigner = require('./Assigner.js').Assigner;
const sendEmail = require('./emails/sendEmail').sendMessage;
const allGood = require('./emails/sendEmail').areWeSet;

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
allGood();
// const testSender = {name: "Jobes", email: "joanna.jobes@hotmail.com"};
// const testAssignee = {name: "Testing McTestyface", email: "nonesense@noidea.asdf"};
// sendEmail(testSender, testAssignee);
assignments.forEach(assignment => {
	sendEmail(assignment.sender, assignment.recipient);
});
