/**
 * Definition for singly-linked list.
 */
export class ListNode {
	/**
	 * Creates a new ListNode.
	 * @param {number} value The value of the node
	 * @param {ListNode} next The reference to the next node (default is null)
	 */
	constructor(value = 0, next = null) {
		this.value = value;
		this.next = next;
	}
}

/**
 * This function reverses a singly linked list.
 * @param {ListNode} head The head of the linked list
 * @returns {ListNode} The new head of the reversed linked list
 * */
export function reverseLinkedList(head) {
	let prev = null;
	let current = head;
	while (current) {
		const nextNode = current.next; // Store next node
		current.next = prev;           // Reverse the link
		prev = current;                // Move prev to current
		current = nextNode;            // Move to next node
	}
	return prev; // New head of the reversed list
}

/**
 * Helper function to print the linked list (for testing purposes).
 * @param {ListNode} head The head of the linked list
 */
export function printList(head) {
	let current = head;
	const values = [];
	while (current) {
		values.push(current.value);
		current = current.next;
	}
	console.log(values.join(' -> '));
}

// tiny self-checks in console
if (typeof window !== "undefined")
(function selfTest() {
	const head = new ListNode(1, new ListNode(2, new ListNode(3, new ListNode(4, new ListNode(5)))));
	console.log('Original list:');
	printList(head);
	console.log('---');
	const reversedHead = reverseLinkedList(head);
	console.log('Reversed list:');
	printList(reversedHead);
	console.log('---');
})();