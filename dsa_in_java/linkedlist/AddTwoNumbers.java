/*
 * Topic: Add Two Numbers Represented by Linked Lists
 * Language: Java
 * 
 * Description:
 * You are given two non-empty linked lists representing two non-negative integers. The digits are stored in reverse order, and each of their nodes contains a single digit. Add the two numbers and return the sum as a linked list.
 * 
 * Example:
 * Input: (2 -> 4 -> 3) + (5 -> 6 -> 4)
 * Output: 7 -> 0 -> 8
 * 
 * Approach:
 * 1. Initialize a dummy node to build the result linked list.
 * 2. Use two pointers to traverse the input linked lists and a variable to keep track of carry.
 * 3. While there are nodes to process in either list or there is a carry:
 *   a. Sum the values of the current nodes and the carry.
 *   b. Update the carry for the next iteration.
 *   c. Create a new node with the digit value of the sum and append it to the result list.
 * 4. Return the next node of the dummy node as the head of the result linked list.
 * 
 * Leetcode link:
 * https://leetcode.com/problems/add-two-numbers/
 * 
 */

class ListNode {
    int val;
    ListNode next;
    ListNode(int val) { this.val = val; }
}

public class AddTwoNumbers {

    public static ListNode addTwoNumbers(ListNode l1, ListNode l2) {
        ListNode dummy = new ListNode(0);
        ListNode curr = dummy;
        int carry = 0;

        while (l1 != null || l2 != null || carry != 0) {
            int sum = carry;
            if (l1 != null) { sum += l1.val; l1 = l1.next; }
            if (l2 != null) { sum += l2.val; l2 = l2.next; }

            carry = sum / 10;
            curr.next = new ListNode(sum % 10);
            curr = curr.next;
        }

        return dummy.next;
    }

    public static void main(String[] args) {
        ListNode l1 = new ListNode(2);
        l1.next = new ListNode(4);
        l1.next.next = new ListNode(3);

        ListNode l2 = new ListNode(5);
        l2.next = new ListNode(6);
        l2.next.next = new ListNode(4);

        ListNode result = addTwoNumbers(l1, l2);

        while (result != null) {
            System.out.print(result.val + " -> ");
            result = result.next;
        }
        System.out.println("NULL");
    }
}

/*
 * Time Complexity: O(max(n, m))
 * Space Complexity: O(max(n, m))
 */
