const Assignment = require('./structures/Assignment').Assignment;
const log4js = require('log4js');

class Assigner {
	constructor(userList) {
		this.userList = userList;
		this.lastUser = userList[userList.length-1];
		this.assign = assignUsers;
	}
}

function assignUsers() {
	const assignments = [];
	let toBeAssigned = this.userList.slice(0); // make a copy of array
	for (let i=0; i<this.userList.length; i++) {
		const newAssignment = assignUser(this.userList[i], toBeAssigned);
		assignments.push(newAssignment);
		toBeAssigned = toBeAssigned.filter(x => x!==newAssignment.recipient);
	}
	return assignments;
}

function assignUser(user, toBeAssigned) {
	let recipient;
	switch (toBeAssigned.length) {
		case 1:
			recipient = toBeAssigned[0];
			break;
		case 2:
			const potentialClash = toBeAssigned.indexOf(this.lastUser);
			if(potentialClash === -1) {
				recipient = randomSelectAvoiding(toBeAssigned, user);
			} else {
				recipient = toBeAssigned[(1-potentialClash)]; //1-0=1 and 1-1=0
			}
			break;
		default:
			recipient = randomSelectAvoiding(toBeAssigned, user);
			break;
	}
	return new Assignment(user, recipient);
}

function randomSelectAvoiding(list, avoid) {
	let selection;
	do {
		selection = randomSelection(list);
	} while (selection === avoid);
	return selection;
}

function randomSelection(list) {
	const listSize = list.length;
	const randomIndex = Math.floor(Math.random()*listSize);
	return list[randomIndex];
}

module.exports = { Assigner };