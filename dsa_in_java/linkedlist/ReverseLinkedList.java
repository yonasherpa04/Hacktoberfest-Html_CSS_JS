/*
 * Topic: Reverse a Linked List
 * Language: Java
 *
 * Description:
 * Given the head of a singly linked list, reverse the list and return the new head.
 * 
 * Example:
 * Input: 1 → 2 → 3 → 4 → 5 → NULL
 * Output: 5 → 4 → 3 → 2 → 1 → NULL
 *
 * Approaches:
 * Iterative Approach:
 *    - Use three pointers (prev, current, next).
 *    - Reverse the direction of each node’s next pointer.
 *    - Time: O(n), Space: O(1)
 *
 * Recursive Approach:
 *    - Recur until the end, then reverse links while returning.
 *    - Time: O(n), Space: O(n) (stack space)
 *
 * LeetCode Link:
 * https://leetcode.com/problems/reverse-linked-list/
 */

class ListNode {
    int val;
    ListNode next;
    ListNode(int val) {
        this.val = val;
        this.next = null;
    }
}

public class ReverseLinkedList {

    /**
     * Reverses the linked list using an iterative approach.
     * @param head The head of the linked list
     * @return The new head after reversal
     */
    public static ListNode reverseIterative(ListNode head) {
        ListNode prev = null;
        ListNode current = head;

        while (current != null) {
            ListNode nextNode = current.next; // store next
            current.next = prev;              // reverse link
            prev = current;                   // move prev forward
            current = nextNode;               // move current forward
        }
        return prev; // prev becomes new head
    }

    /**
     * Reverses the linked list using recursion.
     * @param head The head of the linked list
     * @return The new head after reversal
     */
    public static ListNode reverseRecursive(ListNode head) {
        if (head == null || head.next == null)
            return head;

        ListNode newHead = reverseRecursive(head.next);
        head.next.next = head;
        head.next = null;

        return newHead;
    }

    // Utility to print the linked list
    public static void printList(ListNode head) {
        while (head != null) {
            System.out.print(head.val + " -> ");
            head = head.next;
        }
        System.out.println("NULL");
    }

    public static void main(String[] args) {
        // Create Linked List: 1 → 2 → 3 → 4 → 5 → NULL
        ListNode head = new ListNode(1);
        head.next = new ListNode(2);
        head.next.next = new ListNode(3);
        head.next.next.next = new ListNode(4);
        head.next.next.next.next = new ListNode(5);

        System.out.println("Original Linked List:");
        printList(head);

        // Reverse Iteratively
        ListNode reversedIter = reverseIterative(head);
        System.out.println("\nReversed Linked List (Iterative):");
        printList(reversedIter);

        // Reverse Recursively (to get original order back)
        ListNode reversedRec = reverseRecursive(reversedIter);
        System.out.println("\nReversed Linked List (Recursive):");
        printList(reversedRec);
    }
}

/*
 * ----------------------------------------------
 * Example Output:
 * Original Linked List:
 * 1 → 2 → 3 → 4 → 5 → NULL
 *
 * Reversed Linked List (Iterative):
 * 5 → 4 → 3 → 2 → 1 → NULL
 *
 * Reversed Linked List (Recursive):
 * 1 → 2 → 3 → 4 → 5 → NULL
 * ----------------------------------------------
 *
 * Time Complexity:
 * - Iterative: O(n)
 * - Recursive: O(n)
 *
 * Space Complexity:
 * - Iterative: O(1)
 * - Recursive: O(n)  (due to recursion call stack)
 */
