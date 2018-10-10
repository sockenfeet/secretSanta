const log4js = require('log4js');

class User {
	constructor(name, email) {
		this.name = name;
		this.email = email;
	}
}

module.exports = { User };