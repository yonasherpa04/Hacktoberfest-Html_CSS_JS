/*
 * Topic: Palindrome Linked List
 * Language: Java
 * 
 * Description:
 * Given the head of a singly linked list, determine if it is a palindrome.
 * 
 * Example:
 * Input: 1 -> 2 -> 2 -> 1
 * Output: true
 * 
 * Approach:
 * 1. Find the middle of the linked list using the slow and fast pointer technique.
 * 2. Reverse the second half of the linked list.
 * 3. Compare the first half and the reversed second half node by node.
 * 4. If all nodes match, the linked list is a palindrome.
 * 5. Restore the original list (optional).
 * 6. Return the result.
 * 
 * Leetcode link:   
 * https://leetcode.com/problems/palindrome-linked-list/
 */

class ListNode {
    int val;
    ListNode next;
    ListNode(int val) { this.val = val; }
}

public class PalindromeLinkedList {

    public static boolean isPalindrome(ListNode head) {
        if (head == null || head.next == null) return true;

        // Find middle
        ListNode slow = head, fast = head;
        while (fast.next != null && fast.next.next != null) {
            slow = slow.next;
            fast = fast.next.next;
        }

        // Reverse second half
        ListNode secondHalf = reverse(slow.next);
        ListNode firstHalf = head;

        // Compare both halves
        while (secondHalf != null) {
            if (firstHalf.val != secondHalf.val) return false;
            firstHalf = firstHalf.next;
            secondHalf = secondHalf.next;
        }

        return true;
    }

    private static ListNode reverse(ListNode head) {
        ListNode prev = null, curr = head;
        while (curr != null) {
            ListNode next = curr.next;
            curr.next = prev;
            prev = curr;
            curr = next;
        }
        return prev;
    }

    public static void main(String[] args) {
        ListNode head = new ListNode(1);
        head.next = new ListNode(2);
        head.next.next = new ListNode(2);
        head.next.next.next = new ListNode(1);

        System.out.println("Is Palindrome: " + isPalindrome(head));
    }
}

/*
 * Time Complexity: O(n)
 * Space Complexity: O(1)
 */
