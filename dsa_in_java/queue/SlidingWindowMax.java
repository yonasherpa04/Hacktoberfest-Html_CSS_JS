/*
 * Topic: Sliding Window Maximum
 * Language: Java
 *
 * Description:
 * Given an array nums[] and a window size k, return the maximum value in each window.
 * Uses a deque to keep indexes of useful elements.
 *
 * Example:
 * Input: nums = [1,3,-1,-3,5,3,6,7], k = 3
 * Output: [3,3,5,5,6,7]
 */

import java.util.*;

public class SlidingWindowMax {
    public static int[] maxSlidingWindow(int[] nums, int k) {
        if (nums == null || k <= 0) return new int[0];
        int n = nums.length;
        int[] res = new int[n - k + 1];
        Deque<Integer> dq = new ArrayDeque<>();

        for (int i = 0; i < n; i++) {
            // Remove out-of-window indices
            while (!dq.isEmpty() && dq.peekFirst() < i - k + 1) dq.pollFirst();
            // Remove smaller elements
            while (!dq.isEmpty() && nums[dq.peekLast()] < nums[i]) dq.pollLast();
            dq.offerLast(i);
            if (i >= k - 1) res[i - k + 1] = nums[dq.peekFirst()];
        }
        return res;
    }

    public static void main(String[] args) {
        int[] nums = {1,3,-1,-3,5,3,6,7};
        int[] ans = maxSlidingWindow(nums, 3);
        System.out.print("Sliding Window Maximums: ");
        for (int x : ans) System.out.print(x + " ");
    }
}

/*
 * ----------------------------------------------
 * Output:
 * Sliding Window Maximums: 3 3 5 5 6 7
 * ----------------------------------------------
 * Time Complexity: O(n)
 * Space Complexity: O(k)
 */
