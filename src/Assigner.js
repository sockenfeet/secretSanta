const User = require('./User');
const Assigner = require('./Assigner');
const Assignment = require('./Assignment');
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
		const newAssignment = assignUser(userList[i], toBeAssigned);
		assignments.push(newAssignment);
		const used = toBeAssigned.indexOf(newAssignment.recipient);
		toBeAssigned = toBeAssigned.splice(used,1);
	}
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
				recipient = randomSelection(toBeAssigned);
			} else {
				recipient = toBeAssigned[(1-potentialClash)]; //1-0=1 and 1-1=0
			}
			break;
		default:
			recipient = randomSelection(toBeAssigned);
			break;
	}
	return new Assignment(user, recipient);
	}
}

function randomSelection(list) {
	const listSize = list.length;
	const randomIndex = Math.floor(Math.random()*listSize);
	return list[randomIndex];
}

module.exports = { Assigner };