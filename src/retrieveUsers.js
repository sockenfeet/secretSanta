const readlineSync = require('readline-sync');
const User = require('./User.js').User;

function getUsers() {
	let users = [];
	let finished = false;
	console.log("Hello! Please enter each user's details at the prompt, please note a minimum of 3 users are required");
	while(!finished) {
		users.push(newUser(users.length));
		if (users.length >= 3) {
			finished = readlineSync.keyInYN(`So far you have entered ${users.length} users. Is that all of them? `);
		}
	}
	return users;
}

function newUser(n) {
	const userName = readlineSync.question("What is the name of the next User? ");
	const emailAddress = readlineSync.question(`And what is ${userName}'s email address? `);
	return new User(userName, emailAddress);
}

module.exports = { getUsers };