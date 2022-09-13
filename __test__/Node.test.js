'use strict';

const Node = require('../Node.js');

describe('testing Node class', () => {
	it('test creating a Node instances ', () => {

		const value = 'anything';
		const node = new Node(value);
		expect(node).toBeInstanceOf(Node);
		expect(node.value).toEqual(value);
		expect(node.next).toBeNull();




	})



})