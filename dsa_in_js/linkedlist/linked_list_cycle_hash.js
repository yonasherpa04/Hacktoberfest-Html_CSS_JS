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
 * Detects whether a singly linked list contains a cycle using a Hash Table.
 * @param {ListNode} head The head of the linked list
 * @returns {boolean} True if a cycle exists, otherwise false
 * */
export function hasCycle(head) {
	const visited = new Set();
	let current = head;

	while (current) {
		// If we've seen this node before, there's a cycle
		if (visited.has(current)) return true;
		visited.add(current);
		current = current.next;
	}

	// Reached the end — no cycle
	return false;
}

/**
 * Helper function to create a cycle for testing purposes.
 * @param {ListNode} head The head of the linked list
 * @param {number} pos The position (0-indexed) where the tail connects; -1 for no cycle
 */
export function createCycle(head, pos) {
	if (pos === -1) return head;
	let tail = head;
	let cycleNode = null;
	let index = 0;

	while (tail.next) {
		if (index === pos) cycleNode = tail;
		tail = tail.next;
		index++;
	}

	tail.next = cycleNode;
	return head;
}

/**
 * Tiny self-check in browser console.
 */
if (typeof window !== "undefined")
(function selfTest() {
	const head1 = new ListNode(1, new ListNode(2, new ListNode(3, new ListNode(4))));
	console.log("List 1: No cycle ->", hasCycle(head1));

	const head2 = new ListNode(1, new ListNode(2, new ListNode(3, new ListNode(4))));
	createCycle(head2, 1); // Creates cycle: tail connects to node with value 2
	console.log("List 2: With cycle ->", hasCycle(head2));
})();
