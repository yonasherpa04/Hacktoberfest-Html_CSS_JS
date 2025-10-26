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
 * Finds the intersection node of two singly linked lists.
 * @param {ListNode} headA The head of the first linked list
 * @param {ListNode} headB The head of the second linked list
 * @returns {ListNode | null} The intersection node, or null if no intersection exists
 */
export function getIntersectionNode(headA, headB) {
	if (!headA || !headB) return null;

	let pointerA = headA;
	let pointerB = headB;

	/**
	 * Core idea:
	 * Both pointers traverse each list; once they reach the end,
	 * they switch to the other list's head.
	 * This ensures they travel equal total distance (m + n).
	 *
	 * Dry run example:
	 * A: 1 → 2 → 3 → 4 → 5
	 * B:      9 → 4 → 5
	 * Intersection at node with value 4.
	 */
	while (pointerA !== pointerB) {
		pointerA = pointerA ? pointerA.next : headB;
		pointerB = pointerB ? pointerB.next : headA;
	}

	// Either both are null (no intersection) or both meet at intersection node
	return pointerA;
}

/**
 * Helper to create two linked lists with intersection.
 * @param {number[]} listA Values for first list
 * @param {number[]} listB Values for second list
 * @param {number[]} common Values for common tail
 * @returns {[ListNode, ListNode]} The heads of both lists
 */
export function createIntersectingLists(listA, listB, common) {
	const buildList = (arr) => {
		if (arr.length === 0) return null;
		const head = new ListNode(arr[0]);
		let curr = head;
		for (let i = 1; i < arr.length; i++) {
			curr.next = new ListNode(arr[i]);
			curr = curr.next;
		}
		return head;
	};

	const commonHead = buildList(common);
	const headA = buildList(listA);
	const headB = buildList(listB);

	let tailA = headA;
	while (tailA && tailA.next) tailA = tailA.next;
	if (tailA) tailA.next = commonHead;

	let tailB = headB;
	while (tailB && tailB.next) tailB = tailB.next;
	if (tailB) tailB.next = commonHead;

	return [headA, headB];
}

/**
 * Helper function to print the linked list.
 * @param {ListNode} head The head of the linked list
 */
export function printList(head) {
	const values = [];
	let curr = head;
	while (curr) {
		values.push(curr.value);
		curr = curr.next;
	}
	console.log(values.join(" -> "));
}

/**
 * Tiny self-test in browser console.
 */
if (typeof window !== "undefined")
(function selfTest() {
	const [headA, headB] = createIntersectingLists([1, 2, 3], [9, 8], [7, 6, 5]);
	console.log("List A:");
	printList(headA);
	console.log("List B:");
	printList(headB);
	const intersection = getIntersectionNode(headA, headB);
	console.log("Intersection Node:", intersection ? intersection.value : null);

	console.log("---");

	const [headC, headD] = createIntersectingLists([1, 2], [3, 4], []);
	console.log("List C:");
	printList(headC);
	console.log("List D:");
	printList(headD);
	const noIntersection = getIntersectionNode(headC, headD);
	console.log("Intersection Node:", noIntersection ? noIntersection.value : null);
})();
