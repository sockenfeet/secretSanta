const log4js = require('log4js');

class User {
	constructor(name, email) {
		this.name = name;
		this.email = email;
		this.toBuyFor = undefined;
	}
}

module.exports = { User };