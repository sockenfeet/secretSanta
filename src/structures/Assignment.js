const log4js = require('log4js');

class Assignment {
	constructor(sender, recipient) {
		this.sender = sender;
		this.recipient = recipient;
	}
}

module.exports = { Assignment };