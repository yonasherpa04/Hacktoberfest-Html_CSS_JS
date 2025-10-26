/*
 * Topic: Detect Cycle in a Linked List
 * Language: Java
 *
 * Description:
 * Given the head of a linked list, determine if the linked list has a cycle in it.
 * A cycle occurs if a node’s next pointer points back to a previous node.
 *
 * Example:
 * Input: head = [3,2,0,-4], tail connects to node index 1
 * Output: true
 *
 * Explanation:
 * 3 → 2 → 0 → -4
 *      ↑         |
 *      └─────────┘
 *
 * Approaches:
 * HashSet Approach:
 *    - Store visited nodes in a HashSet.
 *    - If a node repeats, a cycle exists.
 *    - Time: O(n), Space: O(n)
 *
 * Floyd’s Cycle Detection (Tortoise and Hare):
 *    - Use two pointers (slow, fast).
 *    - If they ever meet, there’s a cycle.
 *    - Time: O(n), Space: O(1)
 *
 * LeetCode Link:
 * https://leetcode.com/problems/linked-list-cycle/
 */

import java.util.HashSet;

class ListNode {
    int val;
    ListNode next;
    ListNode(int val) {
        this.val = val;
        this.next = null;
    }
}

public class DetectCycle {

    /**
     * Detects a cycle using HashSet approach.
     * @param head The head of the linked list
     * @return true if a cycle exists, false otherwise
     */
    public static boolean hasCycleHashSet(ListNode head) {
        HashSet<ListNode> visited = new HashSet<>();

        while (head != null) {
            if (visited.contains(head)) {
                return true; // cycle found
            }
            visited.add(head);
            head = head.next;
        }
        return false; // no cycle
    }

    /**
     * Detects a cycle using Floyd’s Cycle Detection Algorithm.
     * @param head The head of the linked list
     * @return true if a cycle exists, false otherwise
     */
    public static boolean hasCycleFloyd(ListNode head) {
        if (head == null || head.next == null) return false;

        ListNode slow = head;
        ListNode fast = head;

        while (fast != null && fast.next != null) {
            slow = slow.next;         // move 1 step
            fast = fast.next.next;    // move 2 steps

            if (slow == fast) {
                return true; // cycle detected
            }
        }
        return false; // no cycle
    }

    public static void main(String[] args) {
        // Create nodes
        ListNode head = new ListNode(3);
        ListNode second = new ListNode(2);
        ListNode third = new ListNode(0);
        ListNode fourth = new ListNode(-4);

        // Connect nodes
        head.next = second;
        second.next = third;
        third.next = fourth;
        fourth.next = second; // creates a cycle

        // Test both methods
        System.out.println("Cycle detection using HashSet: " + hasCycleHashSet(head));
        System.out.println("Cycle detection using Floyd's Algorithm: " + hasCycleFloyd(head));

        // Create non-cyclic list for testing
        ListNode a = new ListNode(1);
        ListNode b = new ListNode(2);
        a.next = b;

        System.out.println("\nNon-cyclic list test:");
        System.out.println("Cycle detection using HashSet: " + hasCycleHashSet(a));
        System.out.println("Cycle detection using Floyd's Algorithm: " + hasCycleFloyd(a));
    }
}

/*
 * ----------------------------------------------
 * Example Output:
 *
 * Cycle detection using HashSet: true
 * Cycle detection using Floyd's Algorithm: true
 *
 * Non-cyclic list test:
 * Cycle detection using HashSet: false
 * Cycle detection using Floyd's Algorithm: false
 * ----------------------------------------------
 *
 * Time Complexity:
 * - HashSet Approach: O(n)
 * - Floyd’s Algorithm: O(n)
 *
 * Space Complexity:
 * - HashSet Approach: O(n)
 * - Floyd’s Algorithm: O(1)
 */
