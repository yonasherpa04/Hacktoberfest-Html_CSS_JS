/*
 * Topic: Find the Middle of a Linked List
 * Language: Java
 *
 * Description:
 * Given the head of a singly linked list, return the middle node.
 * If there are two middle nodes, return the second middle node.
 * 
 * Approach:
 *   - Use two pointers (slow and fast).
 *  - Move slow by one step and fast by two steps.
 *  - When fast reaches the end, slow will be at the middle.
 *  - Time: O(n), Space: O(1)
 *
 * Example:
 * Input: 1 → 2 → 3 → 4 → 5
 * Output: 3
 * 
 * LeetCode Link:
 * https://leetcode.com/problems/middle-of-the-linked-list
 */

class ListNode {
    int val;
    ListNode next;
    ListNode(int val) { this.val = val; }
}

public class MiddleOfLinkedList {

    public static ListNode middleNode(ListNode head) {
        ListNode slow = head, fast = head;
        while (fast != null && fast.next != null) {
            slow = slow.next;
            fast = fast.next.next;
        }
        return slow;
    }

    public static void printList(ListNode head) {
        while (head != null) {
            System.out.print(head.val + " -> ");
            head = head.next;
        }
        System.out.println("NULL");
    }

    public static void main(String[] args) {
        ListNode head = new ListNode(1);
        head.next = new ListNode(2);
        head.next.next = new ListNode(3);
        head.next.next.next = new ListNode(4);
        head.next.next.next.next = new ListNode(5);

        System.out.println("Original List:");
        printList(head);

        ListNode mid = middleNode(head);
        System.out.println("\nMiddle Node Value: " + mid.val);
    }
}

/*
 * Time Complexity: O(n)
 * Space Complexity: O(1)
 */
