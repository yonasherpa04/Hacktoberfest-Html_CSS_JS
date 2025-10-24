// Floyd’s Cycle Detection Algorithm (Tortoise and Hare)

// Definition for singly-linked list node
class ListNode {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

/**
 * Detects if a linked list has a cycle.
 * @param {ListNode} head - The head of the linked list
 * @returns {boolean} true if cycle exists, false otherwise
 */
function hasCycle(head) {
  if (!head || !head.next) return false;

  let slow = head;
  let fast = head;

  while (fast && fast.next) {
    slow = slow.next;
    fast = fast.next.next;

    if (slow === fast) return true;
  }
  return false;
}

module.exports = hasCycle;
