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
 * Finds the merge point of two singly linked lists. 
 * @param {ListNode} headA The head node of the first linked list
 * @param {ListNode} headB The head node of the second linked list
 * @returns {ListNode|null} The merge point node or null if there is no merge point
 */
export function getMergePoint(headA, headB) {
	let pointerA = headA;
	let pointerB = headB;
	let stackA = [];
	let stackB = [];
	while (pointerA) {
		stackA.push(pointerA);
		pointerA = pointerA.next;
	}
	while (pointerB) {
		stackB.push(pointerB);
		pointerB = pointerB.next;
	}
	let mergePoint = null;
	while (stackA.length > 0 && stackB.length > 0) {
		const nodeA = stackA.pop();
		const nodeB = stackB.pop();
		if (nodeA === nodeB) {
			mergePoint = nodeA;
		} else {
			break;
		}
	}
	return mergePoint;
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
	const common = new ListNode(8, new ListNode(10));
	const headA = new ListNode(3, new ListNode(7, common));
	const headB = new ListNode(99, new ListNode(1, common));
	console.log('List A:');
	printList(headA);
	console.log('List B:');
	printList(headB);
	const mergePoint = getMergePoint(headA, headB);
	console.log('Merge Point:', mergePoint ? mergePoint.value : 'No merge point');
	console.log('---');
})();