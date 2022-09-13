'use strict'
const Node = require('./Node');
class LinkedList {
	constructor() {
		this.head = null;
	}



	insert(value) {
		const node = new Node(value);
		if (!this.head) {
			this.head = node;

		} else {
			node.next = this.head;
			this.head = node;
		}
	}


	append(value) {
		const node = new Node(value);
		if (!this.head) {  // ll is empty
			this.head = node;
		}
		else {  // ll is not empty
			let currentNode = this.head
			while (currentNode.next) {
				currentNode = currentNode.next;
			}
			currentNode.next = node;
		}
	}

	insertTo(newAddedNode, location) {
		let baseNode = this.head;
		let counter = 1;
		while (baseNode.next) {
			if (counter == location - 1) {
				let newNode = new Node(newAddedNode);
				newNode.next = baseNode.next;
				baseNode.next = newNode;

			}
			baseNode = baseNode.next;
			counter++;
		}

	}
	delete() {
		if (this.head) {
			let fNode = this.head;
			let nodesNumber = 1;
			while (fNode.next) {
				nodesNumber++;
				fNode = fNode.next;
			}
			console.log(nodesNumber);

			let center = Math.ceil(nodesNumber / 2);
			let targetedNode = this.head;
			for (let i = 1; i < center - 1; i++) {

				targetedNode = targetedNode.next;
			}
			console.log(targetedNode);
			targetedNode.next = targetedNode.next.next;

		} else {
			console.log('the list is empty');
		}
	}
}



module.exports = LinkedList;