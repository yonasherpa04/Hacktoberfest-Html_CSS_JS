/*
 * Topic: Remove Duplicates from Sorted Linked List
 * Language: Java
 * 
 * Description:
 * Given the head of a sorted linked list, delete all duplicates such that each element appears only once. Return the linked list sorted as well.
 * 
 * Example:
 * Input: 1 -> 1 -> 2 -> 3 -> 3
 * Output: 1 -> 2 -> 3
 * 
 * Approach:
 * 1. Initialize a pointer to traverse the linked list.
 * 2. While the current node and the next node are not null:
 *     a. If the value of the current node is equal to the value of the next node, skip the next node by adjusting the current node's next pointer.
 *     b. If the values are not equal, move the pointer to the next node.   
 * 3. Return the head of the modified linked list.
 * 
 * Leetcode link:
 * https://leetcode.com/problems/remove-duplicates-from-sorted-list/
 */

class ListNode {
    int val;
    ListNode next;
    ListNode(int val) { this.val = val; }
}

public class RemoveDuplicatesSortedList {

    public static ListNode deleteDuplicates(ListNode head) {
        ListNode current = head;
        while (current != null && current.next != null) {
            if (current.val == current.next.val)
                current.next = current.next.next;
            else
                current = current.next;
        }
        return head;
    }

    public static void main(String[] args) {
        ListNode head = new ListNode(1);
        head.next = new ListNode(1);
        head.next.next = new ListNode(2);
        head.next.next.next = new ListNode(3);
        head.next.next.next.next = new ListNode(3);

        head = deleteDuplicates(head);

        while (head != null) {
            System.out.print(head.val + " -> ");
            head = head.next;
        }
        System.out.println("NULL");
    }
}

/*
 * Time Complexity: O(n)
 * Space Complexity: O(1)
 */
