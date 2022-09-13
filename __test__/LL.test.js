'use strict';

const LinkedList = require('../LL.js');

describe('testing Linked List', () => {
	it('test Linked list instance', () => {

		const ll = new LinkedList();
		expect(ll).toBeInstanceOf(LinkedList);
		expect(ll.head).toBeNull();



	})

})


describe('insert to the beginning of the Linked list', () => {
	// if ll is empty
	it('add to an empty ll', () => {

         const ll = new LinkedList();
		 ll.insert('a');
		 expect(ll.head.value).toEqual('a');
		 expect(ll.head.next).toBeNull();


	})
})

   //if ll is non-empty
   it('add to a non-empty ll', ()=>{
    const ll = new LinkedList();
	ll.insert('a');
	ll.insert('b');
	expect(ll.head.value).toEqual('b');
	expect(ll.head.next.value).toEqual('a');

   })



