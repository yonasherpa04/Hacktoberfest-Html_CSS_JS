/*
 * Topic: Merge Two Sorted Linked Lists
 * Language: Java
 *
 * Description:
 * Merge two sorted linked lists and return it as a new sorted list.
 * 
 * Example:
 * Input: l1 = 1 → 3 → 5, l2 = 2 → 4 → 6
 * Output: 1 → 2 → 3 → 4 → 5 → 6
 * 
 * Approach:
 *    - Use a dummy node to simplify edge cases.    
 *   - Compare nodes from both lists and link the smaller one to the merged list.
 *   - Time: O(n + m), Space: O(1)
 *
 * LeetCode Link:
 * https://leetcode.com/problems/merge-two-sorted-lists/
 */

class ListNode {
    int val;
    ListNode next;
    ListNode(int val) { this.val = val; }
}

public class MergeTwoSortedLists {

    public static ListNode mergeTwoLists(ListNode l1, ListNode l2) {
        ListNode dummy = new ListNode(-1);
        ListNode tail = dummy;

        while (l1 != null && l2 != null) {
            if (l1.val <= l2.val) {
                tail.next = l1;
                l1 = l1.next;
            } else {
                tail.next = l2;
                l2 = l2.next;
            }
            tail = tail.next;
        }

        tail.next = (l1 != null) ? l1 : l2;
        return dummy.next;
    }

    public static void main(String[] args) {
        ListNode l1 = new ListNode(1);
        l1.next = new ListNode(3);
        l1.next.next = new ListNode(5);

        ListNode l2 = new ListNode(2);
        l2.next = new ListNode(4);
        l2.next.next = new ListNode(6);

        ListNode merged = mergeTwoLists(l1, l2);

        while (merged != null) {
            System.out.print(merged.val + " -> ");
            merged = merged.next;
        }
        System.out.println("NULL");
    }
}

/*
 * Time Complexity: O(n + m)
 * Space Complexity: O(1)
 */
