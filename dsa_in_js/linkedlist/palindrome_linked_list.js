/**
 * Definition for singly-linked list node.
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
 * Checks if a singly linked list is a palindrome using the Two Pointer technique.
 * @param {ListNode} head The head of the linked list
 * @returns {boolean} True if the list is a palindrome, otherwise false
 */
export function isPalindrome(head) {
	if (!head || !head.next) return true;

	// Step 1: Find middle using slow and fast pointers
	let slow = head;
	let fast = head;
	while (fast && fast.next) {
		slow = slow.next;
		fast = fast.next.next;
	}

	// Step 2: Reverse the second half
	let prev = null;
	let curr = slow;
	while (curr) {
		const nextNode = curr.next;
		curr.next = prev;
		prev = curr;
		curr = nextNode;
	}

	// Step 3: Compare first and second halves
	let first = head;
	let second = prev;
	while (second) {
		if (first.value !== second.value) return false;
		first = first.next;
		second = second.next;
	}

	return true;
}

/**
 * Helper function to create a linked list from an array.
 * @param {number[]} arr The array of values
 * @returns {ListNode} The head of the linked list
 */
export function createLinkedList(arr) {
	if (arr.length === 0) return null;
	const head = new ListNode(arr[0]);
	let current = head;
	for (let i = 1; i < arr.length; i++) {
		current.next = new ListNode(arr[i]);
		current = current.next;
	}
	return head;
}

/**
 * Helper function to print the linked list (for testing purposes).
 * @param {ListNode} head The head of the linked list
 */
export function printList(head) {
	const values = [];
	let current = head;
	while (current) {
		values.push(current.value);
		current = current.next;
	}
	console.log(values.join(' -> '));
}

/**
 * Tiny self-check in browser console.
 */
if (typeof window !== "undefined")
(function selfTest() {
	const head1 = createLinkedList([1, 2, 3, 2, 1]);
	console.log("List 1:");
	printList(head1);
	console.log("Is palindrome? ->", isPalindrome(head1));

	console.log("---");

	const head2 = createLinkedList([1, 2, 3, 4]);
	console.log("List 2:");
	printList(head2);
	console.log("Is palindrome? ->", isPalindrome(head2));
})();
